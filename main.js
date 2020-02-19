import React,{useEffect,useState} from 'react'

import {View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity, FlatList} from 'react-native'

import {useIsDrawerOpen} from '@react-navigation/drawer'

import {Dimensions} from 'react-native'

import {faArrowRight,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'

import Home from './home'

import Second from './second'


import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

console.disableYellowBox=true

const {width,height}=Dimensions.get("window")

export  const Main=({navigation})=>{
    

const [check,setCheck] = useState(false)


  useEffect(() => {
    const unsubscribe = navigation.addListener('drawerOpen', e => {
   setCheck(true)
    });
  
    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    const unsubscribe = navigation.addListener('drawerClose', e => {
      setCheck(false)
    });
  
    return unsubscribe;
  }, [navigation]);
     

        return (
  
  <View style={{backgroundColor:'black',borderLeftColor:'white',borderWidth:1,height:height}}>
  

<View style={{justifyContent:'center',height:height*0.08}}>
<Image source= {require('./redblue.jpg')} style={{position:'absolute',height:height*0.1,width: width,right:0,left:0}} />

<TouchableOpacity
  onPress={
    ()=>{
      navigation.jumpTo('home')
    }
  }
  style={{width:width*0.4}}
  >
  <Image source={require('./logo.png')} style={{width:100,height:22,marginLeft:width*0.05,marginTop:height*0.01}}/>
  </TouchableOpacity>
  
  
  <TouchableOpacity 
                      onPress={
                          ()=>{
                            navigation.openDrawer()
                            }   
                        } 
                      style={{position: 'absolute',top:height*0.03,right:30,color:'white'}} >
                      {
                        !check?(
                        <FontAwesomeIcon 
                        color={'white'} icon={faBars}  size={17}  />
                      )
                      :
                      (<FontAwesomeIcon color={'white'} icon={faTimes}  size={17}  />)
                        }
                        </TouchableOpacity>


</View>


  
  
      <View>
  <Home/>


       <TouchableOpacity
       onPress={
         ()=>{
navigation.jumpTo('about')
        }
       }
       
       style={{position:'absolute',bottom:height*0.27,height:30,width:30,marginLeft:160,marginTop:-23,backgroundColor:'white',borderRadius:50,alignItems:'center',justifyContent:'center'}}>
       <FontAwesomeIcon icon={faArrowRight} color={'black'} size={12}  />
       </TouchableOpacity>
      </View>
  
  </View>
  
        )
  }  
