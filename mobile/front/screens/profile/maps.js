import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert} from 'react-native';
import colors from '../../config/colors';
import { Pressable } from "react-native";
import {  SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
function Maps() {
    return (
        <View style={styles.background}>
        <Text style={styles.compte}>Carte géographique</Text>
        <MapView       
         style={{flex: 1}}        
         region={{          latitude:36.752887,          longitude: 3.042048,          latitudeDelta: 0.1,          longitudeDelta: 0.01        }}        showsUserLocation={true}      >
          <Marker pinColor='#FF0000' coordinate={{          latitude:36.8,          longitude: 3.03,          latitudeDelta: 0.1,          longitudeDelta: 0.01        }} />
          <Marker pinColor='#FBE204' coordinate={{          latitude:36.75,          longitude: 3.05,          latitudeDelta: 0.1,          longitudeDelta: 0.01        }} />
          <Marker pinColor='#05FF00' coordinate={{          latitude:36.752887,          longitude: 3.042048,          latitudeDelta: 0.1,          longitudeDelta: 0.01        }} />
          <Marker pinColor={colors.black} coordinate={{          latitude:36.72,          longitude: 3.02,          latitudeDelta: 0.1,          longitudeDelta: 0.01        }} />
         
         </MapView>
        </View>
    );
}
const styles= StyleSheet.create({
    containerPost:{
        flexDirection:'column',
        justifyContent:'space-around', 
        marginBottom:30,
        
    }, 

    subtitle:{
        fontSize:15,
        alignSelf:'center', 
        justifyContent:'center', 
      
        
    },
    subtitlen:{
        fontSize:13,
        left:5
        
    },
    subtitle1:{
        fontSize:15,
        alignSelf:'center', 
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center', 
        
        left:'2%',
        width:'95%', 
        
    },
    rectangle3:{
        flexDirection:'row', 
        backgroundColor:colors.white, 
        justifyContent:'space-between',
        alignContent:'center',
        height:50, 
        width :'100%',
    },
    rectangle5:{
        backgroundColor:colors.white, 
        marginVertical:30,
        width:'100%',
        position:'relative', 
        marginTop:50,
        alignSelf:'center'

    },
    rectangle4:{
        backgroundColor:colors.white, 
        borderRadius:5,
        width:'95%',
        position:'relative', 
        marginTop:15, 
        alignSelf:'center'

    }
    ,
    background:{
        flex:1,
       backgroundColor:  colors.primary ,
       height:'250%'
       
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
        
    },
    groupe13:{
        
        width:'70%', 
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row', 
        position:'relative',
        height:70
    },
    groupe30:{
        height:100, 
        bottom:'5%',
        width:'100%',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'column', 
        position:'relative'
      
    },
    groupe15:{
        width:'25%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe16:{
        top:'5%',
        width:'90%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe18:{
        width:'90%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe17:{
        width:'20%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-around',
        flexDirection:'row', 
        
    },
    groupe14:{
        left:10,
        flexDirection:'row', 
        
    },
    groupe144:{
        width:95,
        flexDirection:'column', 
        justifyContent:'space-between'
        
    },
    masqueImage: {
        height:40,
        borderRadius:50, 
        width:40, 
        marginLeft:'7%', 

    }, name:{
     
        letterSpacing:0, 
        marginLeft:'4%',
        fontSize:16, 
        fontWeight: 'bold',
    }, 
    ellipse:{
        borderRadius:50,
        width:'14%', 
        justifyContent:'space-around', 
        alignSelf:'center'
    },
    ellipse1:{
        backgroundColor:'#ff0000', 
        borderRadius:50,
        width:'13%', 
        justifyContent:'space-around', 
        alignSelf:'center'
    },line: {
        height:1.5,
        width:'100%',
        backgroundColor:colors.primary, 
        position:'relative',
        top:'10%'
        
    }
});
export default Maps;