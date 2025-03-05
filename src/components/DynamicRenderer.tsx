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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type DynamicRendererProps = {
    renderItem: (index: number, value: string) => JSX.Element; // Función para renderizar el componente dinámico
    refresh: boolean;
};

const itemsKey = 'dynamicItems'; // Clave para AsyncStorage

export const DynamicRenderer = ({
    renderItem,
    refresh 
}: DynamicRendererProps) => {
    const [items, setItems] = useState<{ index: number; value: string }[]>([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState<string>("");

      // Cargar datos desde AsyncStorage
    useEffect(() => {
        const loadItems = async () => {
        try {
            const storedItems = await AsyncStorage.getItem(itemsKey);
            if (storedItems) {
            setItems(JSON.parse(storedItems));
            }
        } catch (error) {
            console.error("Error loading items from storage:", error);
        }
        };
        loadItems();
    }, [refresh]);

    // Guardar datos en AsyncStorage
    const saveItems = async (newItems: { index: number; value: string }[]) => {
        try {
        await AsyncStorage.setItem(itemsKey, JSON.stringify(newItems));
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
        console.log(items)
    };

    return (
        <View>
            {/* Lista dinámica */}
            <ScrollView>
                {items.map(({ index, value }) => (
                    <View key={value}>{renderItem(index, value)}</View>
                ))}
            </ScrollView>


            {/* Botón para abrir el modal */}
            <TouchableOpacity
                style={ styles.buttonAdd }
                onPress={ () => setModalVisible(true)}
            >
                <FontAwesomeIcon icon={faPlus} color={globalColors.white} size={24}/>
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
                    <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1} style={{height: 10}}>
                        <View style={styles.centeredView}>
                            <View style={styles.closeModalView}>
                                <Text style={{textAlign: 'center', color: globalColors.white, fontSize: 16}}>¿Qué puesto le gustaria añadir?</Text>
                                <TextInput 
                                    style={styles.inputModal}
                                    placeholder={"ingerse puesto"}
                                    placeholderTextColor={globalColors.placeholder}
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
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </Modal>

        </View>
    );
};