import React, { useEffect, useState } from 'react'
import { styles } from '../theme/StaffTheme'
import { Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AddMemberStaffProps {
    task: string;
}



export const AddMemberStaff = ({task}: AddMemberStaffProps) => {

    const [days, setDays] = useState(0)


    // useEffect(() => {
    //     const loadPrice = async () => {
    //         try {
    //             const item = await AsyncStorage.getItem(''); // Busca por la clave del id
    //             if (item) {
    //                 const parsedItem = JSON.parse(item);
    //                 console.log(parsedItem)
    //             }
    //         }   catch (error) {
    //             console.error('Error al cargar el precio:', error);
    //         }
    //     };
    
    //     loadPrice(); // Llama a la función de carga
    // }, [salaries]);

    // const saveSalary  = async (salaryTxt: string) => {
    //     try {
    //         const salary = parseFloat(salaryTxt)
    //         if(!isNaN(salary)) {
    //             await AsyncStorage.setItem(`${task}`, JSON.stringify({ task, salary}))
    //             console.log('sueldo guardado: ', salary)
    //         }
    //     } catch (error) {
    //         console.log('error: ', error)
    //     }
    // }

    const incrementDays = () => {
        setDays((prevDays) => prevDays + 1);
    };

    const decrementDays = () => {
        setDays((prevDays) => Math.max(0, prevDays - 1)); // Evita que los días sean negativos.
    };

    return (
        <>
            <View style={styles.container}>


                <Text style={styles.text}>{task}</Text>

                <View style={ styles.containerDays}>
                    <TouchableOpacity
                    style={ styles.modifierDays }
                    onPress={decrementDays}
                    >
                        <Text style={ styles.plusAddDays }>-</Text>
                    </TouchableOpacity>

                    <Text style={{
                        ...styles.plusAddDays,
                        // backgroundColor: 'black',
                        alignSelf: 'center'
                    }}>{days}</Text>

                    <View style={styles.containerAdds}>
                        <TouchableOpacity
                        style={ styles.modifierDays }
                        onPress={incrementDays}
                        >
                            <Text style={ styles.plusAddDays }>+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={{ 
                            ...styles.modifierDays,
                            marginLeft: 5
                        }}
                        onPress={incrementDays}
                        >
                            <Text style={{ ...styles.plusAddDays, fontSize: 12, marginTop: 12}}>total</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
            <HorizontalLine 
            width={270} 
            color={globalColors.secondary}
            />
        </>
    )
}
