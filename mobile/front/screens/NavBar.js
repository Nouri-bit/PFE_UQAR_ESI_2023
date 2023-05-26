import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BackHandler, Pressable } from 'react-native';
import {Alert} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import colors from '../config/colors';
// Screens
import Declarations from './profile/declarations'
import Myprofile from './profile/myprofile';
import Sondages from './profile/sondages'
import Maps from './profile/maps'
import Animated from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect } from 'react';
import plus from '../assets/plus.png'
import 'react-native-gesture-handler';
import NavHome from '../navigation/navHome';
import NavDeclaration from '../navigation/navDeclaration';
import NavSondage from '../navigation/navSondage';
import NavProfile from '../navigation/navProfile';
import NavMap from '../navigation/navMap';
//Screen names
const homeName = "Home";
const ProfileName = "Profile";
const sondageName= "Sondage"; 
const declarationName="Declaration";
const mapName= "Map";
//const settingsName = "Settings";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function NavBar({navigation,route}) {

 // console.log(route.params.params.id)
 var id=route.params.params
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  function getWidth() {
    let width = Dimensions.get("window").width
  
    // Horizontal Padding = 20...
    width = width - 80
  
    // Total five Tabs...
    return width / 5
  }
  return (
     
      <Tab.Navigator
        initialRouteName={ProfileName}
        
        screenOptions={
          {
            headerShown:false, 
            tabBarShowLabel:false, 
            tabBarStyle: {
              backgroundColor: 'white',
              position: 'absolute',
              borderTopColor: colors.primary, 
              // Max Height...
              height: 60,
              borderTopEndRadius: 10
              ,
              borderTopLeftRadius: 10,
              borderTopWidth: 0.5,
              
              // Shadow...
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10
              },
              paddingHorizontal: 20,
            }
        }}
        >

          <Tab.Screen name={declarationName}  component={NavDeclaration} initialParams={{tous:id}} options={{
           
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              
            }}>
              <Ionicons
                name="md-newspaper-outline"
                size={25}
                color={focused ? colors.primary : 'gray'}
              ></Ionicons>
            </View>
          )
        }} 
        listeners={({ navigation, route }) => ({
              //id:route.params.id,
              
          // Onpress Update....
               
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
          <Tab.Screen name={sondageName} initialParams={{tous:id}} component={NavSondage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              
            }}>
              <Ionicons
                name="md-stats-chart-outline"
                size={25}
                color={focused ? colors.primary : 'gray'}
              ></Ionicons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={homeName} component={NavHome} initialParams={{tous:id}} options={{
          tabBarIcon: ({ focused }) => (

              <View style={{
                width: 55,
                height: 55, 
                backgroundColor: colors.primary,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
               
                marginBottom: Platform.OS == "android" ? 50 :30
              }}>
                  <Ionicons
                name="md-home-outline"
                size={27}
                color={focused ? colors.white : 'gray'}
              ></Ionicons>
              </View>
          )
        }} listeners={({ navigation }) => ({
          // Onpress Update...
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth()*2,
              useNativeDriver: true
            }).start();
          }
        })}/>
        <Tab.Screen name={mapName} component={NavMap} initialParams={{tous:id}} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              
            }}>
              <Ionicons
                name="md-location-outline"
                size={27}
                color={focused ? colors.primary : 'gray'}
              ></Ionicons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={ProfileName} component={Myprofile} initialParams={{tous:id}} options={{
        
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
             
            }}>
              <FontAwesome5
                name="user-alt"
                size={24}
                color={focused ? colors.primary : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        
      </Tab.Navigator>
      
  );
}

export default NavBar;