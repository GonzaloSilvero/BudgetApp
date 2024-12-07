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
    text: {
        textAlign: 'center',
        color: globalColors.white,
        fontSize: 32,
        width: 210,
    },
    input: {
        backgroundColor: globalColors.white, 
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
        color: globalColors.white,
        fontSize: 32,
        marginTop: -6,
        marginLeft: -1
    },

    // MODAL 
    
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeModalView:{
        backgroundColor: globalColors.secondary,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
        height: height * 0.2,
        width: width * 0.7,
        top: -32,
        paddingTop: 12,
    },
    buttonCloseModal: {
        borderRadius: 8,
        padding: 8,
        elevation: 4,
        backgroundColor: globalColors.primary,
        width: 110,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8
    },
    inputModal: {
        backgroundColor: globalColors.white, 
        height: 36,
        width: 200,
        margin: 8,
        fontSize: 18,
        color: 'black',
        padding: 2,
        textAlign: 'center',
    }
});