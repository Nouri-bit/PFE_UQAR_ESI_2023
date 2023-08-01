import React from 'react';
import { Pressable, ScrollView } from 'react-native';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Platform} from 'react-native';
import colors from '../../config/colors';
import Checkbox from 'expo-checkbox';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Button } from 'react-native';
//import RNFetchBlob from "rn-fetch-blob";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
function Newpost({navigation, route}) {
  console.log(route)
    const [Problèmes, setChecked] = useState(false);
    const [Suggestions, setCheckedS] = useState(false);
    const [Compliments, setCheckedC] = useState(false);
    const [Expériences, setCheckedE] = useState(false);
    const [Contenu, setContenu] = useState("");
    const [names, setNames] = useState([]);
    var TYPE=[];
    const handleClick = (valeur) => {
      setNames(current => [...current,valeur]);
    };

const [images, setimages] = useState(null);
const [camera, setcamera] = useState(null);
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
const pickcamera= async () => {
  const permission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
if (permission.status !== 'granted') {
    console.log('not permitted ')
    const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (newPermission.status === 'granted') {
      //its granted.
      console.log('permittednow')
    }
} else {
  console.log('launch')
  let test = await ImagePicker.requestCameraPermissionsAsync({
  })
  let result = await ImagePicker.launchCameraAsync({
      allowsEditing:true
  })
  if(!result.canceled){
      console.log(result.assets[0])
      //setcamera(result.assets[0].uri)
  }
}
  
}
  //var [backendData, setBackendData]=useState({})
  var backendData= {}
  let TEST = (contenu, image)=> {
    const R = {contenu:contenu, images : image};
   console.log(R);
     if(Problèmes===true){
      //handleClick("Problèmes")
       TYPE=[...TYPE,"Problèmes"]
     }
     if(Suggestions===true){
      //handleClick("Suggestions")
        TYPE=[...TYPE, "Suggestions"]
     }
     if(Expériences===true){
      //handleClick("Expériences")
      TYPE=[...TYPE,"Expériences"]
     }
     if(Compliments===true){
      //handleClick("Compliments")
      TYPE=[...TYPE,"Compliments"]
     }
    //  console.log("here we go "+TYPE)
   
           resultat= fetch(colors.IP+"posts/"+route.params.tous.id, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({contenu : contenu, typepost:TYPE})
          })
          .then( response => response.json()).then(
            data => {
              //setBackendData(data); 
              backendData= {...backendData, data}
              console.log(backendData);
              if(backendData.data.message==="Post a été crée avec succès"){
              navigation.navigate("All")
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
            console.log('--------------------');
          

   }
    return (
        <ScrollView contentContainerStyle={styles.background}>
         <Text style={styles.compte}>Nouvelle publication</Text>
         <SafeAreaView style={styles.groupe31}>
         <SafeAreaView style={styles.group8}>
            <Button onPress={()=>TEST(Contenu,images)}  color={colors.white}  title="Publier"/>
        </SafeAreaView>
        </SafeAreaView>
         <SafeAreaView style={styles.groupe33}>
        <SafeAreaView style={styles.groupe32}>
        <Checkbox
          style={styles.checkbox}
          value={Problèmes}
          onValueChange={setChecked}
          color={Problèmes ? colors.black : undefined}
        />
        <Text style={styles.subtitle}>Problème</Text>
        </SafeAreaView>
        

        <SafeAreaView style={styles.groupe32}>
        <Checkbox
          style={styles.checkbox}
          value={Suggestions}
          onValueChange={setCheckedS}
          color={Suggestions ? colors.black : undefined}
        />
        <Text style={styles.subtitle}>Suggestion</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <Checkbox
          style={styles.checkbox}
          value={Expériences}
          onValueChange={setCheckedE}
          color={Expériences ? colors.black : undefined}
        />
        <Text style={styles.subtitle}>Expérience de vie</Text>
        </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe33}>
        <SafeAreaView style={styles.groupe32}>
        <Checkbox
          style={styles.checkbox}
          value={Compliments}
          onValueChange={setCheckedC}
          color={Compliments ? colors.black : undefined}
        />
        <Text style={styles.subtitle}>Compliment</Text>
        </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe34}>
            <SafeAreaView style={styles.group7}>
            <TextInput  placeholder="Qu'est-ce qui vous tracasse ?" value={Contenu} onChangeText={(text) => setContenu(text)} style={styles.inputstyle}  enterKeyHint="done"  />
        </SafeAreaView>
        </SafeAreaView>
         
        <SafeAreaView style={styles.groupe32}>
            <Pressable onPress={pickimage} style={styles.groupe35}> 
            <MaterialIcons name="photo-library" size={26} color="black"  />
            <Text style={styles.subtitle1}>Photo</Text>
            </Pressable>
            <Pressable  style={styles.groupe35}> 
            <Fontisto name="camera" size={24} color="black" />
            <Text style={styles.subtitle1}>Camera</Text>
            </Pressable>
        </SafeAreaView> 
        
        <SafeAreaView style={styles.line}></SafeAreaView>
        <SafeAreaView style={styles.groupe34}>
        {images && (
        <Image
              source={{ uri: images }}
              style={{ width: 100, height: 100 }}
            />
          )}
        </SafeAreaView>
        
        
        
        </ScrollView>
    );
}
const styles=StyleSheet.create({
  percentage: {
    marginBottom: 10,
  },
  result: {
    paddingTop: 5,
  },
  info: {
    textAlign: "center",
    marginBottom: 20,
  },
    subtitle1:{fontSize:17,
        color:colors.white, 
        alignSelf:'center'
        
    },
    connection:{
        flexDirection:'row', 
        marginTop:80, 
        gap:17, 
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop:22, 
        gap:17
      },
    bouton:{
        backgroundColor:colors.primary, 
        alignItems:'center', 
        justifyContent:'center'
    },
    checkbox: {
        
        borderRadius:5,
      },
      checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
    groupe31:{
      display:"flex",
      width:"100%",
      left:'40%'
        
    },
    subtitle:{
        fontSize:17,
        left:5,
        color:colors.white
    },subtitle1:{
      fontSize:17,
      left:5,
      color:colors.white
  },
    background:{
        flex:1,
       backgroundColor:  colors.primary
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
    groupe32:{
        display:"flex",
        flexDirection:'row',  
        position:'relative', 
        marginTop:5, 
       justifyContent:'center'
    }, 
    groupe33:{
        display:"flex",
        flexDirection:'row',  
        position:'relative', 
        justifyContent:'space-around',
        marginTop:10,   
    },groupe35:{
      display:"flex",
      flexDirection:'row',  
      position:'relative', 
      justifyContent:'center',
      marginTop:15,
      width:'50%'   
  },
    group7:{
        alignContent:'flex-start', 
        borderRadius:5, 
        display:'flex', 
        height:170, 
        right:19,
        top:7,
        width:'95%',
        backgroundColor:colors.white
    },
    group8:{
        alignContent:'center', 
        alignSelf:'center',
        borderRadius:5, 
        display:'flex', 
        height:37, 
        right:20,
       backgroundColor:'#545454',
        width:'19%'
    }, 
    inputstyle:{
        color:colors.black,
        paddingHorizontal:20, 
        paddingVertical:12, 
        minHeight:19, 
        height:170,
        fontSize:17,
        color:colors.black, 
    } ,groupe34:{
        display:"flex",
        flexDirection:'column',  
        left:30, 
        position:'relative', 
      
        marginTop:15, 
    },container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
      },
      buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
      },line: {
        height:1.5,
        width:'100%',
        backgroundColor:colors.black, 
        position:'relative',
        
        
    }
});
export default Newpost;