import { Text, TextInput, View } from "react-native";
import { HorizontalLine } from "./HorizontalLine";
import { VerticalLine } from "./VerticalLine";
import { styles } from "../theme/CalculateTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { globalColors } from "../theme/GlobalStyles";

export const JobItem = ({ job }: { job: { id: number; name: string; price: number } }) => {
    const [qty, setQty] = useState('');
    const [days, setDays] = useState('');

    useEffect(() => {
      // Recuperar datos guardados para este job
        const loadBudgetData = async () => {
            const budgetKey = `${job.id}-budgeted`;
            const savedData = await AsyncStorage.getItem(budgetKey);

            if (savedData) {
                const parsedData = JSON.parse(savedData);
                setQty(parsedData.qty.toString());
                setDays(parsedData.days.toString());
            }
        };
    
        loadBudgetData();
    }, [job.id]);

    const saveBudgetData = async () => {
        try {
            const parsedQty = parseInt(qty) || 0;
            const parsedDays = parseInt(days) || 0;
            const total = parsedQty * job.price;

            const budgetKey = `budgeted-${job.id}`;
            const budgetData = { id: job.id, qty: parsedQty, days: parsedDays, total };

            await AsyncStorage.setItem(budgetKey, JSON.stringify(budgetData));
            console.log(`Presupuesto guardado para ${budgetKey}:`, budgetData);
        } catch (error) {
            console.error('Error al guardar el presupuesto:', error);
        }
    };

    return (
        <>
            <Text style={styles.jobs}>{job.name}</Text>
            <View style={styles.containerInputs}>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder='0'
                placeholderTextColor={globalColors.placeholder}
                value={qty}
                onChangeText={(text) => setQty(text)}
                onEndEditing={saveBudgetData}
            />
            <VerticalLine height={20} />
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder='0'
                placeholderTextColor={globalColors.placeholder}
                value={days}
                onChangeText={(text) => setDays(text)}
                onEndEditing={saveBudgetData}
            />
            </View>
            <HorizontalLine height={1} />
        </>
    );
};