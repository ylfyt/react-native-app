import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {delay} from '../utils/delay';
import LoadingButton from '../components/loading-button';
import {useAuthContext} from '../contexts/auth';
import RNFetchBlob from 'rn-fetch-blob';
import {IProduct} from '../interfaces/product';
import {ProductTable} from '../components/product-table';
import {readProductFromCsv} from '../utils/read-csv-line';

type Props = NativeStackScreenProps<ParamListBase, 'Home'>;

export const Home: FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const [loadingShow, setLoadingShow] = useState(false);
  const [lastDownloadedFile, setLastDownloadedFile] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);

  const {username} = useAuthContext();

  const download = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'message...',
          message: 'message...',
          buttonNeutral: 'message..',
          buttonNegative: 'No',
          buttonPositive: 'Yes',
        },
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) return;

      const {config, fs} = RNFetchBlob;
      const EquPOS_PATH = `${fs.dirs.DownloadDir}/EquPOS`;
      const isExist = await fs.exists(EquPOS_PATH);
      if (!isExist) {
        await fs.mkdir(EquPOS_PATH);
      }

      const filename = `product_${Date.now()}.csv`;
      const path = `${EquPOS_PATH}/${filename}`;

      setLoadingDownload(true);
      await config({
        fileCache: true,
        addAndroidDownloads: {
          path: path,
          notification: true,
          useDownloadManager: true,
          description: 'Downloading product data...',
        },
      }).fetch(
        'GET',
        'https://drive.google.com/uc?export=view&id=1dJ4dIN9AO6FNWXzBBV-Bvq7jhZbQMl88',
      );

      setLastDownloadedFile(path);
      ToastAndroid.show(`Success! ${filename}`, ToastAndroid.SHORT);
    } catch (err) {
      if (err instanceof Error) {
        ToastAndroid.show(`Failed! ${err.message}`, ToastAndroid.SHORT);
      }
    }
    setLoadingDownload(false);
  };

  const showData = async () => {
    if (lastDownloadedFile === '') return;

    setLoadingShow(true);
    try {
      const data = await readProductFromCsv(lastDownloadedFile, 1, 100);
      setProducts(data);
    } catch (error) {}
    setLoadingShow(false);
  };

  const logout = async () => {
    setLoading(true);
    await delay(1000);
    setLoading(false);

    navigation.replace('Login');
  };

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: 'black',
          }}>
          Hello, {username} 👋
        </Text>
        <LoadingButton
          style={{
            backgroundColor: '#ffaaaa',
            width: 100,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 10,
            minHeight: 40,
          }}
          isDisabled={loading}
          isLoading={loading}
          onPress={() => {
            logout();
          }}
          text="Logout"
        />
      </View>
      <View
        style={{
          height: '80%',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          marginTop: 15,
          gap: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
          }}>
          <LoadingButton
            style={{
              backgroundColor: '#aaaaff',
              width: 100,
              borderRadius: 10,
              minHeight: 40,
            }}
            onPress={download}
            isLoading={loadingDownload}
            isDisabled={loadingDownload}
            text="Download File"
          />
          <LoadingButton
            style={{
              backgroundColor: '#aaaaff',
              width: 100,
              paddingVertical: 8,
              borderRadius: 10,
              minHeight: 40,
            }}
            isLoading={loadingShow}
            isDisabled={loadingShow}
            onPress={() => {
              showData();
            }}
            text="Show Data"
          />
        </View>
        <ScrollView
          style={{
            width: '100%',
            height: '100%',
            padding: 0,
          }}>
          <ProductTable products={products} />
        </ScrollView>
      </View>
    </View>
  );
};
