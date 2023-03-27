import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Myprofile from './front/screens/profile/myprofile';
import Welcome from './front/screens/Welcome';
import Signup from './front/screens/auth/signup/signup';
export default function App() {
  //const fetchApi = async () =>{
  //  try {
   //   const res = await axios.get('http://192.168.1.7:5000/citoyens');
   //   console.log(res.data);
   // } catch (error) {
   //   console.log(error.message);
   // }
  //};
  //useEffect (() => {
   // fetchApi();
  //}, []);
  const [backendData, setBackendData]=useState([{}])
  useEffect (()=>{
    fetch("http://192.168.1.7:5000/citoyens").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
 <Signup/>
  )
}
;
