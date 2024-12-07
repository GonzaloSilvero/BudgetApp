import { Dimensions, StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    reference: {
        height: 40,
        width: width * 0.85,
        marginBottom: 8,
        borderRadius: 20,
        paddingHorizontal: 12,
        backgroundColor: globalColors.secondary,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textReference: {
        color: globalColors.white, 
        fontSize: 20, 
        flex: 1, 
        textAlign: 'center', 
    },
    categoria: {
        fontSize: 28,
        marginTop: 16,
        color: globalColors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    jobs: {
        fontSize: 24, 
        paddingHorizontal: 20,
        marginTop: 4,
        color: globalColors.white, 
        textAlign: 'center',
    },
    containerInputs: {
        marginHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // backgroundColor: 'blue',
        // padding: 0
    },
    input: {
        height: 26,
        width: 125,
        marginBottom: 4,
        fontSize: 18,
        padding: 2,
        backgroundColor: globalColors.white, 
        alignSelf: 'center',
        color: 'black',
        textAlign: 'center',
    },
    
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // backgroundColor: globalColors.white,
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