import { StyleSheet } from "react-native";

export const globalColors = {
    background: 'hsl(0,50%,35%)',
    secondary: 'hsl(0,50%,55%)',
    primary: 'hsl(0,50%,65%)',
    white: '#f0f0f0',
    placeholder: '#B9B9B9FF'
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