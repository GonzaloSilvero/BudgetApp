import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoadData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys(); // Traemos todas las claves del AsyncStorage

    if (keys.length > 0) {
      // Filtramos y separamos las claves de los datos originales y presupuestados
      const originalKeys = keys.filter(key => !key.startsWith('budgeted-'));
      const budgetedKeys = keys.filter(key => key.startsWith('budgeted-'));
      const taskKeys = keys.filter(key => key.startsWith('task-'));

      // Obtenemos los datos correspondientes a cada tipo
      const [originalData, budgetedData, taskData] = await Promise.all([
        AsyncStorage.multiGet(originalKeys),  // Cargamos los datos originales
        AsyncStorage.multiGet(budgetedKeys),  // Cargamos los datos presupuestados
        AsyncStorage.multiGet(taskKeys),  // Cargamos los datos presupuestados
      ]);

      // Parseamos los datos obtenidos para los trabajos originales
      const originalItems = originalData
        .filter(([key, value]) => value !== null)
        .map(([key, value]) => {
          try {
            const parsedValue = JSON.parse(value!);
            return {
              id: parsedValue.id,
              price: parsedValue.price,
              state: parsedValue.state,
            };
          } catch (error) {
            console.error(`Error parseando clave ${key}:`, error);
            return null;
          }
        })
        .filter(item => item !== null);

      // Parseamos los datos obtenidos para los trabajos presupuestados
      const budgetedItems = budgetedData
        .filter(([key, value]) => value !== null)
        .map(([key, value]) => {
          try {
            const parsedValue = JSON.parse(value!);
            return {
              id: key.replace('budgeted-', ''), // Quitamos el prefijo 'budgeted-'
              ...parsedValue,
            };
          } catch (error) {
            console.error(`Error parseando clave ${key}:`, error);
            return null;
          }
        })
        .filter(item => item !== null);
      
        // Parseamos los datos obtenidos para los trabajos presupuestados
      const taskItems = taskData
        .filter(([key, value]) => value !== null)
        .map(([key, value]) => {
          try {
            const parsedValue = JSON.parse(value!);
            return {
              id: key.replace('task-', ''), // Quitamos el prefijo 'budgeted-'
              ...parsedValue,
            };
          } catch (error) {
            console.error(`Error parseando clave ${key}:`, error);
            return null;
          }
        })
        .filter(item => item !== null);

      // Obtener el total acumulado desde AsyncStorage (si existe)
      const totalBudgetData = await AsyncStorage.getItem('total-budget');
      const totalBudget = totalBudgetData ? JSON.parse(totalBudgetData) : '';

      // Obtener el total acumulado desde AsyncStorage (si existe)
      const increaseData = await AsyncStorage.getItem('increase');
      const increase = increaseData ? JSON.parse(increaseData) : '';

      // Obtener el total acumulado desde AsyncStorage (si existe)
      const saveDate = await AsyncStorage.getItem('savedDate');
      // const date = saveDate ? JSON.parse(saveDate) : '';

      // Retornamos los datos de trabajos originales y presupuestados
      return { originalItems, budgetedItems, totalBudget, increase, taskItems, saveDate };
    } else {
      console.log('No data found');
      return { originalItems: [], budgetedItems: [],  totalBudget: '', increase: '', taskItems: [], date: ''};
    }
  } catch (error) {
    console.error('Failed to load data', error);
    return { originalItems: [], budgetedItems: [],  totalBudget: '', increase: '', taskItems: [], date: ''};
  }
};