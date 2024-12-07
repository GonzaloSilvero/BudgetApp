import { Dimensions, StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // SELECCION DE PRESUPUESTO
    selectBudget: {
        height: 56,
        width: width * 0.85,
        marginBottom: 8,
        borderRadius: 20,
        paddingHorizontal: 12,
        backgroundColor: globalColors.secondary,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonBudget: {
        flex: 1,
        marginVertical: 8,
        borderRadius: 20,
        backgroundColor: globalColors.primary,
    },
    textReference: {
        color: globalColors.white, 
        fontSize: 20, 
        flex: 1, 
        textAlign: 'center', 
        textAlignVertical: 'center',
    },

    // PRESUPUESTO POR SUELDOS
    // GRAFICO TORTA


    // PRESUPUESTOS POR TRABAJO
    containerJobs: {
        width: width * 0.85,
        height: height * 0.70,
        borderRadius: 20,
        backgroundColor: globalColors.secondary,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    textColumns: {
        color: globalColors.white,
        textAlign: 'center',
        fontSize: 18
    },
    titleModal: {
        color: globalColors.white,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});