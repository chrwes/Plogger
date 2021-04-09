import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack' ;
import Home from '../components/Home';
import Logga from '../components/Logga';

const Stack = createStackNavigator();

const LoggaNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#5CA054'}, headerTintColor: 'black' }}>
            
            <Stack.Screen name='Home' component={Home} options={{ title: 'PlogMe'}} />
            
            <Stack.Screen name='Logga' component={Logga} />
        </Stack.Navigator>
    )

}

const styles = StyleSheet.create( {
    container: {


    }

} )
export default LoggaNavigator;