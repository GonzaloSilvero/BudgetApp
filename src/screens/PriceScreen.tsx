import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { styles } from '../theme/PriceTheme';
import { PriceJob } from '../components/PriceJob'
import { CategoriesArray } from '../data/CategoriesArray'
import { JobsMatrix } from '../data/JobsMatrix'
import { HorizontalLine } from '../components/HorizontalLine'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PriceScreen = () => {

  const [scroll, setScroll] = useState(0)
  const [days, setDays] = useState('')
  const [increase, setIncrease] = useState('')

  useEffect(() => {
    const loadPrice = async () => {
      try {
        const item = await AsyncStorage.getItem('increase'); 
        if (item) {
          const parsedItem = JSON.parse(item);
          setDays(parsedItem.days); // Establece los dias
          setIncrease(parsedItem.increase); // Establece el incremento
          console.log(parsedItem)
        }
      } catch (error) {
        console.error('Error al cargar el precio:', error);
      }
    };

    loadPrice(); // Llama a la función de carga
  }, []);

  const saveDays = async (days: string ) => {
    try {

        await AsyncStorage.setItem(`increase`, JSON.stringify({ days, increase }));
        setDays(days); // Actualiza el estado local
        console.log('Precio guardado:', { days, increase });

    } catch (error) {
      console.error('Error al inicializar los elementos:', error);
    }
  };

  const saveIncrease = async (increase: string ) => {
    try {

      await AsyncStorage.setItem(`increase`, JSON.stringify({ days, increase }));
      setIncrease(increase); // Actualiza el estado local
      console.log('Precio guardado:', { days, increase });

    } catch (error) {
      console.error('Error al inicializar los elementos:', error);
    }
  };

  return (
    <View style={ globalStyles.container }>

      <View style={{ 
        ...styles.increase,
        height: scroll !== 0 ? 50 : 100,
        flexDirection: scroll !== 0 ? 'row' : 'column',
      }}>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{
            color: globalColors.white, 
            fontSize: scroll !== 0 ? 15 : 30
          }}>cada cuantos días</Text>
          <TextInput 
          style={{ 
            ...styles.input, 
            width: scroll !== 0 ? 40 : 50,
            fontSize: scroll !== 0 ? 12 : 18,
            height: scroll !== 0 ? 22 : 26
          }}
          keyboardType='numeric'
          value={days}
          onChangeText={(text) => setDays(text)} 
          onEndEditing={() => saveDays(days)}
          />
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{
            color: globalColors.white, 
            fontSize: scroll !== 0 ? 15 : 30
          }}>aumento%</Text>
          <TextInput 
          style={{ 
            ...styles.input, 
            width: scroll !== 0 ? 40 : 50,
            fontSize: scroll !== 0 ? 12 : 18,
            height: scroll !== 0 ? 22 : 26
          }}
          keyboardType='numeric'
          value={increase}
          onChangeText={(text) => setIncrease(text)} 
          onEndEditing={() => saveIncrease(increase)}
          />
        </View>

      </View>


      <FlatList
        data={CategoriesArray}
        onScroll={(event) => {
          const position = event.nativeEvent.contentOffset.y;
          setScroll(position)
        }}
        renderItem={({ item: categoryItem, index: categoryIndex }) => (
          <View>
            <View style={{marginVertical: 24}}>
              <Text style={{color: globalColors.white, fontSize: 28, textAlign: 'center', marginBottom: 8}}>{categoryItem}</Text>
              <HorizontalLine color={globalColors.white} width={300}/>
            </View>
            <FlatList
              data={JobsMatrix[categoryIndex]}
              renderItem={({ item: jobItem, index: jobIndex }) => <PriceJob text={jobItem} id={`${categoryIndex + 1}.${jobIndex + 1}`}/>}
            />
          </View>
        )}
      />

      {/* <View style={{ 
        ...styles.containerButtons,
        backgroundColor: globalColors.secondary,
        padding: 12
      }}>

        <TouchableOpacity
          style={styles.buttonScreen}>
          <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>Guardar</Text>
        </TouchableOpacity>
      </View> */}
    </View> 
  )
}
