import React, { useEffect, useState } from 'react'
import { styles } from '../theme/SalariesTheme'
import { Text, TextInput, View } from 'react-native'
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';

interface InputSalariesProps {
    text: string;
    // task: string;
}



export const InputSalaries = ({text}: InputSalariesProps) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='0'
                    // value={initialPrice}
                    // onChangeText={(text) => setInitialPrice(text)} 
                    // onEndEditing={() => savePrice(initialPrice)}
                />
            </View>
            <HorizontalLine 
            width={270} 
            color={globalColors.secondary}
            />
        </>
    )
}
