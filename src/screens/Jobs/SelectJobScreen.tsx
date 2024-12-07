import React, { useEffect, useState } from 'react'
import { FlatList, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { RouteProp, useNavigation, useRoute, NavigationProp } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'
import { JobsSwitch } from '../../components/JobsSwitch';
import { LoadData } from '../../hooks/LoadData';
import { styles } from '../../theme/SelectJobTheme';
import { JobsMatrix } from '../../data/JobsMatrix'
import { CategoriesArray } from '../../data/CategoriesArray'
import { HorizontalLine } from '../../components/HorizontalLine'
import { globalColors, globalStyles } from '../../theme/GlobalStyles';



export const SelectJobScreen = () => {
  // PARAMETROS Y NAVEGACIONES
  const params = useRoute<RouteProp<RootStackParams, 'SelectJob'>>().params;
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  // MODALES
  const [jobVisible, setJobVisible] = useState(false)
  const [closeVisible, setCloseVisible] = useState(false)
  // ARRAYS
  const [selectedJobs, setSelectedJobs] = useState<{ category: string; jobs: string[] }[]>([]);
  const categories: number [] = []; // array que guarda los indices de categorias


  useEffect(() => { 
    // pone como titulo el nombre de la categoria que viene por params
    navigation.setOptions({
      title: params.name
    })

    // funcion aasincronica para cargar la info guardada en asyncStorage
    const fetchData = async () => {
      const data = await LoadData() // guardar en data el return de la info del asyncStorage
      
      // el objeto se inicializa vacio pero va a tratar las claves como strings
      const jobsByCategory: { [key: string]: string[] } = {};
      
      // itera los items del array
      data.forEach(item => {
        // modifica el id guardado para poder usarlo como indice de los 2 arrays
        const idStr = item.id.toString(); 
        const [arrayIndexStr, elementIndexStr] = idStr.split('.');
        const arrayIndex = parseInt(arrayIndexStr)
        const elementIndex = parseInt(elementIndexStr)
        
        // si el indice de la categoria no esta incluido en el array, agregarlo
        if(!categories.includes(arrayIndex)){
          categories.push(arrayIndex)
        }

        // variables que guardan el dato encontrado en los arrays
        const job = JobsMatrix[arrayIndex - 1][elementIndex - 1];
        const category = CategoriesArray[arrayIndex - 1];

        // 
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
  },[jobVisible])

  const renderJobs = ({ item }: { item: string }) => (
    <Text style={{ color: globalColors.white, fontSize: 16, paddingHorizontal: 20 }}> {'\u2022'} {item}</Text>
  );

  const renderCategory = ({ item }: { item: { category: string; jobs: string[] } }) => (
    <View style={{ marginTop: 8 }}>
        <Text style={ styles.titleModal }>{item.category}</Text>
        <HorizontalLine color={globalColors.white}/>
      <FlatList
        data={item.jobs}
        renderItem={renderJobs}
        keyExtractor={(job, index) => `job-${index}`}
      />
    </View>
  );

  return (
    <>
      {/* MODAL DE CAMBIO DE PANTALLA */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={ closeVisible }
        onRequestClose={() => setCloseVisible(!closeVisible)}
        style={{padding: 0, margin: 0}}
      >
        <View style={ styles.modalBackground }>
          <View style={styles.centeredView}>
            <View style={styles.closeModalView}>
              <Text style={ styles.textClose }>¿Seguro que desea dejar de seleccionar y comenzar con el cálculo?</Text>
              <View style={ styles.containerButtons }>
                <View style={ styles.containerButtons }>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Calculate')}
                    style={styles.buttonCloseModal}
                    >
                    <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>aceptar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setCloseVisible(!closeVisible)}
                    style={styles.buttonCloseModal}
                    >
                    <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL DE TRABAJOS SELECCIONADOS */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={ jobVisible }
        onRequestClose={() => setJobVisible(!jobVisible)}
        style={{padding: 0, margin: 0}}
      >
        <View style={ styles.modalBackground }>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{color: globalColors.white, fontSize: 20, borderBottomWidth: 1, borderBottomColor: globalColors.white, marginBottom: 10, fontWeight: 'bold'}}>SELECCIONADOS</Text>
                    <FlatList
                      data={selectedJobs}
                      renderItem={renderCategory}
                      keyExtractor={(item, index) => `category-${index}`}
                    />
              <View style={ styles.containerButtons }>
                <TouchableOpacity
                  onPress={() => setJobVisible(!jobVisible)}
                  style={styles.buttonModal}
                  >
                  <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>Seguir Seleccionando</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setCloseVisible(!closeVisible)}
                  style={styles.buttonModal}
                  >
                  <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>Terminar y Calcular</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* TRABAJOS CON SU CHECKBOX */}
      <ScrollView style={ globalStyles.container }>
        <JobsSwitch job={params.id} />
      </ScrollView>

      {/* BOTONES DE DESPLEGAR MODAL */}
      <View style={{ 
        ...styles.containerButtons,
        backgroundColor: globalColors.secondary,
        padding: 12
      }}>
        <TouchableOpacity
          onPress={ () => setJobVisible(true)}
          style={styles.buttonScreen}
        >
          <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>Ver Seleccionados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCloseVisible(true)}
          style={styles.buttonScreen}
        >
          <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>Terminar y Calcular</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
