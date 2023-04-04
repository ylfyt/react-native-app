import React from 'react';
import {Login} from './src/pages/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/pages/Home';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;
