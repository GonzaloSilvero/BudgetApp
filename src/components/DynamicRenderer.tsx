import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
} from 'react-native';
import { styles } from '../theme/SalariesTheme';
import { globalColors } from '../theme/GlobalStyles';

type DynamicRendererProps = {
  renderItem: (index: number, value: string) => JSX.Element; // Función para renderizar el componente dinámico
  buttonText?: string; // Texto del botón principal
  modalTitle?: string; // Título del modal
  inputPlaceholder?: string; // Placeholder del TextInput
};

export const DynamicRenderer = ({
    renderItem,
    buttonText = "Agregar",
    modalTitle = "Añadir elemento",
    inputPlaceholder = "Ingrese un valor",
}: DynamicRendererProps) => {
    const [items, setItems] = useState<{ index: number; value: string }[]>([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");

    const addItem = () => {
        if (inputValue.trim()) {
            setItems((prevItems) => [
                ...prevItems,
                { index: prevItems.length, value: inputValue.trim().toUpperCase() },
            ]);
            setInputValue("");
            setModalVisible(false);
        }
    };

    return (
        <View>
            {/* Lista dinámica */}
            <ScrollView>
                {items.map(({ index, value }) => (
                    <View key={index}>{renderItem(index, value)}</View>
                ))}
            </ScrollView>


            {/* Botón para abrir el modal */}
            <TouchableOpacity
            style={ styles.buttonAdd }
            onPress={ () => setModalVisible(true)}
        >
            <Text style={ styles.plus }>+</Text>
        </TouchableOpacity>

            {/* Modal */}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={ styles.modalBackground }>
                    <View style={styles.centeredView}>
                        <View style={styles.closeModalView}>
                            <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>¿Qué puesto le gustaria añadir?</Text>
                            <TextInput 
                                style={styles.inputModal}
                                placeholder='Puesto'
                                value={inputValue}
                                onChangeText={setInputValue}
                            />
                            <TouchableOpacity
                                onPress={addItem}
                                style={styles.buttonCloseModal}
                            >
                                <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>Añadir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
};