import React, { useEffect, useState } from 'react'
import { styles } from '../theme/SalariesTheme'
import { Text, TextInput, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface InputSalariesProps {
    task: string;
}



export const InputSalaries = ({task}: InputSalariesProps) => {

    const [salaries, setSalaries] = useState('')

    useEffect(() => {
        const loadPrice = async () => {
            try {
                const item = await AsyncStorage.getItem(task); // Busca por la clave del id
                if (item) {
                    const parsedItem = JSON.parse(item);
                    setSalaries(parsedItem.salary.toString()); // Establece el precio en el estado
                }
            }   catch (error) {
                console.error('Error al cargar el precio:', error);
            }
        };
    
        loadPrice(); // Llama a la función de carga
    }, [salaries]);

    const saveSalary  = async (salaryTxt: string) => {
        try {
            const salary = parseFloat(salaryTxt)
            if(!isNaN(salary)) {
                await AsyncStorage.setItem(`${task}`, JSON.stringify({ task, salary}))
                console.log('sueldo guardado: ', salary)
            }
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{task}</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='0'
                    value={salaries}
                    onChangeText={(text) => setSalaries(text)} 
                    onEndEditing={() => saveSalary(salaries)}
                />
            </View>
            <HorizontalLine 
            width={270} 
            color={globalColors.secondary}
            />
        </>
    )
}
