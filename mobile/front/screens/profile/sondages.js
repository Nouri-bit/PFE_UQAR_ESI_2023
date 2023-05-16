import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image, Alert} from 'react-native';
import colors from '../../config/colors';
//import Checkbox from 'expo-checkbox';
import {CheckBox } from 'react-native-elements'; 
import { Pressable } from "react-native";
import {  SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5, AntDesign} from '@expo/vector-icons';

function Sondages({navigation, route}) {
  const [backendData, setBackendData]=useState([{}])
  const [Pour, setChecked1] = useState(false);
    const [Contre, setChecked2] = useState(false);
    const [Ch3, setChecked3] = useState(false);
  
    
    const checking = ()=>{
       
        setChecked1(true)
        setChecked2(false)
        setChecked3(false)
     }
     const checking3 = ()=>{
       
        setChecked3(true)
        setChecked2(false)
        setChecked1(false)

     }
     const checking2 = ()=>{
       
        setChecked2(true)
        setChecked1(false)
        setChecked3(false)
     }
     const [backendDataN, setBackendDataN]=useState([])
     const [backendDataP, setBackendDataP]=useState([])
     var LIKES=[]
     var DISLIKES=[]
    var names=[]
    var prenoms=[]
    useEffect (()=>{
        resultat= fetch("http://192.168.1.7:5000/sondages/all").then(
           response => response.json()
         ).then(
           data => {
             setBackendData(data)
             data.posts.map(({facilitateurId})=>{
                fetch("http://192.168.1.7:5000/citoyens/f/"+facilitateurId).then(
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
      <Text style={styles.compte}>Sondage</Text>
      <View style={styles.rectangle3}>
          <Pressable style={styles.subtitle} onPress={()=> navigation.navigate("alls")}>
          <Text style={styles.subtitle}>Sondages</Text>
          </Pressable>
          <Pressable style={styles.subtitle} onPress={()=> navigation.navigate("forms")}>
          <Text style={styles.subtitle}>Formulaires</Text>
          </Pressable>
          
      </View>
      <ScrollView contentContainerStyle={styles.containerPost}>
          
   
      {
     (typeof backendData.posts ==='undefined') ? (
        <Text style={styles.subtitle}> Loading ...</Text>
      ) : (
        
        backendData.posts.map(({_id,datecreation, datefin, contenu, facilitateurId, status, titre, choix, nombrevotes  }, i) =>
        (
          <>
          <View style={styles.rectangle4} key={i}>
                
      <SafeAreaView style={styles.groupe13} >
          <Image style={styles.masqueImage} source={require('../../assets/user.png')} /><SafeAreaView>

                <Text style={styles.name}>{backendDataP[i]} {backendDataN[i]}</Text>

                <Text style={styles.subtitle}>{datecreation}</Text>
            </SafeAreaView>
            
            
          
          
          </SafeAreaView>
      
          <View style={styles.rectangle33} >
            
          <Text style={styles.name} >{titre}</Text>
          </View>        
          <Text style={styles.subtitle1} >{contenu}</Text>

  <SafeAreaView style={styles.groupe30}>
    
     
      
      <SafeAreaView style={styles.groupe18}>
      
      {choix.map((type, i)=>
      
  
    //[type.ch, setChecked]= useState(false);
                      <>
                    
                      
      <SafeAreaView style={styles.groupe15} key={i}>
        
      <CheckBox
           style={styles.checkbo}
            center
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={(i===1)? checking:(i===2)? checking2: checking3}
            checked={(i===1)? Pour:(i===2)? Contre: Ch3}
            />
            

            <Text style={styles.subtitle}>{type.ch}</Text>
        
  
     </SafeAreaView>
  </> )}
  </SafeAreaView>
  <SafeAreaView style={styles.groupe1}>

  </SafeAreaView>
  <SafeAreaView style={styles.groupe16}>
    <SafeAreaView style={styles.groupe17}>
        
      </SafeAreaView>
      
      <Text style={styles.subtitle}>{nombrevotes} votes</Text>
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
    checkbo: {
        
        color:colors.primary, 
       
      },
      rectangle33:{
        flexDirection:'row', 
        backgroundColor:colors.white, 
        justifyContent:'center',
        alignContent:'center',
        height:30, 
        width :'100%',
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
        justifyContent:'space-around',
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
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe16:{
       
        width:'90%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe1:{
       height:17, 
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
        flexDirection:'column', 
        
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
export default Sondages;