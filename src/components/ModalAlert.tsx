import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../theme/ModalTheme";
import { globalColors } from "../theme/GlobalStyles";

interface ModalAlertProps {
  buttonText: string;
  onClick: () => void;
  message: string;
  isVisible: boolean;
}

export const ModalAlert = ({
  buttonText,
  onClick,
  message,
  isVisible,
}: ModalAlertProps) => {
  // const [closeVisible, setCloseVisible] = useState(false);

  return (
    <Modal transparent visible={isVisible} animationType="fade">
    <View style={styles.modalBackground}>
      <View style={styles.centeredView}>
        <View style={styles.closeModalView}>
          {/* <View style={styles.backgroundText}> */}
            <Text style={styles.message}>{message}</Text>
          {/* </View> */}

            <TouchableOpacity 
              style={styles.buttonCloseModal}
              onPress={onClick} 
            >
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
  );
};
