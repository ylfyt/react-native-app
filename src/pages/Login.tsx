import React, {FC, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {delay} from '../utils/delay';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

type Props = NativeStackScreenProps<ParamListBase, 'Login'>;

export const Login: FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    await delay(3000);
    setLoading(false);

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
            borderRadius: 15,
            elevation: 2,
            minHeight: 40,
            justifyContent: 'center',
          }}
          onPress={() => {
            login();
          }}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                fontWeight: '500',
              }}>
              Submit
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
