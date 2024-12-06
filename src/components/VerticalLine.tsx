import React from 'react'
import { View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'

interface VerticalLineProps {
    height?: number;
    width?: number;
    color?: string;
    mb?: number;
    mt?: number;
    m?: number;
}

export const VerticalLine = ({
    color= globalColors.primary, 
    height= 30, 
    width= 1,
    mb= 0,
    mt= 0,
    m= 0,
}: VerticalLineProps) => {
    return (
        <View style={{ 
            ...globalStyles.verticalLine,
            backgroundColor: `${color}`,
            height: height,
            width: width,
            marginBottom: mb,
            marginTop: mt,
            margin: m,
        }}/>
    )
}
