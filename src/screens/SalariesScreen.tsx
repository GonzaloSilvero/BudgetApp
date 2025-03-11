import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { globalStyles } from '../theme/GlobalStyles'
import { InputSalaries } from '../components/InputSalaries'
import { DynamicRenderer } from '../components/DynamicRenderer'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const SalariesScreen = () => {

  const [refresh, setRefresh] = useState(false);
  const [renderTask, setRenderTask] = useState(false)

  useEffect(() => {
    const loadItems = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('dynamicItems');
      if (storedItems) {
        const parsedItems = JSON.parse(storedItems);
        if (parsedItems.length === 0) {
          console.log("storedItems está vacío");
          setRenderTask(true)
        } else {   
          console.log("storedItems tiene elementos", parsedItems);
          setRenderTask(false)
        }
      } else {
        setRenderTask(true)
        console.log("No se encontraron datos en AsyncStorage");
        console.log(storedItems)
      }
    } catch (error) {
      console.error("Error loading items from storage:", error);
    }
    };
    loadItems();
}, [refresh]);
  
  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Alterna entre true y false para forzar re-render
  };
  
  return (
    <>
      <ScrollView style={{ ...globalStyles.container, paddingTop: 50 }}>
        {renderTask 
        ?
        <View>
          <Text style={{color: 'white', fontSize: 32, alignSelf: 'center', textAlign: 'center'}}>Agregue puesto de trabajo y su sueldo por dia</Text>
          <Text style={{color: 'white', fontSize: 18, alignSelf: 'center', textAlign: 'center'}}>(No olvides agregate{"\n"} a vos mismo como minimo)</Text>
          <DynamicRenderer
            refresh={refresh}
            addTask={handleRefresh}
            renderItem={(index, value) => (
              <InputSalaries task={value} del={true} onTaskDeleted={handleRefresh} />
            )}
          />
        </View>
        :
        <DynamicRenderer
        refresh={refresh}
        addTask={handleRefresh}
        renderItem={(index, value) => (
          <InputSalaries task={value} del={true} onTaskDeleted={handleRefresh} />
        )}
        />
        }
      </ScrollView>
    </>
  )
}
