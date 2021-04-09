import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({state, navigation}) => {
    const [selected, setSelected] = useState ('Home'); //Detta gör det möjligt att styla den aktiva taben t.ex home
    const {routes} = state;
    const renderColor = currentTab => (currentTab === selected ? 'black' : '#424141'); //om den valda taben är samma som selected kommer en olika färger render
   
const handlePress = (activeTab, index) => {
    if (state.index !== index) {
    setSelected(activeTab);
    navigation.navigate(activeTab);
    }
    };
    console.log(state.routes);


return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            {routes.map((route, index) => (
            <Tab
             tab={route} //Denna route är det som gör att vi kan hämta name.tab från TabNavigator
             icon={route.params.icon}
             onPress={() => handlePress(route.name, index)}
             color={renderColor(route.name)}
             key={route.key} 
            />       
        ))}
        </View>
    </View>
  );};

const styles = StyleSheet.create ({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width,
        //height: 50,
        backgroundColor: '#5CA054',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 7,
    }
});

export default TabBar;