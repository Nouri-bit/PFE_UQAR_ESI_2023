import React from 'react';
import { Image, Text, View, StyleSheet, SafeAreaView, Button, Alert, Icon } from 'react-native';
import colors from '../../config/colors'

function Myprofile() {
    return (
        
            
            <View style={styles.background}>
                  <View>
                  <Text style={styles.compte}>Compte</Text>
                  </View>
                    
                <SafeAreaView style={styles.rectangle27}>
                    
                    <SafeAreaView style={styles.groupe13}>
                        <Image style={styles.masqueImage} source={require('../../assets/nb.jpg')}/>
                        <Text style={styles.name}>Boutheyna Nouri</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.line}></SafeAreaView>
                    <SafeAreaView style={styles.groupe32}>
                     <Text style={styles.subtitle1}>Paramètres du compte</Text>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>Modifier le profile</Text>
                     </SafeAreaView>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>Changer le mot de passe</Text>
                     </SafeAreaView>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>Poussez les notifications</Text>
                     </SafeAreaView>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>Mode sombre</Text>
                     </SafeAreaView>
                    </SafeAreaView>
                    <SafeAreaView style={styles.groupe32}>
                     <Text style={styles.subtitle1}>Plus</Text>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>A propos de nous</Text>
                     </SafeAreaView>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>Politique de confidentialité</Text>
                     </SafeAreaView>
                     <SafeAreaView style={styles.groupe31}>
                        <Text style={styles.subtitle}>Termes et conditions</Text>
                     </SafeAreaView>
                    </SafeAreaView>
                </SafeAreaView>
               
                
        </View>
            
        
    );
}
const styles = StyleSheet.create({
    background:{
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
        height:70,
        borderRadius:50, 
        width:70, 
        marginLeft:'7%', 

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
        top:'18%',
        marginTop:15, 
    }, 
    groupe31:{
        gap:17, 
        marginTop:22, 
        
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
export default Myprofile;