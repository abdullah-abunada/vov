import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomIcon(props) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons
                name={
                    Platform.OS === 'ios'
                        ? `ios-${props.name}`
                        : `md-${props.name}`
                }
                color={props.active ? props.color : '#d1d1d1'}
                size={30}
            />
        </TouchableOpacity>
    )
}