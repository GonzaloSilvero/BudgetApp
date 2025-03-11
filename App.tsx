import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StackNavigatorMenu } from './src/routes/StackNavigatorMenu';
import { IncreasePrices } from './src/hooks/IncreasePrices';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigatorMenu />
    </NavigationContainer>
  )
}


export default App;
