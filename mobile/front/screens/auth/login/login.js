import React, {useState, useEffect, Component} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../../config/colors';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native';
import { Alert } from 'react-native';

import Animated from 'react-native-reanimated';
  
function Login({navigation}) {
    const [isChecked, setChecked] = useState(false);
    const [isSelected, setSelection] = useState(false);
    
    //var [backendData, setBackendData]=useState({})
    var backendData = {}
        //setBackendData(backendData=null);
  Press=() =>{
    Alert.alert('Success');
   }
    const [Email, setMail] = useState("");
    const [Mdp, setMdp] = useState("");
    let Like= (mail, mdp)=>{
       
      resultat= fetch(colors.IP+"citoyens/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
              },
              body: JSON.stringify({mail : mail, mdp:mdp}) 
        })
        .then( response => response.json()).then(
          data => {
           
           
            backendData={...backendData, data}
            if(backendData.data.message==="Accès réussi"){ 
              //console.log("c boooooooooooon")
              navigation.navigate("NavBar",{screen:"Home",  params:{ id:backendData.data.idcitoyen, TOKEN:backendData.data.token}})
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
         <Text style={styles.compte}>Se Connecter</Text>
         
        <SafeAreaView style={styles.groupe32}>
            <Text style={styles.subtitle}>Email</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle}  value={Email} onChangeText={(text) => setMail(text)} keyboardType="email-address" enterKeyHint="done" placeholder="test@gmail.com" />
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <Text style={styles.subtitle}>Mot de Passe</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput  placeholder="Veuillez Entrer Votre Mot de Passe" value={Mdp} onChangeText={(text) => setMdp(text)} style={styles.inputstyle}  enterKeyHint="done"  secureTextEntry={true} />
        </SafeAreaView>
         </SafeAreaView>
         <SafeAreaView style={styles.groupe32}>
         <SafeAreaView style={styles.groupe33}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.black : undefined}
        />
        <Text style={styles.subtitle}>Reppelez-Vous de Moi</Text>
        </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.group8}>
            <Button onPress={()=>Like(Email,Mdp) } color={colors.white}  title="Se connecter"/>
           </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.connection}>
            <Text style={styles.subtitle1}>Vous n'avez pas de compte? </Text>
            <Button onPress={() => navigation.navigate("Details")} title="S'inscrire" color={colors.black} style={styles.bouton}/>
        </SafeAreaView>
        </SafeAreaView>
        </View>
      
    );
}
const styles=StyleSheet.create({
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
        gap:17, 
        marginTop:22, 
        
    },
    subtitle:{
        fontSize:17,
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
        flexDirection:'column',  
        left:30, 
        position:'relative', 
        top:'30%',
        marginTop:15, 
    }, 
    groupe33:{
        display:"flex",
        flexDirection:'row',  
        position:'relative', 
        marginTop:15, 
    },
    group7:{
        alignContent:'flex-start', 
        borderRadius:5, 
        display:'flex', 
        height:50, 
        right:19,
        top:7,
        backgroundColor:colors.white,
        width:'95%'
    },
    group8:{
        alignContent:'center', 
        alignSelf:'center',
        borderRadius:5, 
        display:'flex', 
        height:40, 
        right:20,
        top:15,
        backgroundColor:colors.black,
        width:'30%'
    }, 
    inputstyle:{
        color:colors.black,
        paddingHorizontal:20, 
        paddingVertical:12, 
        minHeight:19, 
        fontSize:17,
    }
});

export default Login;