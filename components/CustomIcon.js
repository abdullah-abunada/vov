import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Color from '../constants/Colors'

export default function CustomIcon(props) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Ionicons
                name={
                    Platform.OS === 'ios'
                        ? `ios-${props.name}`
                        : `md-${props.name}`
                }
                color={props.active ? props.color : Color.white}
                size={props.size}
            />
        </TouchableOpacity>
    )
}