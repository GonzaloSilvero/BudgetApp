import { View, Text } from 'react-native'
import React from 'react'

type NewTaskProps = {
    children: string | JSX.Element | JSX.Element[] ;
}

export const NewTask = ({children}: NewTaskProps) => {
    return children
}
