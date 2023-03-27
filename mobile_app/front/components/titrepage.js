import { View , StyleSheet} from "react-native";
import { Component } from "react";
import colors from '../config/colors';
class  Titrepage extends Component {
   
    render() { 
        return (
            <View style={colors.background}>

            </View>
        );
    }
}
const styles=StyleSheet.create({
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
});
 
export default Titrepage;