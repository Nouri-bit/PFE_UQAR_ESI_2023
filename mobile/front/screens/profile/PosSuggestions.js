import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert} from 'react-native';
import colors from '../../config/colors';
import { Pressable } from "react-native";
import {  SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
function PosSuggestions({navigation, route}) {

    console.log(route)
    const [backendData1, setBackendData1]=useState([{}])
    const [backendDatadislike, setBackendDatadislike]=useState([{}])
    const [backendDatadeleteLike, setBackendDatadeleteLike]=useState([{}])
    const [backendDatadeleteDislike, setBackendDatadeleteDislike]=useState([{}])
    const [backendDataComment, setBackendDataComment]=useState([{}])
    const [count, setCount] = useState(0);
      const [countD, setCountD] = useState(0);
      const [ID, setID] = useState(0);
      let Like= (Id, iduser)=>{
      
        resultat= fetch(colors.IP+"posts/like/"+Id+"/"+iduser+"/citoyen", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
                },
                
          })
          .then( response => response.json()).then(
            data => {
             
              setBackendData1(data); 
            //Alert.alert(backendData1.message);
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
    let deleteLike = (Id, iduser)=> {
        
        resultat= fetch(colors.IP+"posts/likedelete/"+Id+"/"+iduser+"/citoyen", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
                },
                
          })
          .then( response => response.json()).then(
            data => {
             
              setBackendDatadeleteLike(data); 
            //Alert.alert(backendDatadeleteLike.message);
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
    let deleteDislike = (Id, iduser)=> {
        
        resultat= fetch(colors.IP+"posts/dislikedelete/"+Id+"/"+iduser+"/citoyen", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
                },
                
          })
          .then( response => response.json()).then(
            data => {
             
              setBackendDatadeleteDislike(data); 
            //Alert.alert(backendDatadeleteDislike.message);
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
    let Dislike= (Id, iduser)=>{
        
        resultat= fetch(colors.IP+"posts/dislike/"+Id+"/"+iduser+"/citoyen", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
                },
                
          })
          .then( response => response.json()).then(
            data => {
              setBackendDatadislike(data); 
              //if(backendDatadislike.message==="dislike ajouté"){Alert.alert(backendDatadislike.message)}
            
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
    
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [backendData, setBackendData]=useState([{}])
    const [backendDataN, setBackendDataN]=useState([])
  const [backendDataP, setBackendDataP]=useState([])
  var LIKES=[]
  var DISLIKES=[]
 var names=[]
 var prenoms=[]
    useEffect(()=>{
		setBackendData1(null);
        setBackendDatadislike(null);
	}, [])
    useEffect (()=>{
        resultat= fetch(colors.IP+"posts/Suggestions").then(
           response => response.json()
         ).then(
           data => {
             setBackendData(data)
             data.posts.map(({userId})=>{
              fetch(colors.IP+"citoyens/"+userId).then(
                response => response.json()
              ).then(
                data => {
                  prenoms= [...prenoms, data.prenom]
                  names=[...names, data.nom]
                  setBackendDataN(names)
                       
                  setBackendDataP(prenoms)
                
                 console.log(userId, backendDataP, backendDataN)
                
                }
              )            
             })
           }
         )
       }, [backendData1, backendDatadislike, backendDatadeleteLike, backendDatadeleteDislike])
       return (
        <View style={styles.background}>
        <Text style={styles.compte}>Home</Text>
        <View style={styles.rectangle3}>
            <Pressable style={styles.subtitle} onPress={()=> navigation.navigate("All")}>
            <Text style={styles.subtitle}>Tous</Text>
            </Pressable>
            <Pressable style={styles.subtitle} onPress={()=> navigation.navigate("Problèmes")}>
            <Text style={styles.subtitle}>Problèmes</Text>
            </Pressable>
            <Pressable style={styles.subtitle} onPress={()=>navigation.navigate("Suggestions")}>
            <Text style={styles.subtitle}>Suggestions</Text>
            </Pressable>
            <Pressable style={styles.subtitle} onPress={()=>navigation.navigate("Expériences")}>
            <Text style={styles.subtitle}>Expériences</Text>
            </Pressable>
            <Pressable style={styles.subtitle} onPress={()=>navigation.navigate("Compliments")}>
            <Text style={styles.subtitle}>Compliments</Text>
            </Pressable>
        </View>
        <ScrollView contentContainerStyle={styles.containerPost}>
            
     
        {
       (typeof backendData.posts ==='undefined') ? (
          <Text style={styles.subtitle}> Loading ...</Text>
        ) : (
          
          backendData.posts.map(({_id, contenu, typepost, userId, datepost, like, dislike, commentaires, images}, i)=>
          (
            <>
            <View style={styles.rectangle4} key={i}>
                  
        <SafeAreaView style={styles.groupe13} >
            <Image style={styles.masqueImage} source={require('../../assets/user.png')} /><SafeAreaView>

                  <Text style={styles.name}>{backendDataP[i]} {backendDataN[i]}</Text>

                  <Text style={styles.subtitle}>{datepost}</Text>
              </SafeAreaView>
              
              <SafeAreaView style={styles.groupe144}>
                      {typepost.map((type)=>
                      <>
                      
              <SafeAreaView style={styles.groupe14}>
                      <SafeAreaView style={styles.ellipse} 
                      backgroundColor={type==="Problèmes" ? "#FF0000" : type==="Suggestions"? "#FBE204": type==="Compliments" ? "#05FF00": colors.black}>
                        
                              <Text></Text>
                          </SafeAreaView>
                     <Text style={styles.subtitlen}>{type} </Text>
                     
                     </SafeAreaView>      
                    </> )}
                  </SafeAreaView>
            
            
            </SafeAreaView>
        
                    
            <Text style={styles.subtitle1} >{contenu}</Text>
            
            
 
    <SafeAreaView style={styles.groupe30}>
      <SafeAreaView style={styles.groupe16}>
        <SafeAreaView style={styles.groupe17}>
        <SimpleLineIcons name="like" size={19}><Text style={styles.subtitle}>{like.length}</Text></SimpleLineIcons>
        <SimpleLineIcons name="dislike" size={19}><Text style={styles.subtitle}>{dislike.length}</Text></SimpleLineIcons>
        </SafeAreaView>
        <Text style={styles.subtitle}>{commentaires.length}</Text>
        </SafeAreaView>
       
        <SafeAreaView style={styles.line}></SafeAreaView>
        
        <SafeAreaView style={styles.groupe18}>
        <SafeAreaView style={styles.groupe15}>
    <Pressable onPress={()=> {
     
     if(count===0 && ID !=_id && countD===0){
      Like(_id, route.params.tous.id); 
      LIKES= [...LIKES, _id]
      console.log("one")
      setCount(1) 
      console.log(count)
      setID(_id)
     
     }
     else{
      if(count===1 && ID ===_id){

        deleteLike(_id, route.params.tous.id)
        LIKES.filter(obj=>{
          return obj != _id
        })
      }
      else if (countD===1 && ID ===_id){
        deleteDislike(_id, route.params.tous.id)
        DISLIKES.filter(obj=>{
          return obj != _id
        })
      }
      
      console.log("two")
      setCount(0) 
      setCountD(0)
      setID(0)
      console.log(count)
     }
     console.log(LIKES)
      console.log(DISLIKES)
    }}>
      <SimpleLineIcons name="like" size={25} color={(count===1 && (ID===_id || (LIKES.includes(_id) ===true )))? colors.primary : "black"} />
      
        
      
    </Pressable>
    <Pressable onPress={() => { 
    if(countD===0 && ID !=_id && count===0){
      Dislike(_id, route.params.tous.id); 
      DISLIKES=[...DISLIKES, _id]
      console.log("one")
      setCountD(1) 
      console.log(countD)
      setID(_id)
      
     }
     else{
      if(count===1 && ID===_id){
        deleteLike(_id, route.params.tous.id)
        LIKES.filter(obj=>{
          return obj != _id
        })
      }
      else if (countD===1 && ID === _id){
        deleteDislike(_id, route.params.tous.id)
        DISLIKES.filter(obj=>{
          return obj != _id
        })
      }
     
      console.log("two")
      setCountD(0) 
      setCount(0)
      setID(0)
      console.log(countD)
     }
     console.log(LIKES)
     console.log(DISLIKES)         
                     }}>
    
      <SimpleLineIcons name="dislike" size={25} color={(countD===1 && ( ID=== _id || (DISLIKES.includes(_id)===true))) ?  colors.primary : "black"} />
      
    </Pressable>
    
    </SafeAreaView>
    <Pressable onPress={()=> navigation.navigate("Feed", {_id:_id})}>
    <AntDesign name="arrowsalt" size={24} color="black" > <Text style={styles.subtitle}>Feedbacks</Text></AntDesign> 
    </Pressable>
    <Pressable onPress={()=> navigation.navigate("commentaires", {_id:_id})}>
    <FontAwesome5 name="comment" size={24} color="black" > <Text style={styles.subtitle}>Commenter</Text></FontAwesome5> 
    </Pressable>
    
    </SafeAreaView>
    
    
    </SafeAreaView>
        </View>
        </>
 ))
)
}

        
        <View style={styles.rectangle5} >
         </View>
         </ScrollView> 
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

export default PosSuggestions;