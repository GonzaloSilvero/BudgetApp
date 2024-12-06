import { StyleSheet } from "react-native";

export const globalColors = {
    background: '#960404',
    primary: '#FF5757',
    secondary: '#BE3A3A',
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
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    verticalLine: {
        marginHorizontal: 12,
        width: 1,
    },
});