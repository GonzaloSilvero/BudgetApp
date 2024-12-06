import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { PriceJob } from '../components/PriceJob'
import { styles } from '../theme/SalariesTheme'
import { InputSalaries } from '../components/InputSalaries'

export const SalariesScreen = () => {
  return (
    <>
    <ScrollView style={{ ...globalStyles.container, paddingTop: 50 }}>
      <InputSalaries text='ENCARGADO' />
      <InputSalaries text='OFICIAL ESP' />
      <InputSalaries text='OFICIAL' />
      <InputSalaries text='AYUDANTE' />
      <TouchableOpacity
        style={ styles.buttonAdd }
      >
        <Text style={ styles.plus }>+</Text>
      </TouchableOpacity>
    </ScrollView>
    {/* <View style={{ 
        ...styles.containerButtons,
        backgroundColor: globalColors.secondary,
        padding: 12
      }}>
        <TouchableOpacity
          onPress={ () => console.log()}
          style={styles.buttonScreen}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 22}}>Guardar</Text>
        </TouchableOpacity>
      </View> */}
    </>
  )
}
