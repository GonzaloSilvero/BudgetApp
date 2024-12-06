import React from 'react'
import { FlatList, View } from 'react-native'
import { styles } from '../../theme/HomeTheme'
import { globalStyles } from '../../theme/GlobalStyles'
import { JobsButton } from '../../components/JobsButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'
import { CategoriesArray } from '../../data/CategoriesArray';

export const JobsScreen = () => {
  
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  return (
      <View>
        <FlatList // imprime todas las categorias en 2 columnas con un scrollview
          data={CategoriesArray} // array de categorias
          numColumns={2}
          columnWrapperStyle={{
            ...styles.container,
            ...globalStyles.container
          }}
          renderItem={( { item, index } ) => (
            <JobsButton //componente de boton grande
              text={item}
              onClick={ () => navigation.navigate('SelectJob', {id: index + 1, name: item})} // navega a la siguiente pantalla pasando como 'id' el indice del array mas 1 y como 'name' el contenido del indice
            />
          )}
        />
      </View>
  )
}
