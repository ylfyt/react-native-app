import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {delay} from '../utils/delay';

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

      <TouchableOpacity
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#ffaaaa',
          borderRadius: 10,
          elevation: 2,
        }}
        onPress={() => {
          logout();
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
