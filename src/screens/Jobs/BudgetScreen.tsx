import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native'
import { globalColors, globalStyles } from '../../theme/GlobalStyles'
import { VerticalLine } from '../../components/VerticalLine'
import { styles } from '../../theme/BudgetTheme'
import { HorizontalLine } from '../../components/HorizontalLine'
import { LoadData } from '../../hooks/LoadData'
import { JobsMatrix } from '../../data/JobsMatrix'
import { CategoriesArray } from '../../data/CategoriesArray'

export const BudgetScreen = () => {

  const [press, setPress] = useState(true)
  const [typeBudget, setTypeBudget] = useState(true)
  const categories: number [] = [];
  const [selectedJobs, setSelectedJobs] = useState<{ category: string; jobs: string[] }[]>([]);

  useEffect(() => { 
    // funcion aasincronica para cargar la info guardada en asyncStorage
    const fetchData = async () => {
      const data = await LoadData() // guardar en data el return de la info del asyncStorage
      
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

  const renderJobs = ({ item }: { item: string }) => (
    <>
      <Text style={{ color: globalColors.white, fontSize: 16, paddingHorizontal: 20, marginBottom: 8 }}>{'\u2022'} {item}</Text>
      <HorizontalLine />
    </>
  );

  const render = ({ item }: { item: { category: string; jobs: string[] } }) => (
    <View style={{ marginTop: 8 }}>
      <FlatList
        data={item.jobs}
        renderItem={renderJobs}
      />
      <HorizontalLine color={globalColors.white}/>
    </View>
  );

  return (
    <View style={ globalStyles.container }>
      
      {/* SECCION DE REFERENCIA */}
      <View style={ styles.selectBudget }>
        <Pressable 
          style={{
            ...styles.buttonBudget,
            backgroundColor: press ? globalColors.primary : globalColors.secondary
          }}
          onPress={() => {
            setPress(!press)
            console.log('sueldos')
            setTypeBudget(true)
          }}
        >
          <Text style={{...styles.textReference}}>Sueldos</Text>
        </Pressable>
        <VerticalLine/>
        <Pressable 
          style={{
            ...styles.buttonBudget,
            backgroundColor: press ? globalColors.secondary : globalColors.primary
          }}
          onPress={() => {
            setPress(!press)
            console.log('trabajos')
            setTypeBudget(false)
          }}
        >
          <Text style={{...styles.textReference}}>Trabajos</Text>
        </Pressable>
      </View>

      {/* CONTENIDO */}
      { typeBudget ?
          // SUELDOS
          <View>
            {/* <DonutChart
              radius={RADIUS}

            /> */}
          </View>
        :
          // TRABAJOS
          <View style={ styles.containerJobs }>
            {/* COLUMNA TRABAJO */}
            <View style={{ flex: 1}}>
              <Text style={ styles.textColumns }>TRABAJO</Text>
              <HorizontalLine width={100} color={globalColors.white} height={1} mb={16}/>
              <FlatList
              data={selectedJobs}
              renderItem={render}
              />
            </View>

            {/* SEPARADOR */}
            <VerticalLine color={globalColors.white} height={20}/>

            {/* COLUMNA CANTIDAD */}
            <View style={{ flex: 0.5}}>
              <Text style={ styles.textColumns }>CANT</Text>
              <HorizontalLine width={50} color={globalColors.white} height={1} mb={16}/>
              <FlatList
              data={selectedJobs}
              renderItem={render}
              />
            </View>

            {/* SEPARADOR */}
            <VerticalLine color={globalColors.white} height={20}/>
            
            {/* COLUMNA PRECIO */}
            <View style={{ flex: 0.8}}>
              <Text style={ styles.textColumns }>PRECIO</Text>
              <HorizontalLine width={70} color={globalColors.white} height={1} mb={16}/>
              <FlatList
              data={selectedJobs}
              renderItem={render}
              />
            </View>
          </View>
      }
    </View>
  )
}
