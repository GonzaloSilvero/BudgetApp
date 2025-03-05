import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { globalStyles } from '../theme/GlobalStyles'
import { InputSalaries } from '../components/InputSalaries'
import { DynamicRenderer } from '../components/DynamicRenderer'


export const SalariesScreen = () => {

  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prev) => !prev); // Alterna entre true y false para forzar re-render
  };
  
  return (
    <>
      <ScrollView style={{ ...globalStyles.container, paddingTop: 50 }}>
        <InputSalaries task='ENCARGADO' del={false}/>
        <DynamicRenderer
          refresh={refresh}
          renderItem={(index, value) => (
            <InputSalaries task={value} del={true} onTaskDeleted={handleRefresh} />
          )}
        />
      </ScrollView>
    </>
  )
}
