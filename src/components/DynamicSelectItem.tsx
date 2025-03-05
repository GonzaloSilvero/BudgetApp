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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { globalColors } from '../theme/GlobalStyles';

const { height: screenHeight } = Dimensions.get('window');

type DynamicSelectItemProps = {
  renderItem: (index: number, value: string) => JSX.Element; // Función para renderizar el componente dinámico

};

const STORAGE_KEY = '@dynamic_items'; // Clave para AsyncStorage

export const DynamicSelectItem = ({
    renderItem,
}: DynamicSelectItemProps) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [isPickerOpen, setPickerOpen] = useState(false);

    const items = ["Opción 1", "Opción 2", "Opción 3", "Opción 4", "Opción 5"];

    return (
        <View style={styles.dynamicContainer}>

            {/* BOTON PARA ABRIR MODAL */}
            <TouchableOpacity
                style={ styles.buttonAdd }
                onPress={ () => setModalVisible(true)}
            >
                <FontAwesomeIcon icon={faUserPlus} color={globalColors.white} size={28} style={{ top: 2, left: 2}}/>
            </TouchableOpacity>

            {/* MODAL */}
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