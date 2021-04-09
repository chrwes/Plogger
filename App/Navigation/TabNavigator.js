import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Home';
import Store from '../components/Store';
import TabBar from '../components/TabBar';
import Social from '../components/Social';
import LoggaNavigator from './LoggaNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator  = () => {
    return (
     <Tab.Navigator tabBar={props => <TabBar {...props} /> }> 
        <Tab.Screen name='Home' component={LoggaNavigator}  initialParams={{icon: 'compass'}}/> 
        <Tab.Screen name='Store' component={Store}  initialParams={{icon: 'shopping'}}/>
        <Tab.Screen name='Social' component={Social} initialParams={{icon: 'medal'}} />
    </Tab.Navigator>
    ); // Härifrån hämtar vi namnen till TabBar som sedan skickas till Tab för att stylas. För att byta icon eller iconalbum se Tab.js
};

export default TabNavigator;