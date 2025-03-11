import { Dimensions, StyleSheet, ViewStyle } from "react-native";
import { globalColors } from "./GlobalStyles";

const { width, height } = Dimensions.get('window');
const containerStyle: ViewStyle = {
    height: 60,
    width: width * 0.75,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    margin: 12,
};

export const styles = StyleSheet.create({
    container: containerStyle,
    button: {
        ...containerStyle,
        elevation: 5,
    },
    title: {
        color: globalColors.white,
        fontSize: 36,
        textAlign: 'center',
        marginVertical: 60,
        marginTop: 110,
    },
    textButton: {
        color: globalColors.white,
        fontSize: 20
    }
}); 