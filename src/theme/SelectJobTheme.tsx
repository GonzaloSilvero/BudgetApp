import { Dimensions, StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // generales para la screen
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        alignSelf: "center",
        marginBottom: 8
    },
    title: {
        textAlign: 'center',
        color: globalColors.white,
        fontSize: 32,
        marginTop: 24
    },
    text: {
        textAlign: 'left',
        color: globalColors.white,
        fontSize: 24,
        width: 300,
    },
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
    modalView: {
        backgroundColor: globalColors.secondary,
        borderRadius: 8,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 4,
        height: height * 0.7,
        width: width * 0.8,
        top: -32,
        paddingTop: 12,
    },
    containerButtons: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        // backgroundColor: globalColors.white,
    },
    buttonModal: {
        borderRadius: 8,
        padding: 8,
        elevation: 4,
        backgroundColor: globalColors.primary,
        width: 140,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8
    },
    buttonScreen: {
        borderRadius: 8,
        padding: 8,
        elevation: 4,
        backgroundColor: globalColors.primary,
        height: 70,
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleModal: {
        color: globalColors.white,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    separator: {
        // backgroundColor: globalColors.background,
        height:1,
        width: 200,
        // elevation: 100
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
    textClose: {
        color:  globalColors.white,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'semibold'
    },
});