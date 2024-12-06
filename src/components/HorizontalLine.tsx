import React from 'react'
import { View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'

interface HorizontalLineProps {
    height?: number;
    width?: number;
    color?: string;
    mb?: number;
    mt?: number;
    m?: number;
}

export const HorizontalLine = ({
    color= globalColors.primary, 
    width= 200, 
    height= 2,
    mb= 0,
    mt= 0,
    m= 0,
}: HorizontalLineProps) => {
    return (
        <View style={{ 
            ...globalStyles.horizontalLine,
            backgroundColor: `${color}`,
            width: width,
            height: height,
            marginBottom: mb,
            marginTop: mt,
            margin: m,
        }}/>
    )
}
