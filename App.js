import React,{useState,createContext,useContext} from 'react'

import {View,Text,StyleSheet,Dimensions} from 'react-native'

import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'

import {NavigationContainer} from '@react-navigation/native'

import {faHeadphones,faVideo,faPlaceOfWorship,faPhone,faUser,faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'



import {Main} from './main'

import {SecondPage} from './secondpage'

import {Podcast} from './podcast'

import {Work} from './work'

import Videos from './videos'


import {Intouch} from './intouch'


const {width,height}=Dimensions.get("window")

const Drawer=createDrawerNavigator()




function CustomDrawerNavigator(props){

 

  return(
    <DrawerContentScrollView {...props} style={{backgroundColor:'black'}}>
      <DrawerItemList {...props}>
        <DrawerItem>
label="Close Drawer"
onPress={
  ()=>props.navigation.closeDrawer()
}
        </DrawerItem>


        <DrawerItem>
label="Toggle Drawer"
onPress={
  ()=>props.navigation.toggleDrawer()
}
        </DrawerItem>
      </DrawerItemList>
    </DrawerContentScrollView>
  )
}

export default class App extends React.Component {


  render(){
  return (
 <NavigationContainer >

<Drawer.Navigator 

drawerContentOptions={{
  activeTintColor:'red',
  inactiveTintColor:'white',
activeBackgroundColor:'black',



}}

drawerStyle={{
backgroundColor:'blue',
width:width*0.50,
color:'white',
borderRightColor:'white',
borderWidth:1
}}

drawerContent={
  props =>CustomDrawerNavigator(props)
} initialRouteName="home" >

  <Drawer.Screen
  name="home"
  options={{drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faUser} color={focused?'red':'white'} size={12}  />

  }  
  }}
  component={Main}/>

<Drawer.Screen
  name="about" component={SecondPage}
  
  options={{drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faInfoCircle} color={focused?'red':'white'} size={12}  />

  }  
  }}
  
  />

<Drawer.Screen
  name="work" 
  
  options={{drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faPlaceOfWorship} color={focused?'red':'white'} size={12}  />

  }  
  }}
  
  component={Work}/>



<Drawer.Screen
  name="latest videos" component={Videos}
  options={{drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faVideo} color={focused?'red':'white'} size={12}  />

  }  
  }}
  
  />

<Drawer.Screen
  name="podcast" component={Podcast}
  options={{drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faHeadphones} color={focused?'red':'white'} size={12}  />

  }  
  }}
  
  />

<Drawer.Screen
  name="contact" component={Intouch}
  
  options={{drawerIcon:({focused})=>{
    return  <FontAwesomeIcon icon={faPhone} color={focused?'red':'white'} size={12}  />

  }  
  }}
  
  />




</Drawer.Navigator>


 </NavigationContainer>



    )
}
}



const style=StyleSheet.create({})






