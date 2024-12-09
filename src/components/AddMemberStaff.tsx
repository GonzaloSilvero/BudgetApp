import React, { useEffect, useState } from 'react'
import { styles } from '../theme/SalariesTheme'
import { Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AddMemberStaffProps {
    task: string;
}



export const AddMemberStaff = ({task}: AddMemberStaffProps) => {

    const [salaries, setSalaries] = useState('')

    useEffect(() => {
        const loadPrice = async () => {
            try {
                const item = await AsyncStorage.getItem('increase'); // Busca por la clave del id
                if (item) {
                    const parsedItem = JSON.parse(item);
                    console.log(parsedItem)
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
                <TouchableOpacity>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text>{}</Text>
                <TouchableOpacity>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <HorizontalLine 
            width={270} 
            color={globalColors.secondary}
            />
        </>
    )
}
