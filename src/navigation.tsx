import * as React from 'react';
import { View, Text, Appearance, useColorScheme } from 'react-native'; // Agrega Appearance aquí
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import Principal from './components/PaginaPrincipal';

const Stack = createNativeStackNavigator();

function Navigation() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Inicio" component={Principal} />
{/*         <Stack.Screen name="REBP-01" component={REBP01} />
        <Stack.Screen name="REBP-06" component={REBRP61COMP} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
