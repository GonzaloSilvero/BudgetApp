import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from '../theme/PriceTheme';
import { HorizontalLine } from './HorizontalLine';
import { globalColors } from '../theme/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PriceJobProps {
  text: string;
  id: string;
}

export const PriceJob = ({ text, id }: PriceJobProps) => {
  const [price, setPrice] = useState<string>(''); // Precio formateado
  const [rawValue, setRawValue] = useState<string>(''); // Valor sin formato

  useEffect(() => {
    const loadPrice = async () => {
      try {
        const item = await AsyncStorage.getItem(id);
        if (item) {
          const parsedItem = JSON.parse(item);
          setRawValue(parsedItem.price.toString());
          setPrice(formatCurrency(parsedItem.price.toString()));
        }
      } catch (error) {
        console.error('Error al cargar el precio:', error);
      }
    };

    loadPrice();
  }, []);

  const formatCurrency = (value: string) => {
    const numericValue = parseFloat(value.replace(',', '.'));
    if (isNaN(numericValue)) return value; // Si no es un número, no formatear

    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: value.includes('.') || value.includes(',') ? 2 : 0,
      maximumFractionDigits: 2,
    }).format(numericValue);
  };

  const handleTextChange = (text: string) => {
    // Solo permite números, comas y puntos
    let cleanText = text.replace(/[^0-9.,]/g, '');

    // Reemplaza múltiples comas o puntos con uno solo
    const decimalSeparator = cleanText.includes('.') ? '.' : ',';
    const parts = cleanText.split(/[.,]/);
    if (parts.length > 2) {
      cleanText = parts[0] + decimalSeparator + parts.slice(1).join('');
    }

    setRawValue(cleanText);
    setPrice(cleanText); // Mostrar el valor tal cual el usuario lo está escribiendo
  };

  const handleEndEditing = () => {
    const formattedPrice = formatCurrency(rawValue);
    setPrice(formattedPrice); // Formatear como moneda cuando termine de editar
    savePrice();
  };
  
  const savePrice = async () => {
    try {
      const numericValue = parseFloat(rawValue.replace(',', '.'));
      if (!isNaN(numericValue)) {
        await AsyncStorage.setItem(id, JSON.stringify({ id, price: numericValue, state: false }));
        console.log('Precio guardado:', { id, price: numericValue });
      }
    } catch (error) {
      console.error('Error al guardar el precio:', error);
    }
  };


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="$0"
          placeholderTextColor={globalColors.placeholder}
          value={price}
          onChangeText={handleTextChange}
          onEndEditing={handleEndEditing}
        />
      </View>
      <HorizontalLine width={270} color={globalColors.secondary} />
    </>
  );
};