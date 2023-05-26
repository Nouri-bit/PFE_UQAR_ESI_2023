import React, { Component } from 'react';
import colors from '../../config/colors';
import {
  StyleSheet,
  Text,
  View, Button, SafeAreaView
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { withNavigation } from 'react-navigation';
class Cal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }
  goToComponent(){
   // (startDate!=null)?DateD=startDate:DateD=null 
  // var DateD= JSON.stringify(navigation.getParam('DateD', 'test'))
    this.props.navigation.push('allmap', {DateD: 1})
 }
  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate =  new Date(2023, 1, 1); // Today
    const maxDate = new Date();
    const startDate  =  selectedStartDate ? selectedStartDate : null;
    const endDate = selectedEndDate ? selectedEndDate : null;
     //var { DateD, DateF} = this.props.navigation.state.params;
    // var DateD=startDate;
     DateF=null;
    return (
        <View style={styles.background}>
        <Text style={styles.compte}>Tranche de temps</Text>
         <SafeAreaView style={styles.groupe31}>
        <SafeAreaView style={styles.group8}>
            <Button  onPress={()=>this.props.navigation.push('allmap', {DateD: startDate, DateF:endDate})} color={colors.white}  title="Suivant"/>
        </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={styles.groupe31} >
        <SafeAreaView style={styles.group88}>
            </SafeAreaView>
        </SafeAreaView>
        <View style={styles.rectangle27}>

        
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor={colors.primary}
          selectedDayColor={colors.secondary}
          selectedDayTextColor={colors.black}
          onDateChange={this.onDateChange}
        />
</View>
        
      </View>
    );
  }
}

const styles= StyleSheet.create({
    rectangle27:{
        backgroundColor:colors.white,
        borderRadius:16,
        shadowColor:"#4b4b26",
        
        alignSelf:'center',
        
        width:'97%'
    },
    groupe31:{
        display:"flex",
        width:"100%",
        left:'40%'
          
      },
    group8:{
        alignContent:'center', 
        alignSelf:'center',
        borderRadius:5, 
        display:'flex', 
        height:37, 
        right:20,
        width:'19%'
    }, 
    group88:{
        alignContent:'center', 
        alignSelf:'center',
        borderRadius:5, 
        display:'flex', 
        height:80, 
        right:20,
        width:'19%'
    },
    containerPost:{
        flexDirection:'column',
        justifyContent:'space-around', 
        marginBottom:30,
        
    }, 

    subtitle:{
        fontSize:15,
        alignSelf:'center', 
        justifyContent:'center', 
      
        
    },
    subtitlen:{
        fontSize:13,
        left:5
        
    },
    subtitle1:{
        fontSize:15,
        alignSelf:'center', 
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center', 
        
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
    rectangle5:{
        backgroundColor:colors.white, 
        marginVertical:30,
        width:'100%',
        position:'relative', 
        marginTop:50,
        alignSelf:'center'

    },
    rectangle4:{
        backgroundColor:colors.white, 
        borderRadius:5,
        width:'95%',
        position:'relative', 
        marginTop:15, 
        alignSelf:'center'

    }
    ,
    background:{
        flex:1,
       backgroundColor:  colors.primary ,
       height:'250%'
       
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
        
        width:'70%', 
        alignItems:'center',
        justifyContent:'flex-start',
        flexDirection:'row', 
        position:'relative',
        height:70
    },
    groupe30:{
        height:100, 
        bottom:'5%',
        width:'100%',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'column', 
        position:'relative'
      
    },
    groupe15:{
        width:'25%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe16:{
        top:'5%',
        width:'90%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe18:{
        width:'90%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-between',
        flexDirection:'row', 
        
    },
    groupe17:{
        width:'20%', 
        position:'relative',
        alignSelf:'center',
        justifyContent:'space-around',
        flexDirection:'row', 
        
    },
    groupe14:{
        left:10,
        flexDirection:'row', 
        
    },
    groupe144:{
        width:95,
        flexDirection:'column', 
        justifyContent:'space-between'
        
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
        borderRadius:50,
        width:'14%', 
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
        top:'10%'
        
    }
});
export default withNavigation(Cal);