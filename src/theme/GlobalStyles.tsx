import { StyleSheet } from "react-native";

export const globalColors = {
    background: 'hsl(220,50%,35%)',
    secondary: 'hsl(220,50%,55%)',
    primary: 'hsl(220,50%,65%)',
    white: '#f0f0f0'
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