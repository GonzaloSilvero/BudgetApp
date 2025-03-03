import React from 'react'
import { ScrollView, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { JobsButton } from '../components/JobsButton'
import { styles } from '../theme/HomeTheme'

export const GenericsScreen = () => {
  return (
    <ScrollView style={{backgroundColor: globalColors.background,}}>
      <View style={{
        ...styles.container,
        ...globalStyles.container,
      }}>
        <JobsButton 
          text='GESTIONES PREVIAS A OBRA'
          onClick={() => console.log('en mantenimiento')}/>
      </View>
    </ScrollView>
  )
}
