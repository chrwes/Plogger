import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // https://icons.expo.fyi/

const Tab = ({color, tab, onPress, icon}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          {icon && <MaterialCommunityIcons name={icon} size={35} color={color} />} 
           
        </TouchableOpacity> 
    );
};


const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#5CA054',
        
}
});

export default Tab;


