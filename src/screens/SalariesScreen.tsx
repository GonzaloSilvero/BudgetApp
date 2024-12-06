import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { PriceJob } from '../components/PriceJob'
import { styles } from '../theme/PriceTheme'

export const SalariesScreen = () => {
  return (
    <>
    <ScrollView style={ globalStyles.container }>
      <PriceJob text='ENCARGADO' />
      <PriceJob text='OFICIAL ESP' />
      <PriceJob text='OFICIAL' />
      <PriceJob text='AYUDANTE' />
    </ScrollView>
    <View style={{ 
        ...styles.containerButtons,
        backgroundColor: globalColors.secondary,
        padding: 12
      }}>
        <TouchableOpacity
          onPress={ () => console.log()}
          style={styles.buttonScreen}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 22}}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
