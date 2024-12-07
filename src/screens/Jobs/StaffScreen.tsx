import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalColors, globalStyles } from '../../theme/GlobalStyles'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';
import { styles } from '../../theme/StaffTheme';


export const StaffScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    
    return (
    <View style={ globalStyles.container }>
        <View style={{flex: 1}}>

        </View>
        
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
