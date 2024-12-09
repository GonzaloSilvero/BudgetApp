import React from 'react'
import { ScrollView } from 'react-native'
import { globalStyles } from '../theme/GlobalStyles'
import { InputSalaries } from '../components/InputSalaries'
import { DynamicRenderer } from '../components/DynamicRenderer'


export const SalariesScreen = () => {
  return (
    <>
      <ScrollView style={{ ...globalStyles.container, paddingTop: 50 }}>
        <InputSalaries task='ENCARGADO' />
        <InputSalaries task='OFICIAL ESP' />
        <InputSalaries task='OFICIAL' />
        <InputSalaries task='AYUDANTE' />
        <DynamicRenderer
          buttonText="Añadir"
          modalTitle="¿Qué puesto le gustaria añadir?"
          inputPlaceholder="ingerse puesto"
          renderItem={(index, value) => (
            <InputSalaries task={value} />
          )}
        />
      </ScrollView>
    </>
  )
}
