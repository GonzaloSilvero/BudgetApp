import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal,
    Dimensions,
    StyleSheet,
    Keyboard,
} from 'react-native';
import { styles } from '../theme/StaffTheme';
import { Picker } from '@react-native-picker/picker';

const { height: screenHeight } = Dimensions.get('window');

type DynamicSelectItemProps = {
  renderItem: (index: number, value: string) => JSX.Element; // Función para renderizar el componente dinámico
  buttonText?: string; // Texto del botón principal
  modalTitle?: string; // Título del modal
};

const STORAGE_KEY = '@dynamic_items'; // Clave para AsyncStorage

export const DynamicSelectItem = ({
    renderItem,
    buttonText = "Agregar",
    modalTitle = "Añadir elemento",
}: DynamicSelectItemProps) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [isPickerOpen, setPickerOpen] = useState(false);

    const items = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];

    return (
        <View style={styles.dynamicContainer}>
            {/* Botón para abrir el modal */}
            {/* <TouchableOpacity
                style={styles.openModalButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.buttonText}>Abrir Modal</Text>
            </TouchableOpacity> */}

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
                <View style={styles.modalBackground}>
                <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1} style={{width: '90%',}}>
                    <View style={styles.modalContainer} >
                        <Text style={styles.modalTitle}>Seleccione una opción</Text>
                        
                        {/* Picker dentro de ScrollView */}
                        <ScrollView>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                                onFocus={() => setPickerOpen(true)}
                                onBlur={() => setPickerOpen(false)}
                                style={styles.picker}
                            >
                                {items.map((item, index) => (
                                    <Picker.Item key={index} label={item} value={item} />
                                ))}
                            </Picker>
                        </ScrollView>

                        {/* Botón de añadir */}
                        <TouchableOpacity
                            style={styles.addButton}
                            onPress={() => {
                                // Acción al añadir
                                setModalVisible(false);
                                console.log("Seleccionado:", selectedValue);
                            }}
                        >
                            <Text style={styles.addButtonText}>Añadir</Text>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};