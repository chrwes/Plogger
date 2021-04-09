import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Modal, Alert, Pressable } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';



export default function Store({ route }) {
var cost=50;
var expensive=250;
var trash=102;

//State för alla siffror som kan uppdateras samt för huruvida modalen(kupongfönstret) syns eller ej. Är satt som "falskt" som default
//Även en timer definieras här med värdet 60, alltså en minut.

const [counter, setCounter] = useState(60);
const [modalVisible, setModalVisible] = useState(false);
const [distance, setDistance] = useState(44);

const [points, setPoints] = useState(200);
const money = (points+route.params.paramKey);



//Funktion för att ta betalt vid köp av kupong
function buyCoupon() {
   setPoints(points - cost);
 }

// Funktion för när en kupong är för dyr. Fuskbygge, borde egentligen vara en if-sats
function tooExpensive() {
   alert("Du har inte tillräckligt med poäng. Plogga mer för att köpa den här kupongen!");
}

//funktion för timern
useEffect(() => {
 counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
}, [counter]);

 return (
  <SafeAreaProvider>
     <ScrollView style={{flex:1}}>
       <View style={styles.background}>
       
         {/* Användarens information i form av en ruta */}
         <View style={styles.userbox}>
           <Text style={{textAlign: 'left', padding: 20, paddingBottom:0, fontSize: 20}}>
               Mia_ts4
           </Text>
           <View style={styles.info}>
           <Image
             source={require('../assets/user.png')}
             style={{height:80, width: 80}}
           />

             {/* Alla siffror som kan uppdateras i appen */}
             <Text>
               <Text style={styles.stats}>
                 {distance}
               </Text> 
               {"\n"}
               km
             </Text>

             <Text>
               <Text style={styles.stats}>
                 {collectedTrash}
               </Text>
               {"\n"}
               skräp
             </Text>

             <Text>
               <Text style={styles.stats}>
               {money}
               </Text>
               {"\n"}
               poäng
             </Text> 
           </View>
         </View>
        
         {/* Här börjar själva "butiken" */}
         <View style={{fontSize: 20, padding:15, textAlign: 'center'}}>
           <Text>
             När du hämtar en kupong dyker en sträckkod upp i 15 minuter. Visa denna för butiken.
           </Text>
         </View>
         <View style={styles.coupons}>
           <Text>
             Pressbyrån Hagaparken
             {"\n"}
             10% rabatt, {cost} poäng
           </Text>
           {/* Variabeln cost kan ändras globalt */}
           <TouchableHighlight
           // Knappen för att köpa en kupong
           activeOpacity={11}
           onPress={() => {setModalVisible(true); buyCoupon();
           }} //Här kallas två funktioner in, en som öppnar modalen (kupongen) och en som tar betalt
           >
               <Text style={styles.buttons}>
                 Köp kupong!
               </Text>
           </TouchableHighlight>
         </View>

         <View style={styles.coupons}>
           <Text>
             Britts mode
             {"\n"}
             5% rabatt, {cost} poäng
           </Text>
           <TouchableHighlight
           onPress={() => buyCoupon()}
           activeOpacity={11}>
               <Text style={styles.buttons}>
                 Köp kupong!
               </Text>
           </TouchableHighlight>
         </View>

         <View style={styles.coupons}>
           <Text>
             Pressbyrån Hagaparken
             {"\n"}
             10% rabatt, {cost} poäng
           </Text>
           <TouchableHighlight
           onPress={() => buyCoupon()}
           activeOpacity={11}>
               <Text style={styles.buttons}>
                 Köp kupong!
               </Text>
           </TouchableHighlight>
         </View>

         <View style={styles.coupons}>
           <Text>
             Kafé Blomman
             {"\n"}
             Gratis kaffe, {expensive} poäng
           </Text>
           <TouchableHighlight
           onPress={() => tooExpensive()} //Här kallas en annan funktion in som säger att vi inte har råd att köpa den här kupongen
           activeOpacity={11}>
               <Text style={styles.buttons}>
                 Köp kupong!
               </Text>
           </TouchableHighlight>
         </View>

         <View style={styles.coupons}>
           <Text>
             Kafé Gungan
             {"\n"}
             Gratis bulle, {expensive+50} poäng
           </Text>
           <TouchableHighlight
           onPress={() => tooExpensive()}
           activeOpacity={11}>
               <Text style={styles.buttons}>
                 Köp kupong!
               </Text>
           </TouchableHighlight>
         </View>

         <View style={styles.coupons}>
           <Text>
             Kafé Blomman
             {"\n"}
             Gratis bröd, {expensive+100} poäng
           </Text>
           <TouchableHighlight
           onPress={() => tooExpensive()}
           activeOpacity={11}>
               <Text style={styles.buttons}>
                 Köp kupong!
               </Text>
           </TouchableHighlight>
         </View>
        
         {/* Modalen som poppar upp när man köpt en kupong */}
         <View>
           <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisible}
             onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
             }} 
           >

           <View>
             <View>
               {/* Ett card öppnar en liten ruta med innehåll, i det här fallet en kupong */}
               <Card style={styles.qrcode}>
                 <Card.Title >Pressbyrån Hagaparken</Card.Title>
                 <Text style={{alignSelf:'center'}}>
                   Kupongen är tillgänglig i: {counter}
                 </Text>
                 <Card.Image
                 source={require('../assets/qr_code.png')}
                 style={{alignSelf:'center', height: 300, width: 300, padding:30}}>
                 </Card.Image>
                 <TouchableHighlight
                   style={{alignSelf:'center', textAlign: 'center', padding: 20, backgroundColor: '#d5e8d3', borderWidth:1,
                   borderColor: '#899987'}}
                   onPress={() => {
                     setModalVisible(!modalVisible);
                   }}
                 >
                   <Text>Stäng Kupong</Text>
                 
                 </TouchableHighlight>
               </Card>
             </View>
           </View>
           </Modal>
         </View>

       </View>
     </ScrollView>
   </SafeAreaProvider>
 );
}

const styles = StyleSheet.create({
 background: {
   backgroundColor: 'white',
   marginBottom: 50,
 },
 userbox: {
   backgroundColor: '#628AA7',
   paddingTop: 40,
 },
 info: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
   paddingTop: 30,
   paddingBottom:20,
   paddingRight: 20,
 },
 stats: {
   fontSize:25,
 },
 coupons: {
   marginTop: 15,
   backgroundColor: '#E2E8F3',
   padding: 20,
   flexDirection: 'row',
   justifyContent: 'space-between',
   fontSize: 20,
   fontWeight: 'bold',
 },
 buttons: {
   backgroundColor: '#d5e8d3',
   alignContent:'flex-end',
   padding:10,
   borderWidth:1,
   borderColor: '#899987',
 },
 qrcode: {
   flex: 1,
   flexDirection: 'row',
   justifyContent: 'space-around',
   margin: 20,
   backgroundColor: "white",
   borderRadius: 20,
   padding: 35,
   alignItems: 'center',
 },
});

