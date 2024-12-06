import AsyncStorage from "@react-native-async-storage/async-storage";

export const RemoveData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys(); //se obtienen todas las claves 
      if (keys.length > 0) {
        await AsyncStorage.multiRemove(keys); //elimina todo lo guardado en Async
        console.log('se borró');
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Failed to load data', error);
    }
  };