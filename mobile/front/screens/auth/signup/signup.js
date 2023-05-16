import React, {useState, useEffect, Component} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../../config/colors';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native';
import { Alert } from 'react-native';
import Animated from 'react-native-reanimated';
function Signup({navigation, route}) {
    const [isChecked, setChecked] = useState(false);
    const [isSelected, setSelection] = useState(false);
   //const [backendData, setBackendData]=useState({})
   var backendData={};
  Press=() =>{
    Alert.alert('Success');
   }
    const [Email, setMail] = useState("");
    const [Mdp, setMdp] = useState("");
    const [Telephone, setTelephone] = useState("");
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    let Like= (nom, prenom, mail, telephone, mdp)=>{
       
        resultat= fetch("http://192.168.1.7:5000/citoyens/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({nom: nom, prenom:prenom, mail : mail, telephone: telephone, mdp:mdp})
          })
          .then( response => response.json()).then(
            data => {
             
                backendData={...backendData, data}
              console.log(backendData.data) 
              if(backendData.data.message==="Utilisateur créé avec succès"){
               navigation.navigate("Reste",{Email: Email})
               // Alert.alert("Utilisateur créé avec succès");
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
         <Text style={styles.compte}>Créer un compte</Text>
         <ScrollView contentContainerStyle={styles.rectangle27}>
         <SafeAreaView style={styles.groupe32}>
            <Text style={styles.subtitle}>Nom</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle} value={Nom} onChangeText={(text) => setNom(text)} keyboardType="default" enterKeyHint="done" placeholder="Entrez Votre Nom" />
            </SafeAreaView>
        </SafeAreaView> 
        <SafeAreaView style={styles.groupe32}>
            <Text style={styles.subtitle}>Prénom</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle} value={Prenom} onChangeText={(text) => setPrenom(text)} keyboardType="default" enterKeyHint="done" placeholder="Entrez Votre Prénom" />
            </SafeAreaView>
        </SafeAreaView> 
        <SafeAreaView style={styles.groupe32}>
            <Text style={styles.subtitle}>Adresse Email</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle} value={Email} onChangeText={(text) => setMail(text)} keyboardType="email-address" enterKeyHint="done" placeholder="Entrez Votre Email" />
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <Text style={styles.subtitle}>Numéro de Téléphone</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle} value={Telephone} onChangeText={(text) => setTelephone(text)} keyboardType="phone-pad" enterKeyHint="done" placeholder="Entrez Votre Numéro de Téléphone"  />
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <Text style={styles.subtitle}>Mot de Passe</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput  placeholder="Veuillez Entrer Votre Mot de Passe" value={Mdp} onChangeText={(text) => setMdp(text)} style={styles.inputstyle}  enterKeyHint="done"  secureTextEntry={true} />
        </SafeAreaView>
         </SafeAreaView>
         <SafeAreaView style={styles.groupe32}>
        <Text style={styles.subtitle}>Confirmer Votre Mot de Passe</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput  placeholder="Veuillez Confirmer Votre Mot de Passe" style={styles.inputstyle}  enterKeyHint="done"  secureTextEntry={true} />
        </SafeAreaView>
         </SafeAreaView>
         <SafeAreaView style={styles.groupe33}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? colors.black : undefined}
        />
        <Text style={styles.subtitle2}>Reppelez-Vous de Moi</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.group8}>
            <Button onPress={()=>Like(Nom, Prenom, Email, Telephone, Mdp)} color={colors.white}  title="S'inscrire"/>
           </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.connection}>
            <Text style={styles.subtitle1}>Vous avez déjà un compte? </Text>
            <Button onPress={() => navigation.navigate("Login")} title='Se connecter' color={colors.primary} style={styles.bouton}/>
        </SafeAreaView>
        </SafeAreaView>
       
        </ScrollView>
        </View>
      
    );
}

const styles=StyleSheet.create({
    subtitle1:{fontSize:17,
        color:colors.secondary, 
        alignSelf:'center'
        
    },
    connection:{
        flexDirection:'row',
        top:'15%'
        
        
       
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
    subtitle2:{
        fontSize:15,
    },
    background:{
        flex:1,
       backgroundColor:  colors.primary
    }, 
    rectangle27:{
        backgroundColor:colors.white,
        borderRadius:16,
        shadowColor:"#4b4b26",
        height:'130%',
        alignSelf:'center',
        position:'absolute',
        
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
        top:'5%',
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
    inputstyle:{
        color:colors.black,
        paddingHorizontal:20, 
        paddingVertical:12, 
        minHeight:19, 
        fontSize:17,
    }
});
export default Signup;