import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalColors, globalStyles } from '../../theme/GlobalStyles'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { styles } from '../../theme/StaffTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { AddMemberStaff } from '../../components/AddMemberStaff';
import { DynamicSelectItem } from '../../components/DynamicSelectItem';


export const StaffScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    
    return (
    <View style={ globalStyles.container }>
        <ScrollView>
        <AddMemberStaff task='ENCARGADO' />
        <DynamicSelectItem
            buttonText=''
            modalTitle=''
            renderItem={(index, value) => (
                <AddMemberStaff task={value}/>
            )}
        ></DynamicSelectItem>
        </ScrollView>
        

        {/* BOTON PRESUPUESTAR */}
        <View style={{ 
        ...styles.containerButtons,
        backgroundColor: globalColors.secondary,
        padding: 12,
        
        }}>
            <TouchableOpacity
                onPress={ () => navigation.navigate('Budget')}
                style={styles.buttonScreen}
            >
                <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 22}}>PRESUPUESTAR</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
