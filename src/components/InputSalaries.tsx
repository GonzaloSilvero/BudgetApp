import React, { useEffect, useState } from 'react'
import { styles } from '../theme/SalariesTheme'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface InputSalariesProps {
    task: string;
    del: boolean;
    onTaskDeleted?: () => void;
}



export const InputSalaries = ({task, del, onTaskDeleted}: InputSalariesProps) => {

    const [salaries, setSalaries] = useState('')
    // const STORAGE_KEY = 'Salaries'; // Clave para AsyncStorage

    useEffect(() => {
        const loadPrice = async () => {
            try {
                const item = await AsyncStorage.getItem(`task-${task}`); // Busca por la clave del id
                if (item) {
                    const parsedItem = JSON.parse(item);
                    setSalaries(parsedItem.salary.toString()); // Establece el precio en el estado
                }
            }   catch (error) {
                console.error('Error al cargar el sueldo:', error);
            }
        };
    
        loadPrice(); // Llama a la función de carga
    }, []);

    const saveSalary  = async (salaryTxt: string) => {
        try {
            const salary = parseFloat(salaryTxt)
            const taskKey = `task-${task}`;
            if(!isNaN(salary)) {
                await AsyncStorage.setItem(taskKey, JSON.stringify({salary}))
                console.log(taskKey, salary,'sueldo guardado')
            }
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const deleteTask = async () => {
        try {
            const tasksString  = await AsyncStorage.getItem('dynamicItems')
            const taskSalaryStr = await AsyncStorage.getItem(`task-${task}`)
            console.log(taskSalaryStr)
            if (tasksString ){
                const tasks: { index: number; value: string }[] = JSON.parse(tasksString);
                const filteredTasks  = tasks
                .filter((item) => item.value !== task);

                await AsyncStorage.setItem('dynamicItems', JSON.stringify(filteredTasks))
            }
            if (taskSalaryStr){
                await AsyncStorage.removeItem(`task-${task}`)
            }
            if (onTaskDeleted){
                onTaskDeleted();
            }
        } catch (error) {
            console.log('error al borrar la task: ', error)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{task}</Text>
                <TextInput 
                    style={styles.inputDel}
                    keyboardType='numeric'
                    placeholder='0'
                    placeholderTextColor={globalColors.placeholder}
                    value={salaries}
                    onChangeText={(text) => setSalaries(text)}
                    onEndEditing={() => saveSalary(salaries)}
                />
                <View style={{justifyContent: 'center', }}>
                    <TouchableOpacity
                        onPress={deleteTask}
                    >
                        <FontAwesomeIcon icon={faTrash} color={globalColors.secondary} size={24} style={{marginHorizontal: 4}}/>
                    </TouchableOpacity>
                </View> 
            </View>
            
            <HorizontalLine 
            width={270} 
            color={globalColors.secondary}
            />
        </>
    )
}
