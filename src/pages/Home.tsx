import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {delay} from '../utils/delay';
import LoadingButton from '../components/loading-button';

type Props = NativeStackScreenProps<ParamListBase, 'Home'>;

export const Home: FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    await delay(3000);
    setLoading(false);

    navigation.replace('Login');
  };

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello</Text>

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
