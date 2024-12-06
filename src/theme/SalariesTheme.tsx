import { StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: 350,
        alignSelf: "center",
        marginVertical: 4,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 32,
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
    },
    buttonAdd: {
        borderRadius: 100,
        padding: 8,
        elevation: 4,
        backgroundColor: globalColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginTop: 18
    },
    plus: {
        color: 'white',
        fontSize: 32,
        marginTop: -6,
        marginLeft: -1
    }
});