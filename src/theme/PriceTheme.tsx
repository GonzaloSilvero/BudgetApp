import { Dimensions, StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: 350,
        alignSelf: "center",
        marginVertical: 4,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
        marginTop: 24,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        width: 210,
    },
    input: {
        backgroundColor: "white", 
        height: 26,
        width: 100,
        margin: 8,
        alignSelf: 'center',
        fontSize: 18,
        color: 'black',
        padding: 2,
        textAlign: 'center',
        // justifyContent: 'center'
    },
    increase: {
        height: 40,
        width: width * 0.85,
        backgroundColor: globalColors.secondary,
        alignSelf: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8
    },
    containerButtons: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // backgroundColor: 'white',
    },
    buttonScreen: {
        borderRadius: 8,
        padding: 8,
        elevation: 4,
        backgroundColor: globalColors.primary,
        height: 50,
        width: width * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});