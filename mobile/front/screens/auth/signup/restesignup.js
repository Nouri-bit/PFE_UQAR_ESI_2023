import React, {useState, useEffect, Component} from 'react';
import {Animated, View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, ImageBackground} from 'react-native';
import colors from '../../../config/colors';
import {CheckBox } from 'react-native-elements'; 
import { Pressable } from "react-native";
import { Button } from 'react-native';
import { Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DatePicker from 'react-native-datepicker';
//import Animated from 'react-native-reanimated';
import { useRef } from 'react';
function Restesignup({navigation, route}) {
  const tabOffsetValue = useRef(new Animated.Value(1)).current;
    const [Homme, setCheckedH] = useState(false);
    const [Femme, setCheckedF] = useState(false);
    var TYPE=""
    const [dateN, setdateN] = useState('09-10-2003');
    const checkingH = ()=>{
       
        setCheckedH(true)
        setCheckedF(false)

     }
     const checkingF = ()=>{
       
        setCheckedF(true)
        setCheckedH(false)

     }
     
    var backendData= {}
    const [images, setimages] = useState(null);
const pickimage= async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing:true, 
      selectionLimit:5,
      
     
  })
  if(!result.canceled){
      console.log(result.assets[0].uri)
      setimages(result.assets[0].uri)
  }
}
    let Like = (dateNaissance)=>{
        if(Homme===true){
             TYPE="Homme"
           }
           else{
            TYPE="Femme"
           }
        resultat= fetch("http://192.168.1.7:5000/citoyens/"+route.params.Email, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({sexe:TYPE, photoprofil:images, datenaissance:dateNaissance})
          })
          .then( response => response.json()).then(
            data => {
             backendData={...backendData, data}
             console.log(backendData)
             
              if(TYPE != null && dateNaissance != null){
                  console.log(true)
                navigation.navigate("Login")
             
              }
            
            }
          )
          .then(
            (result) => {
              console.log(result);
            },
            (error) => {
              console.log(error);
            });
          
      console.log(resultat)
       }
    return (
    <View style={styles.background}>
        <Text style={styles.compte}>Compléter vos informations</Text>
        <View style={styles.rectangle27}>
        <SafeAreaView style={styles.groupe32}>  
        <Text style={styles.subtitle}>Photo de profil</Text>
            
      
            <SafeAreaView style={styles.groupe35}>
                <Pressable onPress={pickimage} >
                       
        <Image
              source={ images=== null ? require('../../../assets/user.png') : {uri:images}}
              style={images===null? styles.masqueImage : styles.masqueImage2}
            /> 
                </Pressable>    
            </SafeAreaView>
                
            
        </SafeAreaView> 
        <SafeAreaView style={styles.groupe32}>
            <Text style={styles.subtitle}>Date de naissance</Text>
            <Animated.ScrollView  
             scrollEventThrottle={16} // <-- Use 1 here to make sure no events are ever missed
             onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: tabOffsetValue } } }],
               { useNativeDriver: true } // <-- Add this
             )}
           >
            <DatePicker
          style={styles.datePickerStyle}
          date={dateN}
          mode="date"
          placeholder="Choisir votre date de naissance"
          format="DD/MM/YYYY"
          minDate="01-01-1930"
          maxDate="30-12-2023"
          confirmBtnText="Confirmer"
          cancelBtnText="Annuler"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setdateN(date);
          }}
        />
        </Animated.ScrollView>
        </SafeAreaView> 
        
        <SafeAreaView style={styles.groupe32} >
            
        <Text style={styles.subtitle}>Sexe</Text>
        <SafeAreaView style={styles.groupe15} >
        
      <CheckBox
           style={styles.checkbo}
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={checkingH}
            checked={Homme}
            />
            

            <Text style={styles.subtitlenn}>Homme</Text>
        
  
     </SafeAreaView>
     <SafeAreaView style={styles.groupe15} >
        
      <CheckBox
           style={styles.checkbo}
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={checkingF}
            checked={Femme}
            />
            

            <Text style={styles.subtitlenn}>Femme</Text>
        
  
     </SafeAreaView>
     </SafeAreaView>
     
      
        
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.group8}>
            <Button onPress={()=>Like(dateN)} color={colors.white}  title="Ajouter"/>
           </SafeAreaView>
        </SafeAreaView>
        
        </View>
    </View>
    );
}

const styles=StyleSheet.create({
    datePickerStyle: {
        width: 230,
      },
    groupe322:{
        display:"flex",
        flexDirection:'row',  
        position:'relative', 
        marginTop:5, 
       justifyContent:'center'
    }, 
    groupe35:{
        display:"flex",
        flexDirection:'row',  
        position:'relative', 
        marginTop:15,
       alignSelf:'center', 
       right:30
    
    },
    checkbo: {
        
        color:colors.primary
       
      },
       groupe15:{
        width:'25%', 
        position:'relative',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    }, background:{
        flex:1,
       backgroundColor:  colors.primary
    }, 
    compte: {
        
        alignSelf:'center',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:80, 
        top:35,
        overflow:'hidden', 
        fontWeight: 'bold',
        color: colors.white,
        fontSize:25
          
        
    }
    ,
    bigcontainer:{
     flex:1, 
     display:"flex", 
     flexDirection:'row',
     justifyContent:'center',
     width:'100%',
     backgroundColor:colors.white   
    }
    , rectangle2:{
        height: 844,
        left:0,
        position:'absolute',
        top:0,
        width:390
    }, 
    rectangle27:{
        backgroundColor:colors.white,
        borderRadius:16,
        shadowColor:"#4b4b26",
        height:'100%',
        alignSelf:'center',
        position:'absolute',
        top:85,
        width:'97%'
    }, 
    masqueImage: {
        height:150,
        width:150, 
        display:"flex",  
      position:'relative', 
      justifyContent:'center', 
      alignSelf:'center'

    }, masqueImage2: {
        height:150,
        width:150, 
        borderRadius:100, 
        display:"flex",  
      position:'relative', 
      justifyContent:'center', 
      alignSelf:'center'

    }
    , 
    groupe13:{
        position:'absolute',
        top:20,
        width:'100%', 
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row', 
        
    }, 
    name:{
         
        letterSpacing:0, 
        marginTop:10, 
        marginLeft:'4%',
        fontSize:20, 
        fontWeight: 'bold',
    }, 
    groupe32:{
        display:"flex",
        flexDirection:'column', 
        left:30, 
        position:'relative', 
        top:'5%',
        width:'100%',
        marginTop:20, 
    }, 
    groupe33:{
        display:"flex",
        flexDirection:'row',  
        left:30, 
        position:'relative', 
        top:'10%', 
        marginTop:17
    },
    inputstyle:{
        color:colors.black,
        paddingHorizontal:20, 
        paddingVertical:12, 
        minHeight:19, 
        fontSize:17,
    },
    group7:{
        alignContent:'flex-start', 
        borderRadius:5, 
        display:'flex', 
        height:50, 
        right:19,
        top:7,
        backgroundColor:colors.secondary,
        width:'95%'
    },
    group8:{
        alignContent:'center', 
        alignSelf:'center',
        borderRadius:5, 
        display:'flex', 
        height:40, 
        right:20,
        top:7,
        backgroundColor:colors.primary,
        width:'26%'
    }, 
    groupe31:{
        gap:17, 
        marginTop:22, 
        
    }, 
subtitlenn:{
    fontSize:17,
    top:16, 
    right:13
}, 
subtitle:{
    fontSize:17,
    
},
subtitle1:{
    fontSize:17,
    color:colors.secondary, 
    fontWeight:'bold'

}, 
line: {
    height:1.5,
    width:'100%',
    backgroundColor:colors.secondary, 
    top:'17%'
    
}
})
export default Restesignup;