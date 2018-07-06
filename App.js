import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {createMaterialTopTabNavigator} from "react-navigation";
import Allnews from './screens/Allnews';
import Bbc from'./screens/Bbc';
import Cnn from './screens/Cnn';
import Time from './screens/Time';



export default class App extends Component {
  render() {
    return (
      <View style ={{flex:1, backgroundColor:'white'}}>
           <View style ={{flexDirection:'row', backgroundColor:'#01579B', justifyContent:'space-between', alignItems:'center', height:70, width:'100%'}}>
             <Icon name = "menu" size ={30} color= 'white'  onPress={() => {
              alert("Welcome to Menu");
            }}/>
             <Text style ={{fontSize:20,fontFamily:'bold', color:'white'}}> NEWS 24 </Text>
            < Icon name ="more-vert" size= {30} color='white'/>
           </View>
          <Tabnav />
      </View>
    );
  }
}

const Tabnav = createMaterialTopTabNavigator({
  NEWS: {screen: Allnews},
  BBC: {screen: Bbc},
  Cnn: {screen:Cnn},
  Time:{screen:Time}

});


