import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StackNavigatorMenu } from './src/routes/StackNavigatorMenu';
import { IncreasePrices } from './src/hooks/IncreasePrices';

const App = () => {

  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setRefresh(!refresh)
    }, 1000)
  }, [refresh]);
  
  return (
    <NavigationContainer>
      <StackNavigatorMenu />
    </NavigationContainer>
  )
}


export default App;
