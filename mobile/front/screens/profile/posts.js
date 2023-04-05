import React, {useState} from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Image} from 'react-native';
import colors from '../../config/colors';
import { Pressable } from "react-native";
import {  SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
function Posts({navigation}) {
    const styles= StyleSheet.create({
        containerPost:{
            flexDirection:'column',
            justifyContent:'space-around', 
           
            
        }, 
    
        subtitle:{
            fontSize:15,
            alignSelf:'center', 
            justifyContent:'center', 
            left:5
            
        },
        subtitle1:{
            fontSize:15,
            alignSelf:'center', 
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center', 
            top:'7%',
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
        rectangle4:{
            backgroundColor:colors.white, 
            borderRadius:5,
            width:'95%',
            height:235, 
            top:'2%', 
            position:'relative', 
            marginTop:15, 
            alignSelf:'center'
    
        }
        ,
        background:{
            flex:1,
           backgroundColor:  colors.primary ,
           height:'150%'
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
            top:10,
            width:'70%', 
            alignItems:'center',
            justifyContent:'flex-start',
            flexDirection:'row', 
            
        },
        groupe30:{
            
            width:'100%',
             top:'2%',
            alignSelf:'center',
            justifyContent:'space-between',
            flexDirection:'column', 
            
        },
        groupe15:{
            top:'8%',
            width:'25%', 
            position:'relative',
            alignSelf:'center',
            justifyContent:'space-between',
            flexDirection:'row', 
            
        },
        groupe16:{
            top:'7%',
            width:'90%', 
            position:'relative',
            alignSelf:'center',
            justifyContent:'space-between',
            flexDirection:'row', 
            
        },
        groupe18:{
            top:'11%',
            width:'90%', 
            position:'relative',
            alignSelf:'center',
            justifyContent:'space-between',
            flexDirection:'row', 
            
        },
        groupe17:{
            top:'5%',
            width:'20%', 
            position:'relative',
            alignSelf:'center',
            justifyContent:'space-around',
            flexDirection:'row', 
            
        },
        groupe14:{
            left:'10%',
            width:'40%', 
            alignSelf:'center',
            justifyContent:'space-around',
            flexDirection:'row', 
            
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
            backgroundColor:'#05ff00', 
            borderRadius:50,
            width:'13%', 
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
            top:'70%'
            
        }
    });
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [liked1, setLiked1] = useState(false);
    const [disliked1, setDisliked1] = useState(false);
    const [liked2, setLiked2] = useState(false);
    const [disliked2, setDisliked2] = useState(false);
    const [liked3, setLiked3] = useState(false);
    const [disliked3, setDisliked3] = useState(false);
    return (
        <View style={styles.background}>
        <Text style={styles.compte}>Home</Text>
        <View style={styles.rectangle3}>
            <Text style={styles.subtitle}>Tous</Text>
            <Text style={styles.subtitle}>Problèmes</Text>
            <Text style={styles.subtitle}>Suggestions</Text>
            <Text style={styles.subtitle}>Expériences</Text>
            <Text style={styles.subtitle}>Compliments</Text>
        </View>
        <ScrollView contentContainerStyle={styles.containerPost}>
            
        <View style={styles.rectangle4}>
            <SafeAreaView style={styles.groupe13}>
            <Image style={styles.masqueImage} source={require('../../assets/nb.jpg')}/>
            <SafeAreaView >
                <Pressable  onPress={()=> navigation.navigate("Profile")}><Text style={styles.name}>Boutheyna NOURI</Text></Pressable>
            
            <Text style={styles.subtitle}>15 nov 2022   15:02</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.groupe14}>
                <SafeAreaView style={styles.ellipse}>
                <Text></Text>
            </SafeAreaView>
            <Text style={styles.subtitle}>Compliment</Text>
            </SafeAreaView>
            
            </SafeAreaView>
        
                    
            <Text style={styles.subtitle1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco
 laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <SafeAreaView style={styles.groupe30}>
      <SafeAreaView style={styles.groupe16}>
        <SafeAreaView style={styles.groupe17}>
        <SimpleLineIcons name="like" size={20}><Text style={styles.subtitle}>50</Text></SimpleLineIcons>
        <SimpleLineIcons name="dislike" size={20}><Text style={styles.subtitle}>4</Text></SimpleLineIcons>
        </SafeAreaView>
        <Text style={styles.subtitle}>45 commentaires</Text>
        </SafeAreaView>
       
        <SafeAreaView style={styles.line}></SafeAreaView>
        
        <SafeAreaView style={styles.groupe18}>
        <SafeAreaView style={styles.groupe15}>
    <Pressable onPress={() => 
        setLiked((isLiked) => !isLiked)}>
      <SimpleLineIcons name="like" size={25} color={liked ? colors.primary : "black"} />
    </Pressable>
    <Pressable onPress={() => setDisliked((isLiked) => !isLiked)}>
    
      <SimpleLineIcons name="dislike" size={25} color={disliked ? colors.primary : "black"} />
    </Pressable>
    </SafeAreaView>
    <Pressable>
    <FontAwesome5 name="comment" size={24} color="black" > <Text style={styles.subtitle}>Commenter</Text></FontAwesome5> 
    </Pressable>
    </SafeAreaView>
    </SafeAreaView>
        </View>
        <View style={styles.rectangle4}>
        <SafeAreaView style={styles.groupe13}>
            <Image style={styles.masqueImage} source={require('../../assets/nb.jpg')}/>
            <SafeAreaView >
            <Text style={styles.name}>Manel NOURI</Text>
            <Text style={styles.subtitle}>1 dec 2022   13:12</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.groupe14}>
                <SafeAreaView style={styles.ellipse1}>
                <Text></Text>
            </SafeAreaView>
            <Text style={styles.subtitle}>Problème</Text>
            </SafeAreaView>
            
            </SafeAreaView>
        
                    
            <Text style={styles.subtitle1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco
 laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <SafeAreaView style={styles.groupe30}>
      <SafeAreaView style={styles.groupe16}>
        <SafeAreaView style={styles.groupe17}>
        <SimpleLineIcons name="like" size={20}><Text style={styles.subtitle}>50</Text></SimpleLineIcons>
        <SimpleLineIcons name="dislike" size={20}><Text style={styles.subtitle}>4</Text></SimpleLineIcons>
        </SafeAreaView>
        <Text style={styles.subtitle}>45 commentaires</Text>
        </SafeAreaView>
       
        <SafeAreaView style={styles.line}></SafeAreaView>
        
        <SafeAreaView style={styles.groupe18}>
        <SafeAreaView style={styles.groupe15}>
    <Pressable onPress={() => setLiked1((isLiked) => !isLiked)}>
      <SimpleLineIcons name="like" size={25} color={liked1 ? colors.primary : "black"} />
    </Pressable>
    <Pressable onPress={() => setDisliked1((isLiked) => !isLiked)}>
    
      <SimpleLineIcons name="dislike" size={25} color={disliked1 ? colors.primary : "black"} />
    </Pressable>
    </SafeAreaView>
    <Pressable onPress={()=> navigation.navigate("Profile")}>
    <FontAwesome5 name="comment" size={24} color="black" > <Text style={styles.subtitle}>Commenter</Text></FontAwesome5> 
    </Pressable>
    </SafeAreaView>
    </SafeAreaView>
        </View>
        <View style={styles.rectangle4}>
        <SafeAreaView style={styles.groupe13}>
            <Image style={styles.masqueImage} source={require('../../assets/nb.jpg')}/>
            <SafeAreaView >
            <Text style={styles.name}>John LEE</Text>
            <Text style={styles.subtitle}>15 nov 2022   15:02</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.groupe14}>
                <SafeAreaView style={styles.ellipse}>
                <Text></Text>
            </SafeAreaView>
            <Text style={styles.subtitle}>Compliment</Text>
            </SafeAreaView>
            
            </SafeAreaView>
        
                    
            <Text style={styles.subtitle1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco
 laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <SafeAreaView style={styles.groupe30}>
      <SafeAreaView style={styles.groupe16}>
        <SafeAreaView style={styles.groupe17}>
        <SimpleLineIcons name="like" size={20}><Text style={styles.subtitle}>50</Text></SimpleLineIcons>
        <SimpleLineIcons name="dislike" size={20}><Text style={styles.subtitle}>4</Text></SimpleLineIcons>
        </SafeAreaView>
        <Text style={styles.subtitle}>45 commentaires</Text>
        </SafeAreaView>
       
        <SafeAreaView style={styles.line}></SafeAreaView>
        
        <SafeAreaView style={styles.groupe18}>
        <SafeAreaView style={styles.groupe15}>
    <Pressable onPress={() => setLiked3((isLiked) => !isLiked)}>
      <SimpleLineIcons name="like" size={25} color={liked2 ? colors.primary : "black"} />
    </Pressable>
    <Pressable onPress={() => setDisliked2((isLiked) => !isLiked)}>
    
      <SimpleLineIcons name="dislike" size={25} color={disliked2 ? colors.primary : "black"} />
    </Pressable>
    </SafeAreaView>
    <Pressable onPress={()=> navigation.navigate("Profile")}>
    <FontAwesome5 name="comment" size={24} color="black" > <Text style={styles.subtitle}>Commenter</Text></FontAwesome5> 
    </Pressable>
    </SafeAreaView>
    </SafeAreaView>
        </View>
        <View style={styles.rectangle4}>
        <SafeAreaView style={styles.groupe13}>
            <Image style={styles.masqueImage} source={require('../../assets/nb.jpg')}/>
            <SafeAreaView >
            <Text style={styles.name}>Assil NOURI</Text>
            <Text style={styles.subtitle}>15 nov 2022   15:02</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.groupe14}>
                <SafeAreaView style={styles.ellipse}>
                <Text></Text>
            </SafeAreaView>
            <Text style={styles.subtitle}>Compliment</Text>
            </SafeAreaView>
            
            </SafeAreaView>
        
                    
            <Text style={styles.subtitle1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
 eiusmod tempor incididunt ut labore et dolore magna aliqua.
 Ut enim ad minim veniam, quis nostrud exercitation ullamco
 laboris nisi ut aliquip ex ea commodo consequat.</Text>
    <SafeAreaView style={styles.groupe30}>
      <SafeAreaView style={styles.groupe16}>
        <SafeAreaView style={styles.groupe17}>
        <SimpleLineIcons name="like" size={20}><Text style={styles.subtitle}>50</Text></SimpleLineIcons>
        <SimpleLineIcons name="dislike" size={20}><Text style={styles.subtitle}>4</Text></SimpleLineIcons>
        </SafeAreaView>
        <Text style={styles.subtitle}>45 commentaires</Text>
        </SafeAreaView>
       
        <SafeAreaView style={styles.line}></SafeAreaView>
        
        <SafeAreaView style={styles.groupe18}>
        <SafeAreaView style={styles.groupe15}>
    <Pressable onPress={() => setLiked3((isLiked) => !isLiked)}>
      <SimpleLineIcons name="like" size={25} color={liked3 ? colors.primary : "black"} />
    </Pressable>
    <Pressable onPress={() => setDisliked3((isLiked) => !isLiked)}>
    
      <SimpleLineIcons name="dislike" size={25} color={disliked3 ? colors.primary : "black"} />
    </Pressable>
    </SafeAreaView>
    <Pressable onPress={()=> navigation.navigate("Profile")}>
    <FontAwesome5 name="comment" size={24} color="black" > <Text style={styles.subtitle}>Commenter</Text></FontAwesome5> 
    </Pressable>
    </SafeAreaView>
    </SafeAreaView>
        </View>
        </ScrollView>
        </View> 
    );
}

export default Posts;