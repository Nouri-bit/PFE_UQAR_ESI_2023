import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Myprofile from '../screens/profile/myprofile';
import Signup from '../screens/auth/signup/signup';
import Login from '../screens/auth/login/login';
import Posts from '../screens/profile/posts';
import { Dimensions, Image, Platform, StyleSheet,  TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { useRef } from 'react';
import Animated from 'react-native-reanimated';
import PosProblèmes from '../screens/profile/PosProblèmes';
import PosSuggestions from '../screens/profile/PosSuggestions';
import PosCompliments from '../screens/profile/PosCompliments';
import PosExperiences from '../screens/profile/PosExperiences';
import Comment from '../screens/profile/comment';
import Feed from '../screens/profile/Feed';
import Newpost from '../screens/profile/newpost';
function NavHome() {
    const Stack = createNativeStackNavigator();
    
  
    return (
      <Stack.Navigator initialRouteName='All'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="All" component={Posts} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Problèmes" component={PosProblèmes} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Suggestions" component={PosSuggestions} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Compliments" component={PosCompliments} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Expériences" component={PosExperiences} options={{gestureEnabled: false}}/>
       <Stack.Screen name="commentaires" component={Comment} />
       <Stack.Screen name="newpost" component={Newpost} />
        <Stack.Screen name="Feed" component={Feed} />
      
         </Stack.Navigator>
    );
    }
export default NavHome;