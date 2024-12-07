import React, { useState } from 'react'
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { PriceJob } from '../components/PriceJob'
import { styles } from '../theme/SalariesTheme'
import { InputSalaries } from '../components/InputSalaries'
import { TextInput } from 'react-native-gesture-handler'

export const SalariesScreen = () => {

  const [visible, setVisible] = useState(false)
  const [textValue, setTextValue] = useState('')

  const addTask = () => {
    setVisible(!visible)
    console.log(textValue)
    // return (

    // )
  }

  return (
    <>
    <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}
        style={{padding: 0, margin: 0}}
    >
      <View style={ styles.modalBackground }>
        <View style={styles.centeredView}>
          <View style={styles.closeModalView}>
            <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>¿Qué puesto le gustaria añadir?</Text>
            <TextInput 
              style={styles.inputModal}
              placeholder='Puesto'
              value={textValue}
              onChangeText={setTextValue}
            />
            <TouchableOpacity
              onPress={() => addTask()}
              style={styles.buttonCloseModal}
              >
              <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>Añadir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
    <ScrollView style={{ ...globalStyles.container, paddingTop: 50 }}>
      <InputSalaries text='ENCARGADO' />
      <InputSalaries text='OFICIAL ESP' />
      <InputSalaries text='OFICIAL' />
      <InputSalaries text='AYUDANTE' />
      <TouchableOpacity
        style={ styles.buttonAdd }
        onPress={ () => setVisible(true)}
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
          <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>Guardar</Text>
        </TouchableOpacity>
      </View> */}
    </>
  )
}
