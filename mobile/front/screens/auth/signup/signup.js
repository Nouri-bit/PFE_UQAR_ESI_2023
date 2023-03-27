import React, {useState, useEffect, Component} from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import colors from '../../../config/colors';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native';
import { Alert } from 'react-native';


function Signup() {
    const [isChecked, setChecked] = useState(false);
    const [isSelected, setSelection] = useState(false);
    
    const [backendData, setBackendData]=useState({})
 
  Press=() =>{
    Alert.alert('Success');
   }
    const [Email, setMail] = useState("");
    const [Mdp, setMdp] = useState("");
    const [Telephone, setTelephone] = useState("");
   let TEST = (mail, telephone, mdp)=> {
    const R = {idcitoyen:'00005', mail : mail,telephone: telephone, mdp:mdp};
   
           resultat= fetch("http://192.168.1.7:5000/citoyens/signup", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({mail : mail, telephone: telephone, mdp:mdp})
          })
          .then(res => {
           
            affichage = res.json("message");
            return affichage;
          }).then(
            data => {
              setBackendData(data); 
              Alert.alert(backendData.message);
              console.log(backendData);
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
     
        <View style={styles.background}>
         <Text style={styles.compte}>Créer un compte</Text>
         <SafeAreaView style={styles.rectangle27}>
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
        <Text style={styles.subtitle}>Reppelez-Vous de Moi</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.group8}>
            <Button onPress={()=>TEST(Email, Telephone, Mdp)} color={colors.white}  title="S'inscrire"/>
           </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <SafeAreaView style={styles.connection}>
            <Text style={styles.subtitle1}>Vous avez déjà un compte? </Text>
            <Button  title='Se connecter' color={colors.primary} style={styles.bouton}/>
        </SafeAreaView>
        </SafeAreaView>
         </SafeAreaView>
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
        top:'8%',
        marginTop:15, 
    }, 
    groupe33:{
        display:"flex",
        flexDirection:'row',  
        left:30, 
        position:'relative', 
        top:'17%',
        marginTop:15, 
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