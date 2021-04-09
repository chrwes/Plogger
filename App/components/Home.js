import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, requireNativeComponent } from 'react-native';
import { TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, {Callout, Marker} from 'react-native-maps'; // MapViews API. Här i måsvingarna läggs Apier till varteftersom de används
import { Asset } from 'react-native-unimodules';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {} from 'react-native-vector-icons';
import { IconButton, Colors} from 'react-native-paper';// https://reactnativepaper.com/ UI-kits från react native paper



export default function Home ({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync(); //Asks the user to grant permissions for location. Alias for Permissions.askAsync(Permissions.LOCATION).
      if (status !== 'granted') { //Om användaren nekar kommer appen skriva ett felmeddelande
        setErrorMsg('Platstjänster nekade');
        return;
      }

      let location = await Location.getCurrentPositionAsync({}); // Checks whether location services are enabled by the user.
      setLocation(location);
    })();
  }, []);

  let text = 'Laddar..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location); //Om allt funkar skrivs location ut. 
  }

  return (
<View style={styles.container}>
   
    <MapView
      style={styles.map}
      region={{
        latitude: 59.26534084547838,
        longitude: 18.09092768024172,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}>
      <Marker 
      coordinate={{
        latitude: 59.26534084547838,
        longitude: 18.09092768024172
      }}
      title="Återvinningscentralen vid Döskallebacken"
      description = {JSON.stringify(location)}
     >
       <Callout tooltip>
        <View>
          <View style={styles.bubble}>
           <Text style={styles.name}>Dödskallebacken</Text>
           
          <Image
          style={styles.image}
          source={require('../assets/ift.jpg')}
          />

           </View>
          <View style={styles.arrowBorder}/> 
        <View style={styles.arrow}/> 


        </View>

       </Callout>

       </Marker>
    </MapView>
   

   {/* nedaför är knappen som leder till Loggasidan, den är sammankopplad till LoggaNavigatorn som gör det
    möjligt att navigera från Home sidan*/ }
   <View style={styles.buttonview}> 
   <IconButton style={styles.button} 
   icon="plus"
   color={Colors.dimgrey}
   size={45}
   onPress={() => navigation.navigate('Logga')}
    />
    </View>
    
    
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,

  
  },
  buttonview: {
    alignSelf: 'flex-end',
    margin: 15, 
    backgroundColor: '#d5e8d3',
    borderRadius: 5,
    borderWidth:1,
    borderColor: '#899987',
  
  },

  bubble: {
    flexDirection: 'column', 
    alignSelf: 'flex-start', 
    backgroundColor: '#fff', 
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth:0.5,
    padding: 15,

  },

  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,

  },


  arrowBorder:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },

  image: {
    width: 120,
    height: 80,
  }

 });