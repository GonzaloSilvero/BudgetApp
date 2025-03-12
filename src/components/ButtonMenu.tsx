import React from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { styles } from '../theme/MenuTheme';

interface buttonMenuProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    priority?: boolean;
}

const { width, height } = Dimensions.get('window');

export const ButtonMenu = ({
    text, 
    onClick,
    disabled,
    priority,
}: buttonMenuProps) => {
    return (
        <TouchableOpacity
            onPress={onClick}
            style={{ 
                ...styles.button,
                width: priority ? width * 0.79 : styles.container.width,
                height: priority ? 70 : styles.container.height,
            }}
        >
            <View style={{ 
                ...styles.container,
                width: priority ? width * 0.79 : styles.container.width,
                height: priority ? 70 : styles.container.height,
                backgroundColor: priority ? globalColors.priority : disabled ? globalColors.disabled : globalColors.background,
            }}>
                <Text style={ styles.textButton }>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}