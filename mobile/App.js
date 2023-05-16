import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import Myprofile from './front/screens/profile/myprofile';
import Signup from './front/screens/auth/signup/signup';
import Login from './front/screens/auth/login/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Posts from './front/screens/profile/posts';
import Newpost from './front/screens/profile/newpost';
import NavBar from './front/screens/NavBar';
import Navi from './front/navigation/navi';
import Formulaire from './front/screens/profile/formulaire';
import Restesignup from './front/screens/auth/signup/restesignup';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<Navi/>
  );
  }

;
