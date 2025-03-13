import { StyleSheet } from "react-native";

export const globalColors = {
    background: 'hsl(0,50%,35%)',
    backgroundText: 'hsl(0,50%,40%)',
    secondary: 'hsl(0,50%,55%)',
    primary: 'hsl(0,50%,65%)',
    priority: 'hsl(0,85%,60%)',
    white: '#f0f0f0',
    placeholder: '#B9B9B9FF',
    disabled: '#9B9B9BFF',
    text: '#2D2D2DFF',
};

export const globalStyles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: globalColors.background,
        flex: 1,
    },
    // spaces 
    horizontalLine: {
        width: 200,
        height: 2,
        backgroundColor: globalColors.white,
        alignSelf: 'center'
    },
    verticalLine: {
        marginHorizontal: 12,
        width: 1,
    },
});