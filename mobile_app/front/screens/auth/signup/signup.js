import { text } from 'express';
import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TextInput } from 'react-native';
import Titrepage from '../../../components/titrepage';
import colors from '../../../config/colors';

function Signup() {
    return (
      
        <View style={styles.background}>
         <Text style={styles.compte}>Créer un compte</Text>
         <SafeAreaView style={styles.rectangle27}>
        <SafeAreaView style={styles.groupe32}>
            <Text style={styles.subtitle}>Adresse Email</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle} keyboardType="email-address" enterKeyHint="done">Entrez Votre Email</TextInput>
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <Text style={styles.subtitle}>Numéro de Téléphone</Text>
            <SafeAreaView style={styles.group7}>
            <TextInput style={styles.inputstyle} keyboardType="phone-pad" enterKeyHint="done">Entrez Votre Numéro de Téléphone</TextInput>
            </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe32}>
        <Text style={styles.subtitle}>Mot de Passe</Text>
            <SafeAreaView style={styles.group7}>

            <TextInput style={styles.inputstyle}  enterKeyHint="done" defaultValue="Veuillez Entrer Votre Mot de Passe" />
        </SafeAreaView>
         </SafeAreaView>
         </SafeAreaView>
        </View>
      
    );
}

const styles=StyleSheet.create({
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
        top:'15%',
        marginTop:15, 
    }, 
    group7:{
        alignContent:'flex-start', 
        borderRadius:5, 
        display:'flex', 
        height:50, 
        right:19,
        top:7,
        backgroundColor:colors.black, 
        width:'95%'
    }, 
    inputstyle:{
        color:colors.secondary,
        paddingHorizontal:20, 
        paddingVertical:12, 
        minHeight:19, 
        fontSize:17,
    }
});
 
export default Signup;