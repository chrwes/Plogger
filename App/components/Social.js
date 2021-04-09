import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, Modal, TouchableHighlight, TextInput } from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {Card} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
 
 
export default function Social() {
   const [tableHead, setTablehead] = useState(['Namn', 'Skräp']);
   const [tableDataAllman, setTabledataVanner] = useState([
       ['1. Viola_53', '1641'],
       ['2. Superplogger1', '1452'],
       ['3. Gullan_W', '1422'],
       ['4. SivanDivan', '1209'],
       ['5. Gullviva_Jr', '1004'],
       ['6. Supergurra', '965'],
       ['7. Chrillan', '942'],
       ['8. Mattzor9', '940'],
       ['9. Fringezkow', '914'],
       ['10. Gorbys', '891']
     ]);
     const [tableDataVanner, setTabledata] = useState([
       ['1. Franchipanchi', '643'],
       ['2. Viberg_daMan', '641'],
       ['3. Mathilda_96', '601'],
       ['4. LeifLaban', '521'],
       ['5. Du' ,'491' ],
       ['6.', ''],
       ['7. ', ''],
       ['8. ', ''],
       ['9. ', ''],
       ['10. ', '']
     ]);
     const [modalVisible, setModalVisible] = useState(false);
     const [search, setSearch] = useState('Söker...');
 
   function scoresAllman() {
     return (
       <View style={styles.container}>
         <Card>
           <Card.Title>Ledartavla</Card.Title>
           <Card.Divider/>
           <Table borderStyle={{borderWidth: 1, borderColor: '#e3e3e3'}}>
             <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
             <Rows data={tableDataAllman} textStyle={styles.text}/>
           </Table>
         </Card>
       </View>
     );
   }
 
   function scoresVanner() {
     return (
       <View style={styles.container}>
         <Card>
           <Card.Title>Ledartavla</Card.Title>
           <Card.Divider/>
           <Table borderStyle={{borderWidth: 1, borderColor: '#e3e3e3'}}>
             <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
             <Rows data={tableDataVanner} textStyle={styles.text}/>
           </Table>
         </Card>
         <TouchableHighlight
         style={styles.buttons}
         onPress={() => {setModalVisible(true)}}
         >
           <Text>Lägg till fler vänner!</Text>
         </TouchableHighlight>
 
         <View>
           {/* En ruta som dyker upp för att söka efter vänner */}
           <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisible}
           >
             <Card>
               <Card.Title>Sök efter vänner!</Card.Title>
               <Card.Divider/>
               <TextInput
               style={styles.searchBar}
               // onChangeText={text => setSearch(text)} Kunde inte få den här funktionen att fungera, alltså att texten under ändras till det som skrivs
               />
               <Text>{search}</Text>
             {/* Knapp för att stänga modalen */}
               <TouchableHighlight
                 style={styles.buttons}
                 onPress={() => {setModalVisible(!modalVisible);
                 }}
                 >
                 <Text>Stäng</Text>
               </TouchableHighlight>
             </Card>
           </Modal>
         </View>
       </View>
   );
   }
 
   const Tab = createMaterialTopTabNavigator();
 
 
     return (
       <View style={styles.container}>
         {/* Här kunde vi inte ha NavigationContainer igen, varför vet jag inte däremot*/ }
           <Tab.Navigator tabBarOptions={{ indicatorStyle: { backgroundColor: '#628AA7',}}}>
             <Tab.Screen name="Allmän" component={scoresAllman} />
             <Tab.Screen name="Vänner" component={scoresVanner} />
           </Tab.Navigator>
       </View>
     );
}
 
 
const styles = StyleSheet.create({
 container: {
     flex: 1,
     alignContent: 'center',
     padding: 16,
     paddingTop: 30,
     backgroundColor: '#fff'
   },
 buttons: {
   alignSelf: 'center',
   backgroundColor: '#d5e8d3',
   padding:15,
   margin: 20,
 },
 head: {
   height: 40,
   backgroundColor: '#d5e8d3'
},
 text: {
     margin: 6
   },
 searchBar: {
   padding: 10,
   borderWidth:1,
   borderColor: 'grey',
   margin: 10,
 }
});

