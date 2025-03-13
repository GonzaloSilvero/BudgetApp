import { Dimensions, StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // generales para la screen\
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
        backgroundColor: globalColors.placeholder,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
        // height: height * 0.2,
        width: width * 0.7,
        top: -32,
        paddingTop: 12,
    },
    backgroundText: {
        // flex: 1,
        backgroundColor: globalColors.disabled,
        borderRadius: 8,
        marginBottom: 12,
        justifyContent: 'center',
        // marginHorizontal: ,
        // alignItems: 'center'
    },
    buttonCloseModal: {
        borderRadius: 8,
        padding: 8,
        elevation: 4,
        backgroundColor: globalColors.disabled,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginTop: 12
    },
    message: {
        color:  globalColors.text,
        fontSize: 18,
        textAlign: 'center',
        // fontWeight: 'bold',
        // marginBottom: 24,,
        padding: 8
    },
    buttonText: {
        color:  globalColors.text,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'semibold'
    }
});