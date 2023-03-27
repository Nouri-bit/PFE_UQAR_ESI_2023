import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
function Welcome() {
    return (
        <View style={styles.background}>
            <Text>LOGO</Text>
            </View>
    );
}
const styles =  StyleSheet.create({
    background: {
      flex:1, 
      backgroundColor: colors.primary, 
      justifyContent:'center',
      alignItems:'center'

      
  },
  login: {
   width: '10%', 
   height:'10%', 
  }
});
export default Welcome;