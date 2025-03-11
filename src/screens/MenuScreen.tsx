import React, { useCallback, useEffect, useState } from 'react'
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { globalColors, globalStyles } from '../theme/GlobalStyles'
import { ButtonMenu } from '../components/ButtonMenu'
import { styles } from '../theme/MenuTheme'
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native'
import { LoadData } from '../hooks/LoadData'
import { CalculateItems } from '../hooks/CalculateItems'
import { IncreasePrices } from '../hooks/IncreasePrices'

export const MenuScreen = () => {

    const navigation = useNavigation();
    const [disabled, setDisabled] = useState(true)
    const [priorityTask, setPriorityTask] = useState(true)
    const [priorityPrice, setPriorityPrice] = useState(true)
    const [refresh, setRefresh] = useState(false)
    
    useFocusEffect(
        useCallback(() => {

            const LoadSalaries = async () => {
                try {
                    const { taskItems } = await LoadData()
                    // console.log(taskItems)
                    if (taskItems) {
                        if (taskItems.length === 0) {
                            // console.log("taskItems está vacío");
                            setPriorityTask(true)
                            setDisabled(true)
                        } else {   
                            setPriorityTask(false)
                            if (priorityPrice == false){
                                setDisabled(false)
                            }
                        }
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            const LoadPrices = async () => {
                try {
                    const { originalItems } = await LoadData()
                    const totalItems = CalculateItems()
                    if (originalItems) {
                        if (originalItems.length >= 6){
                            setPriorityPrice(false)
                            if (priorityTask == false){
                                setDisabled(false)
                            }
                            // console.log('cargados los precios')
                        } else {
                            setDisabled(true)
                            setPriorityPrice(true)
                            // console.log('no estan cargados los precios')
                        }
                        console.log(originalItems.length)
                        console.log(originalItems)
                    }
                } catch (error) {
                    console.log(error)
                }
            }

            const {updateDataIfNeeded} = IncreasePrices();

            // setTimeout(() => {
            //     setRefresh(!refresh)
            //     console.log('refresh')
            // }, 10000)
            
            updateDataIfNeeded()
            LoadPrices();
            LoadSalaries();
            // }
        }, [refresh])
    )
    
    const createBudget = () => {
        console.log(disabled)
        if (disabled === false) {
            navigation.navigate('JobsStack')
        } else {
            // <Modal>
            //     <View
            // </Modal>
        }
    }
    
    return (
        <ScrollView style={{ 
            ...globalStyles.container,
            backgroundColor: globalColors.secondary,
        }}>
            <Text style={ styles.title }>App Presupuestos</Text>
            <ButtonMenu onClick={createBudget} text='Crear presupuesto' disabled={disabled}/>
            <ButtonMenu onClick={() => navigation.navigate('Sueldos')} text='Sueldos' priority={priorityTask}/>
            <ButtonMenu onClick={() => navigation.navigate('Precios')} text='Precios' priority={priorityPrice}/>
            <ButtonMenu onClick={() => navigation.navigate('PresupuestosAnteriores')} text='Presupuestos anteriores'/>
            <ButtonMenu onClick={() => navigation.navigate('Temas')} text='Temas'/>
        </ScrollView>
    )
}
