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

export  const SecondPage =({navigation})=>{
    
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
          // #1b1d38
  <View style={{borderLeftColor:'white',borderWidth:0.5,height:height}}>
  
  <View style={{backgroundColor:'black',zIndex:-1,position:'absolute',height:height,width: width,right:0,left:0}}>

  </View>

  <Image source= {require('./redblue.jpg')} style={{position:'absolute',height:height*0.08,width: width,right:0,left:0}} />

  <Image source= {require('./image.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.6,height:height,width: width,right:0,left:0}} />



  <TouchableOpacity
  onPress={
    ()=>{
      navigation.jumpTo('home')
    }

  }
  style={{width:width*0.4}}

  >
  <Image source={require('./logo.png')} style={{width:100,height:22,marginLeft:width*0.06,marginTop:height*0.025}}/>
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
  
<Second/>
  </View>
  
        )
  }  
