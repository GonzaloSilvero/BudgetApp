import React from 'react'
import { SelectJobCheck } from './SelectJobCheck';
import { FlatList } from 'react-native';
import { JobsMatrix } from '../data/JobsMatrix';

interface jobsProp {
    job: number;
}

export const JobsSwitch = ({job}: jobsProp) => {
 
    const jobs = JobsMatrix[job - 1] || []

    return (
        <FlatList 
            data={jobs}
            renderItem={({item, index}) => (
                <SelectJobCheck 
                    id={parseFloat(`${job}.${index + 1}`)}
                    text={item}
                />
            )}
        />
    )
}
