import React, { useEffect, useState } from 'react'
import { styles } from '../theme/PriceTheme'
import { Text, TextInput, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import { LoadData } from '../hooks/LoadData';
import AsyncStorage from '@react-native-async-storage/async-storage';1

interface PriceJobProps {
    text: string;
    id: string;
}



export const PriceJob = ({text, id}: PriceJobProps) => {
  const [initialPrice, setInitialPrice] = useState<string>(''); // Estado local para el precio

  useEffect(() => {
    const loadPrice = async () => {
      try {
        const item = await AsyncStorage.getItem(id); // Busca por la clave del id
        if (item) {
          const parsedItem = JSON.parse(item);
          setInitialPrice(parsedItem.price.toString()); // Establece el precio en el estado
        } 
        setInitialPrice('')
      } catch (error) {
        console.error('Error al cargar el precio:', error);
      }
    };

    loadPrice(); // Llama a la función de carga
  }, []);
  
  const savePrice = async (currentPrice: string ) => {
    try {
      const price = parseFloat(currentPrice)
      if (!isNaN(price)) {  // Asegura que el valor sea numérico
        await AsyncStorage.setItem(`${id}`, JSON.stringify({ id, price, state: false }));
        setInitialPrice(currentPrice); // Actualiza el estado local
        console.log('Precio guardado:', { id, price });
      }
    } catch (error) {
      console.error('Error al inicializar los elementos:', error);
    }
  };

  return (
    <>
      <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholder='0'
            placeholderTextColor={globalColors.placeholder}
            value={initialPrice}
            onChangeText={(text) => setInitialPrice(text)} 
            onEndEditing={() => savePrice(initialPrice)}
          />
      </View>
      <HorizontalLine 
        width={270} 
        color={globalColors.secondary}
      />
    </>
  )
}
