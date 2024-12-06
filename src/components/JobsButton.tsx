import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/HomeTheme'

interface JobsButtonProps {
    text: string;
    onClick: () => void;
}

export const JobsButton = ({text, onClick}: JobsButtonProps) => {

  return (
    <TouchableOpacity 
      style={ styles.box }
      onPress={onClick}
    >
      <Text style={ styles.text }>{text}</Text>
    </TouchableOpacity>
  )
}
