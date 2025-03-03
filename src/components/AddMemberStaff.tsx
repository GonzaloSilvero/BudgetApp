import React, { useEffect, useState } from 'react'
import { styles } from '../theme/StaffTheme'
import { Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import { LoadData } from '../hooks/LoadData';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
// import { styles } from '../theme/HomeTheme';

interface AddMemberStaffProps {
    task: string;
}



export const AddMemberStaff = ({task}: AddMemberStaffProps) => {

    const [days, setdays] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const { totalBudget } = await LoadData()
            const allDays = totalBudget.days;
            console.log(days)
        } 

        fetchData()
    }, []);

    const allDays = () => {
        console.log('todos los dias')
    }

    return (
    <>
        <View style={styles.container}>

            <Text style={styles.text}>{task}</Text>
            <TextInput 
                style={styles.input}
                keyboardType='numeric'
                placeholder='0'
                placeholderTextColor={globalColors.placeholder}
                value={days}
                // onChangeText={(text) => setInitialPrice(text)} 
                // onEndEditing={() => savePrice(initialPrice)}
            />
            <TouchableOpacity
                onPress={allDays}
                // style={styles.containerAllDays}
            >
                {/* <View style={styles.allDays}>
                    <Text style={{ color: globalColors.white, fontSize: 24, top:-2, fontFamily: 'monospace'}}>{">>"}</Text>
                </View> */}
                <FontAwesomeIcon icon={faCirclePlus} size={32} color={globalColors.primary}/>
            </TouchableOpacity>

        </View>
        <HorizontalLine 
            width={270} 
            color={globalColors.secondary}
        />
    </>
    )
}
