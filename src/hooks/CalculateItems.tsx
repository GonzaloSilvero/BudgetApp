import { View, Text } from 'react-native'
import React from 'react'
import { JobsMatrix } from '../data/JobsMatrix';

export const CalculateItems = () => {
    return JobsMatrix.reduce((count, row) => count + row.length, 0);
}