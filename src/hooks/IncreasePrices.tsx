import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadData } from './LoadData';

export const IncreasePrices = () => {

    const saveCurrentDate = async () => {
        const today = Date.now();
        await AsyncStorage.setItem('savedDate', JSON.stringify(today));
        console.log('Fecha guardada:', today);
    };

    const checkDateDifference = async () => {
        try {
            const savedTimestamp = await AsyncStorage.getItem("savedDate");

            if (!savedTimestamp) {
                console.log("No hay fecha guardada.");
                return false
            }
            
            const savedDate = new Date(JSON.parse(savedTimestamp))
            const today = new Date()

            savedDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            
            console.log("Fecha recuperada:", savedDate);

            const diffTime = today.getTime() - savedDate.getTime();
            const elapsedDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            
            console.log('Fecha recuperada:', savedDate.toISOString());
            console.log('Días transcurridos:', elapsedDays);

            return elapsedDays;
        } catch (error) {
            console.log("Error al recuperar la fecha:", error)
        }
    };

    const updateDataIfNeeded = async () => {
        const shouldUpdate = await checkDateDifference();

        if (shouldUpdate) {
            console.log('Han pasado los días necesarios. Actualizando datos...');

            // Aquí modificarías los precios o datos en AsyncStorage según sea necesario.

            // Guardar la nueva fecha después de la actualización
            await saveCurrentDate();
        } else {
            console.log('No han pasado los días necesarios.');
        }
    };

    return { updateDataIfNeeded, saveCurrentDate, checkDateDifference };
};