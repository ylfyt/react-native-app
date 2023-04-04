import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {View, Text} from 'react-native';
import {delay} from '../utils/delay';
import LoadingButton from '../components/loading-button';
import {useAuthContext} from '../contexts/auth';

type Props = NativeStackScreenProps<ParamListBase, 'Home'>;

export const Home: FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const {username} = useAuthContext();

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
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
          }}>
          Hello, {username} 👋
        </Text>
      </View>

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
  );
};
