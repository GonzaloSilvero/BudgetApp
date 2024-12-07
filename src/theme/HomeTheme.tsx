import { StyleSheet } from "react-native";
import { globalColors } from "./GlobalStyles";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    box: {
        backgroundColor: globalColors.secondary,
        width: 160,
        height: 200,
        marginTop: 16,
        borderRadius: 16,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        // textAlignVertical: 'center',
        // margin: 5,
        color: globalColors.white,
        fontSize: 20,
    }
});