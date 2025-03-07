import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native';
import { SideMenuNavigator } from './src/routes/SideMenuNavigator';
import { MenuScreen } from './src/screens/MenuScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  )
}


export default App;
