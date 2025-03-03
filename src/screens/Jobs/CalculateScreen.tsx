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
import { JobItem } from '../../components/JobItem'

export const CalculateScreen = () => {


  const categories: number [] = [];
  const [selectedJobs, setSelectedJobs] = useState<{ category: string; jobs: { id: number; name: string; price: number }[] }[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // Generar clave única para cada presupuesto
  const generateBudgetKey = (id: number) => `${id}-budgeted`;

  useEffect(() => { 
    // funcion aasincronica para cargar la info guardada en asyncStorage
    const fetchData = async () => {
      const { originalItems } = await LoadData() // guardar en data el return de la info del asyncStorage
      const data = originalItems.filter(item => item.state === true)
      
      // el objeto se inicializa vacio 
      const jobsByCategory: { [key: string]: { id: number; name: string; price: number }[] } = {};
      
      // itera los items del array
      data.forEach(item => {
        const idStr = item.id.toString();
        const [arrayIndexStr, elementIndexStr] = idStr.split('.');
        const arrayIndex = parseInt(arrayIndexStr)
        const elementIndex = parseInt(elementIndexStr)
        
        const job = JobsMatrix[arrayIndex - 1][elementIndex - 1];
        const price = item.price; // Recuperar precio desde AsyncStorage
        const category = CategoriesArray[arrayIndex - 1];
        
        if (!jobsByCategory[category]) {
          jobsByCategory[category] = [];
        }
        
        jobsByCategory[category].push({ id: item.id, name: job, price });
      });
      
      const formattedData = Object.entries(jobsByCategory).map(([category, jobs]) => ({
        category,
        jobs,
      }));
      
      setSelectedJobs(formattedData);
      
    } 
    fetchData()
  },[])

  const calculateAndNavigate = async () => {
    try {
      const { budgetedItems } = await LoadData()
      console.log(budgetedItems)
      
      // Acumular los totales de los trabajos
      let totalPriceBudget = 0;
      budgetedItems.forEach(item => {
        totalPriceBudget += item.total;  // Sumar el total de cada trabajo
      });

       // Acumular los totales de los trabajos
      let totalDaysBudget = 0;
      budgetedItems.forEach(item => {
       totalDaysBudget += item.days;  // Sumar el total de los dias
      });
      
      // Guardar el total acumulado 
      await AsyncStorage.setItem('total-budget', JSON.stringify({ total: totalPriceBudget, days: totalDaysBudget }));
      
      navigation.navigate('Staff');
    } catch (error) {
      console.error('Error al calcular el total:', error)
    }
  }

  const renderJobs = ({ item }: { item: { id: number; name: string; price: number } }) => (
    <JobItem job={item} />
  );
  
  const renderCategory = ({ item }: { item: { category: string; jobs: { id: number; name: string; price: number }[] } }) => (
    <View style={{ marginTop: 8 }}>
      <Text style={styles.categoria}>{item.category}</Text>
      <HorizontalLine color={globalColors.white} mb={8} />
      <FlatList
        data={item.jobs}
        renderItem={renderJobs}
        keyExtractor={(job) => `job-${job.id}`}
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
          onPress={calculateAndNavigate}
          style={styles.buttonScreen}>
          <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>PERSONAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}