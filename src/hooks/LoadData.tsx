import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoadData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys(); //guarda en la variable Keys todas las claves de acceso del Async
      // console.log(keys)
      if (keys.length > 0) {
        // console.log('entro')
        const loadedData = await AsyncStorage.multiGet(keys); //guarda en LoatedData un array de contenido que accede por medio de keys
        const  parsedData = loadedData //guarda en parsedData
          .filter(([key, value]) => value !== null) //filtra que no haya valores null
          .map(([key, value]) => { //itera el array con map usando de indice value (valor indivudal del array)
            try {
              const parsedValue = JSON.parse(value!) //guarda en parsedValue el valor individual del array en formato JSON
              return {
                id: parsedValue.id, 
                price: parsedValue.price, 
                state: parsedValue.state
              } //retorna el id y el state del valor
            } catch (error) {
              console.error(`Error parseando clave ${key}:`, error);
              return null;
            }
          }).filter(item => item !== null) //ahora que en parsedData esta guardado el id y el state se puede filtrar por los que tengan su state en "true"
          // console.log(parsedData)
          return parsedData
        } else {
        console.log('No data found');
        return []
      }
    } catch (error) {
      console.error('Failed to load data', error)
      return []
    }
  };