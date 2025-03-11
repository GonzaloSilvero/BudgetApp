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
            
            const savedTime = JSON.parse(savedTimestamp);
            if (isNaN(savedTime)) {
                console.error("Error: La fecha guardada no es válida:", savedTimestamp);
                return false;
            }
            
            console.log("Fecha recuperada:", new Date(savedTime));
            
            const currentTime = Date.now(); // Timestamp actual
            const daysPassed = (currentTime - savedTime) / (1000 * 60 * 60 * 24); // Convertir ms a días
            
            const increaseData = await AsyncStorage.getItem('increase');
            if (!increaseData) return false; // Si no hay datos de aumento, no actualizar
            
            const { days } = JSON.parse(increaseData);
            const daysToIncrease = parseInt(days, 10); // Convertimos `days` a número
            
            console.log('Días transcurridos:', daysPassed);
            console.log('Días necesarios para actualizar:', daysToIncrease);
            
            return daysPassed >= daysToIncrease;
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