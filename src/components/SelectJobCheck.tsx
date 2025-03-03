import React, { useEffect, useState } from 'react'
import { styles } from '../theme/SelectJobTheme'
import { Text, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadData } from '../hooks/LoadData';
import { HorizontalLine } from './HorizontalLine';

// se requiere traer desde la screen anterior el texto y el id (el nombre de la categoria y el id)
interface SelectJobCheckProps {
    text: string;
    id: number;
}

export const SelectJobCheck = ({text, id}: SelectJobCheckProps) => {

  //por defecto los checkbox van a estar en false
  const [check, setCheck] = useState(false)
  
  useEffect(() => {
    
    const fetchData = async () => {
      const { originalItems } = await LoadData() //carga los datos del Async
      console.log('Datos cargados: ', originalItems) 

      const savedCheckBox = originalItems.find( item => item.id === `${id}`) //busca los id de los items guardados en el Async
      console.log(savedCheckBox)
      if (savedCheckBox) { //si existe el item
        setCheck(savedCheckBox.state) //determinar el estado del checkbox en base al state guardado en el Async
      }
    } 

    fetchData()
  }, [id])
  
  const saveCheckboxState = async (newState: boolean) => {
    try {
      // setCheck(newState);
      const item = await AsyncStorage.getItem(`${id}`);
      if (item) {
        const parsedItem = JSON.parse(item);
        parsedItem.state = newState;  // Actualiza solo el estado
        await AsyncStorage.setItem(`${id}`, JSON.stringify(parsedItem));
        console.log('Estado actualizado:', parsedItem);
      } else {
        console.warn('Elemento no encontrado:', `${id}`);
      }
    } catch (error) {
      console.error('Error al actualizar el estado:', error);
    }
  };

  // const saveCheckboxState = async (newState: boolean) => {
  //   setCheck(newState);
  //   const data = {id, newState}
  //   try {
  //     await AsyncStorage.setItem(`${id}`, JSON.stringify(data));
  //   } catch (error) {
  //     console.error('Failed to save checkbox state', error);
  //   }
  // };

  return (
    <>
      <View style={ styles.container }>
        <Text style={ styles.text }>{'\u2022'} { text }</Text>
        <BouncyCheckbox 
          fillColor={ globalColors.primary }
          onPress={ saveCheckboxState }
          isChecked={ check }
        />
      </View>
      <HorizontalLine 
        height={2} 
        width={300} 
        mb={8}
      />
    </>
  )
}
