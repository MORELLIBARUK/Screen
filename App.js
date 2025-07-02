import React from 'react';

import {NavigationContainer}
from '@React-navigation/native';

import{ createStackNavigator}
from'@react-navigation/stack';

import HomeScreen from './screens/homeScreen';
import SecondaryScreen from './screens/SecondaryScreen';
import CafeScreen from './screens/CafeScreen';
import BoloScreen from './screens/BoloScreen';
import PaoScreen from './screens/PaoScreen';

const Stack = createStackNavigation();

export default function App () {
  return (
    <NavigationContainer>
  <Stack.Navigation InitialRouteName="Home" Component=
  {HomeScreen} Options={{ title:'Bem-vindo'}}/>
  <Stack.Screen Name="Secondary" Component={Secondary} Options= {{title:'Opcões Deliciosas'}}/>
  <Stack.Screen Name="Cafe" Component={CafeScreen} Options={{title: "Nosso Cafe"}}/>
  <Stack.Screen Name="Bolo" Component={BoloScreen} Options={{title: 'Bolo de Chocolate'}}/>
  <Stack.Screen Name="Pao"  Component={PaoScreen}  Options={{title: 'Pão Caseiro'}}/>
  </Stack.Navigator>
  </Navigatorcontainer>
  );
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screen/HomeScreen';
import SecondaryScreen from './Screen/SecondaryScreen';
import CafeScreen from './Screen/CafeScreen';
import BoloScreen from './Screen/BoloScreen';
import PaoScreen from './Screen/PaoScreen';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-Vindo!' }}/>
        <Stack.Screen name='Secondary' component={Secondary} options={{ title: 'Opções Deliciosas' }}/>
        <Stack.Screen name='Cafe' component={CafeScreen} options={{ title: 'Nosso Café' }}/>
        <Stack.Screen name='Bolo' component={Bolo} options={{ title: 'Bolo de Chocolate' }}/>
        <Stack.Screen name='Pao' component={'PaoScreen'} options={{ title: 'Pão Caseiro' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


