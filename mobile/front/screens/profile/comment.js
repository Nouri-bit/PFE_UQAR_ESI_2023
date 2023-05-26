import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert, TextInput} from 'react-native';
import colors from '../../config/colors';
import { Pressable } from "react-native";
import {  SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

function Comment({navigateur, route}) {
    const [backendData, setBackendData]=useState([{}])
    const [backendDataComment, setBackendDataComment]=useState([{}])
    const [Contenu, setContenu] = useState("");
    console.log(route)
    let Commenter= (Id, iduser, contenu)=>{
       
        resultat= fetch("http://192.168.1.7:5000/posts/comment/"+Id+"/"+iduser+"/citoyen", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({contenu: contenu})
          })
          .then( response => response.json()).then(
            data => {
             
              setBackendDataComment(data); 
              console.log(backendDataComment)
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
    const [backendDataN, setBackendDataN]=useState([])
    const [backendDataP, setBackendDataP]=useState([])
    var LIKES=[]
    var DISLIKES=[]
   var names=[]
   var prenoms=[]
    useEffect (()=>{
        resultat= fetch("http://192.168.1.7:5000/posts/comments/"+route.params._id).then(
           response => response.json()
         ).then(
           data => {
             setBackendData(data)
             //console.log(backendData.posts)
             data.posts[0].commentaire.map(({user})=>{
              
                fetch("http://192.168.1.7:5000/citoyens/"+user).then(
                  response => response.json()
                ).then(
                  data => {
                    prenoms= [...prenoms, data.prenom]
                    names=[...names, data.nom]
                    setBackendDataN(names)
                         
                    setBackendDataP(prenoms)
                  
                   //console.log(userId, backendDataP, backendDataN)
                  
                  }
                )            
               })
           }
         )
       }, [])
    return (
        <View style={styles.background}>
        <Text style={styles.compte}>Commentaires</Text>
        <ScrollView>
        {
       (typeof backendData.posts ==='undefined' ) ? (

          <Text> Pas encore de commentaire </Text>
        ) : (
          
            backendData.posts[0].commentaire.map(({user, type, contenu, date}, i) =>
          (
            
            <>
            <View style={styles.rectangle4} key={i}>
                  
        <SafeAreaView style={styles.groupe13} >
            <Image style={styles.masqueImage} source={require('../../assets/user.png')} /><SafeAreaView>

                  <Text style={styles.name}>{backendDataP[i]} {backendDataN[i]}</Text>

                  <Text style={styles.subtitle}>{date}</Text>
              </SafeAreaView>
              
              
            
            
            </SafeAreaView>
        
                    
            <SafeAreaView style={styles.blanc}></SafeAreaView>
            <Text style={styles.subtitlen} >{contenu}</Text>
            <SafeAreaView style={styles.blanc}></SafeAreaView>
    
        </View>
        </>
          ))
        )
       }
       <SafeAreaView style={styles.rectangle44}>
       <SafeAreaView style={styles.groupe30}>
       
       
       <SafeAreaView style={styles.groupe18}>
       <SafeAreaView >
   
   
   </SafeAreaView>
    <TextInput style={styles.subtitlen} placeholder="Ajouter un Commentaire" value={Contenu} onChangeText={(text) => setContenu(text)}  enterKeyHint="done" />
   <Pressable onPress={()=> Commenter(route.params._id, route.params.tous.id, Contenu)}>
   <FontAwesome5 name="comment" size={29} color={colors.secondary}/> 
   </Pressable>
   </SafeAreaView>
   </SafeAreaView>
   </SafeAreaView>
   </ScrollView>
        </View>
    );
}
const styles= StyleSheet.create({
    blanc:{height:14}, 
    containerPost:{
        flexDirection:'column',
        justifyContent:'space-around', 
        marginBottom:30,
        
    }, 

    subtitle:{
        fontSize:14,
        alignSelf:'center', 
        justifyContent:'center', 
      
        
    },
    subtitlen:{
        fontSize:18,
       left:10
        
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

    },rectangle44:{
        backgroundColor:colors.white, 

        borderRadius:5,
        width:'95%',
        position:'relative', 
        marginTop:'7%', 
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
        height:70, 
        width:'100%',
         
        alignSelf:'flex-end',
        justifyContent:'center',
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
        //borderRadius:50, 
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
export default Comment;