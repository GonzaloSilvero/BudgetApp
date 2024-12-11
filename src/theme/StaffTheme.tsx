import { Dimensions, StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // SELECCION DE PRESUPUESTO
    // selectBudget: {
    //     height: 56,
    //     width: width * 0.85,
    //     marginBottom: 8,
    //     borderRadius: 20,
    //     paddingHorizontal: 12,
    //     backgroundColor: globalColors.secondary,
    //     alignSelf: 'center',
    //     alignItems: 'center',
    //     flexDirection: 'row',
    // },
    // buttonBudget: {
    //     flex: 1,
    //     marginVertical: 8,
    //     borderRadius: 20,
    //     backgroundColor: globalColors.primary,
    // },
    // textReference: {
    //     color: globalColors.white, 
    //     fontSize: 20, 
    //     flex: 1, 
    //     textAlign: 'center', 
    //     textAlignVertical: 'center',
    // },

    // PRESUPUESTO POR SUELDOS
    // GRAFICO TORTA


    // PRESUPUESTOS POR TRABAJO
    // containerJobs: {
    //     width: width * 0.85,
    //     height: height * 0.70,
    //     borderRadius: 20,
    //     backgroundColor: globalColors.secondary,
    //     alignSelf: 'center',
    //     flexDirection: 'row'
    // // },
    // textColumns: {
    //     color: globalColors.white,
    //     textAlign: 'center',
    //     fontSize: 18
    // },
    // titleModal: {
    //     color: globalColors.white,
    //     fontSize: 20,
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    // },
    
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
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

    // copia de salaries
    container: {
        flex: 1,
        flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        height: 60,
        // alignSelf: "center",
        marginVertical: 4,
        // backgroundColor: 'red',
        // padding: 8,
        alignItems: 'center',
        // alignContent: 'center',
        
    },
    text: {
        color: globalColors.white,
        textAlign: 'center',
        // backgroundColor: 'green',
        fontSize: 32,
        width: 210,
        flex: 1.2,
        margin: 8
    },
    input: {
        backgroundColor: globalColors.white, 
        alignSelf: 'center',
        color: 'black',
        textAlign: 'center',
        height: 26,
        width: 100,
        margin: 8,
        fontSize: 18,
        padding: 2,
    },
    buttonAdd: {
        backgroundColor: globalColors.primary,
        alignItems: 'center',
        borderRadius: 100,
        padding: 8,
        elevation: 4,
        height: 50,
        width: 50,
        marginTop: 18,
    },
    plus: {
        color: globalColors.white,
        fontSize: 32,
        marginTop: -6,
        marginLeft: -1,
        alignSelf: 'center'
    },
    containerDays: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        height: '100%',
        padding: 8
    },
    modifierDays: {
        // backgroundColor: globalColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        height: 35,
        width: 35,
    },
    containerAdds: {
        flexDirection: 'row',
        flex: 0.8
    },
    plusAddDays: {
        color: globalColors.white,
        fontSize: 32,
        // backgroundColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
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
        alignContent: 'center',
        alignSelf: 'center'
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
    },


    // COPIA DE ESTILOS DE CHAT GPT
    
    dynamicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // openModalButton: {
    //     backgroundColor: '#007BFF',
    //     paddingVertical: 10,
    //     paddingHorizontal: 20,
    //     borderRadius: 8,
    // },
    // buttonText: {
    //     color: 'white',
    //     fontSize: 16,
    // },
    // modalBackground: {
    //     flex: 1,
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    modalContainer: {
        backgroundColor: globalColors.secondary,
        borderRadius: 10,
        padding: 20,
        width: '90%',
        maxHeight: height * 0.5, // Altura inicial del modal
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: globalColors.white
    },
    picker: {
        height: 50,
        marginBottom: 20,
        backgroundColor: globalColors.white
    },
    addButton: {
        backgroundColor: globalColors.primary,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 16,
    },
});