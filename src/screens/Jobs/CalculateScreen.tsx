import React, { useEffect, useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/GlobalStyles'
import { styles } from '../../theme/CalculateTheme'
import { LoadData } from '../../hooks/LoadData'
import { JobsMatrix } from '../../data/JobsMatrix'
import { CategoriesArray } from '../../data/CategoriesArray'
import { VerticalLine } from '../../components/VerticalLine'
import { HorizontalLine } from '../../components/HorizontalLine'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const CalculateScreen = () => {


  const categories: number [] = [];
  const [id, setId] = useState()
  const [qty, setQty] = useState('')
  const [days, setDays] = useState('')
  const [selectedJobs, setSelectedJobs] = useState<{ category: string; jobs: string[] }[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => { 
    // funcion aasincronica para cargar la info guardada en asyncStorage
    const fetchData = async () => {
      const filterData = await LoadData() // guardar en data el return de la info del asyncStorage
      const data = filterData.filter(item => item.state === true)
      // console.log(data)
      // el objeto se inicializa vacio pero va a tratar las claves como strings
      const jobsByCategory: { [key: string]: string[] } = {};
      
      // itera los items del array
      data.forEach(item => {
        const idStr = item.id.toString();
        const [arrayIndexStr, elementIndexStr] = idStr.split('.');
        const arrayIndex = parseInt(arrayIndexStr)
        const elementIndex = parseInt(elementIndexStr)
        
        if(!categories.includes(arrayIndex)){
          categories.push(arrayIndex)
        }

        const job = JobsMatrix[arrayIndex - 1][elementIndex - 1];
        const category = CategoriesArray[arrayIndex - 1];

        if (!jobsByCategory[category]) {
          jobsByCategory[category] = [];
        }
        jobsByCategory[category].push(job);
      });

      const formattedData = categories.map(index => ({
        category: CategoriesArray[index - 1],
        jobs: jobsByCategory[CategoriesArray[index - 1]] || [],
      }));

      setSelectedJobs(formattedData);
      
    } 
    fetchData()
  },[])
  
  // const saveQty = async ( ) => {
  //   try {

  //     await AsyncStorage.setItem(`increase`, JSON.stringify({ qty, days }));
  //     setIncrease(increase); // Actualiza el estado local
  //     console.log('Precio guardado:', { days, increase });

  //   } catch (error) {
  //     console.error('Error al inicializar los elementos:', error);
  //   }
  // };

  // const saveDays = async () => {
  //   try {

  //       await AsyncStorage.setItem(`increase`, JSON.stringify({ qty, days }));
  //       setDays(days); // Actualiza el estado local
  //       console.log('Precio guardado:', { qty, days });

  //   } catch (error) {
  //     console.error('Error al inicializar los elementos:', error);
  //   }
  // };
  
  const renderJobs = ({ item }: { item: string }) => (
    <>
    <Text style={ styles.jobs }>{item}</Text>
    <View style={ styles.containerInputs }>
      <TextInput 
        style={ styles.input }
        keyboardType='numeric'
        placeholder='0'
        placeholderTextColor={globalColors.placeholder}
        value={qty}
        onChangeText={(text) => setQty(text)}
        onEndEditing={() => console.log(selectedJobs)}
        />
        <VerticalLine height={20}/>
      <TextInput 
        style={ styles.input }
        keyboardType='numeric'
        placeholder='0'
        placeholderTextColor={globalColors.placeholder}
        value={days}
        onChangeText={(text) => setDays(text)}
        onEndEditing={() => console.log(selectedJobs)}
        />
    </View>
    <HorizontalLine height={1}/>
    </>
  );

  const renderCategory = ({ item }: { item: { category: string; jobs: string[] } }) => (
    <View style={{ marginTop: 8 }}>
        <Text style={ styles.categoria }>{item.category}</Text>
        <HorizontalLine color={globalColors.white} mb={8}/>
      <FlatList
        data={item.jobs}
        renderItem={renderJobs}
        keyExtractor={(job, index) => `job-${index}`}
      />
    </View>
  );


  return (
    // CONTAINER
    <View style={ globalStyles.container }>

      {/* SECCION DE REFERENCIA */}
      <View style={ styles.reference }>
        <Text style={{
          ...styles.textReference,
        }}>Cantidad</Text>
        <VerticalLine/>
        <Text style={{
          ...styles.textReference,
        }}>Cuantos Dias?</Text>
      </View>

      {/* TRABAJOS */}
      <FlatList
        data={selectedJobs}
        renderItem={renderCategory}
        keyExtractor={(item, index) => `category-${index}`}
        contentContainerStyle={{paddingBottom: 24}}
      />
      
      {/* BOTON PRESUPUESTAR */}
      <View style={{ 
        ...styles.containerButtons,
        backgroundColor: globalColors.secondary,
        padding: 12
      }}>
        <TouchableOpacity
          onPress={ () => navigation.navigate('Staff')}
          style={styles.buttonScreen}>
          <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>PERSONAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}