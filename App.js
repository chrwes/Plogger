import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './App/Navigation/TabNavigator';


export default function App () {
    return (
        <NavigationContainer>
            <TabNavigator/>
         </NavigationContainer>
         
         
    );
}

