import React, {FC, useState} from 'react';
import {Text, View, TextInput, ToastAndroid} from 'react-native';
import {delay} from '../utils/delay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import LoadingButton from '../components/loading-button';
import {useAuthContext} from '../contexts/auth';

type Props = NativeStackScreenProps<ParamListBase, 'Login'>;

export const Login: FC<Props> = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const {setUsername: setUsernameCtx} = useAuthContext();

  const login = async () => {
    setLoading(true);
    await delay(500);
    setLoading(false);

    if (password !== '1234') {
      ToastAndroid.show('Password incorrect (1234)...', ToastAndroid.SHORT);
      return;
    }

    setUsernameCtx(username);
    navigation.replace('Home');
  };

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        height: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          marginBottom: 'auto',
          marginTop: '40%',
          width: '100%',
          padding: 20,
          gap: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
            width: '100%',
            color: 'black'
          }}>
          Login
        </Text>
        <TextInput
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 10,
            color: 'black',
            borderRadius: 10,
          }}
          placeholder="Username"
          placeholderTextColor="#aaa"
          onChange={e => {
            setUsername(e.nativeEvent.text);
          }}
          />
        <TextInput
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 10,
            color: 'black',
            borderRadius: 10,
          }}
          placeholderTextColor="#aaa"
          placeholder="Password"
          onChange={e => {
            setPassword(e.nativeEvent.text);
          }}
          secureTextEntry={true}
        />
        <LoadingButton
          style={{
            backgroundColor: '#aaaaff',
            width: 100,
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 10,
            minHeight: 40,
          }}
          isDisabled={loading || username === '' || password === ''}
          isLoading={loading}
          onPress={() => {
            login();
          }}
          text="Submit"
        />
      </View>
    </View>
  );
};
