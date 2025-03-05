import React from 'react'
import { Button, ScrollView, View } from 'react-native'
import { globalStyles } from '../theme/GlobalStyles'
import { LoadData } from '../hooks/LoadData';
import { RemoveData } from '../hooks/RemoveData';

export const ThemeScreen = () => {

  const info = async () => {
    const data = await LoadData()
    console.log(data)
  }

  return (
    <ScrollView style={ globalStyles.container }>
        <View  style={{ padding: 10 }}>
          <Button title='hoola' onPress={info}/>
          <Button title='chau' onPress={RemoveData}/>
        </View>
    </ScrollView>
  )
}
