import React, {FC} from 'react';
import {
  Text,
  View,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';

interface ILoginProps {}

export const Login: FC<ILoginProps> = () => {
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
          }}>
          Login
        </Text>
        <TextInput
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 10,
            color: '#000',
            borderRadius: 10,
          }}
          placeholder="Username"
        />
        <TextInput
          style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: 10,
            color: '#000',
            borderRadius: 10,
          }}
          placeholder="Password"
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#aaaaff',
            width: 100,
            paddingHorizontal: 20,
            paddingVertical: 8,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 20,
            elevation: 2
          }}  
          onPress={() => {
            ToastAndroid.show('ok', ToastAndroid.SHORT);
          }}>
          <Text style={{
            fontWeight: '500'
          }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
