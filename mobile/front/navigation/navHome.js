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
function NavHome({route}) {
    const Stack = createNativeStackNavigator();
    //console.log(route)
    var id=route.params.tous
    return (
      <Stack.Navigator initialRouteName='All'  screenOptions={{headerShown:false}}>
        <Stack.Screen name="All" component={Posts} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Problèmes" component={PosProblèmes} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Suggestions" component={PosSuggestions} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Compliments" component={PosCompliments} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
        <Stack.Screen name="Expériences" component={PosExperiences} initialParams={{tous:id}} options={{gestureEnabled: false}}/>
       <Stack.Screen name="commentaires" initialParams={{tous:id}} component={Comment} />
       <Stack.Screen name="newpost" initialParams={{tous:id}} component={Newpost} />
        <Stack.Screen name="Feed" initialParams={{tous:id}} component={Feed} />
      
         </Stack.Navigator>
    );
    }
export default NavHome;