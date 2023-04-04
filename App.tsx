import React from 'react';
import {Login} from './src/pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/pages/Home';
import AuthProvider from './src/contexts/auth';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'EquPOS',
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
