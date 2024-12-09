import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Modal,
    Keyboard,
} from 'react-native';
import { styles } from '../theme/SalariesTheme';
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

type DynamicRendererProps = {
  renderItem: (index: number, value: string) => JSX.Element; // Función para renderizar el componente dinámico
  buttonText?: string; // Texto del botón principal
  modalTitle?: string; // Título del modal
  inputPlaceholder?: string; // Placeholder del TextInput
};

const STORAGE_KEY = '@dynamic_items'; // Clave para AsyncStorage

export const DynamicRenderer = ({
    renderItem,
    buttonText = "Agregar",
    modalTitle = "Añadir elemento",
    inputPlaceholder = "Ingrese un valor",
}: DynamicRendererProps) => {
    const [items, setItems] = useState<{ index: number; value: string }[]>([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");

      // Cargar datos desde AsyncStorage
    useEffect(() => {
        const loadItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem(STORAGE_KEY);
            if (storedItems) {
            setItems(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error("Error loading items from storage:", error);
        }
        };
        loadItems();
    }, []);

    // Guardar datos en AsyncStorage
    const saveItems = async (newItems: { index: number; value: string }[]) => {
        try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
        } catch (error) {
        console.error("Error saving items to storage:", error);
        }
    };

    const addItem = () => {
        if (inputValue.trim()) {
            const newItems = [
                ...items,
                { index: items.length, value: inputValue.trim().toUpperCase() },
            ];
            setItems(newItems);
            saveItems(newItems); // Guardar la lista actualizada
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
                animationType="fade"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{ flex: 1, }}
                activeOpacity={0}
                >

                <View style={ styles.modalBackground } >
                    <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1} style={{backgroundColor: 'white', height: 10}}>
                        <View style={styles.centeredView}>
                            <View style={styles.closeModalView}>
                                <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>{modalTitle}</Text>
                                <TextInput 
                                    style={styles.inputModal}
                                    placeholder={inputPlaceholder}
                                    value={inputValue}
                                    onChangeText={setInputValue}
                                    />
                                <TouchableOpacity
                                    onPress={addItem}
                                    style={styles.buttonCloseModal}
                                    >
                                    <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>{buttonText}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
};