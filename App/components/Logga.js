import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions, Modal, Alert, Pressable} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Card } from 'react-native-elements';


export default function Logga({ navigation }) {

  const [number, setNumber] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

 
  //Funktioner som adderar, subtraherar antal skräp
  const funcUpdateNumber1=()=>{setNumber(number + 1);}
  const funcUpdateNumber50=()=>{setNumber(number + 50);}
  const funcUpdateNumberMinus1=()=>{setNumber(number - 1);}
  const funcUpdateNumberMinus50=()=>{setNumber(number - 50);}
  const nollstall =()=>{setNumber(0);}

  return (

    <View style={styles.flexcontainer}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

      <View>
        <TouchableHighlight activeOpacity={11} onPress={() => funcUpdateNumberMinus1()} underlayColor='#d5d5d5'>
            <Image style={styles.calc} source={require('../assets/minus.png')} />
        </TouchableHighlight> 
      </View> 
      
      <View>
        <TouchableHighlight>
          <Image style={styles.pic} source={require('../assets/skrap.png')} />
        </TouchableHighlight> 
      </View>

        
      <View>
        <TouchableHighlight onPress={() => funcUpdateNumber1()} underlayColor='#d5d5d5'>
          <Image style={styles.calc} source={require('../assets/plus.png')} />
        </TouchableHighlight> 
      </View>

      </View>

      <TouchableOpacity style={{width: Dimensions.get('window').width, padding: 20}}>
        <Text style={{textAlign: 'center'}}>Skräp</Text>
      </TouchableOpacity>


      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:100}}>
        
        <View>
          <TouchableHighlight onPress={() => funcUpdateNumberMinus50()} underlayColor='#d5d5d5'>
            <Image style={styles.calc} source={require('../assets/minus.png')} />
          </TouchableHighlight> 
        </View> 
          
        <View>
          <TouchableHighlight>
            <Image style={styles.skrap} source={require('../assets/bag.png')} />
          </TouchableHighlight> 
        </View>
          
        <View>
          <TouchableHighlight onPress={() => funcUpdateNumber50()} underlayColor='#d5d5d5'>
            <Image style={styles.calc} source={require('../assets/plus.png')} />
          </TouchableHighlight> 
        </View>

      {/* Här nedan stängs flexrow 2 (påse, 50)  */}
      </View>



      <TouchableOpacity style={{width: Dimensions.get('window').width, padding: 20}}>
        <Text style={{textAlign: 'center'}}>Påse (50 skräp)</Text>
      </TouchableOpacity>



    {/* Logga-knappen */}
    <TouchableOpacity style={{flex:1, padding: 20, marginTop: 50, backgroundColor: '#d5e8d3',borderWidth: 1,
     borderColor: '#899987', borderRadius: 5,}} onPress={() => {setModalVisible(true);}}>
      <Text style={{textAlign: 'center'}}>Logga {number} skräp!</Text>
    </TouchableOpacity>
    
    <View>
           <Modal 
             animationType="slide"
             transparent={true}
             visible={modalVisible}
             onRequestClose={() => { //Hela OnRequest är ett tillägg som krävs för adnroid och endast med Modaler av någon anledning
              Alert.alert("Modal has been closed."); //Denna är endast för att det ska fungera på Android
              setModalVisible(!modalVisible);
            }}
           >

           <View>
             <View>
               {/* Ett card öppnar en liten ruta med innehåll, här bekräftas registereingen av skräp*/}
               <Card style = {{margin: 50, padding: 50}}>
                 <Card.Title style={{padding: 20, marginTop:50}}>{"\n"}Bra jobbat!</Card.Title>
                 <Text style={{alignSelf:'center', padding:50}}>
                 Du har nyss registrerat {number} skräp!
                 </Text>
                 <Pressable>
                 <TouchableOpacity
                    style={{alignSelf:'center', textAlign: 'center', padding: 20, backgroundColor: '#d5e8d3',borderWidth:1,
                    borderColor: '#899987'}}
                    onPress={() => {
                      setModalVisible(!modalVisible); navigation.navigate('Store', {paramKey: number});
                      nollstall() //nollställer number när skräpet är loggat
                      ;}}
                      >
                   <Text>Stäng</Text>
                 </TouchableOpacity> 
                </Pressable> 
               </Card>
             </View>
           </View>
           </Modal>
         </View>

        

  {/* Här stängs containern, inget läggs under detta stycke */}
  </View>
  
  );
}



const styles = StyleSheet.create({

  flexcontainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    padding: 60,
    alignItems: 'center',
    backgroundColor: '#fff'

  },


 pic: {
  height: 100,
  width: 100,
 },

 skrap: {
   height: 100,
   width: 100,
 },


  calc: {
    height: 50,
    width: 50,
    margin: 30,
  },

  
});
