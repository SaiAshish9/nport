import React,{useState,useEffect} from 'react'

import {View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'

import Pic1 from './pic1.jpg'

import Pic2 from './pic2.jpg'


import {faArrowRight,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'


import Swiper from 'react-native-swiper'

const {width,height}=Dimensions.get("window")

export  const Testimonial=()=>{
    
    
    

   

    
    
    
    return(
        <View style={{borderLeftColor:'black',borderWidth:1,flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black',width:width,height:height}}>



<Image source= {require('./image.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.5,height:height,width: width,right:0,left:0}} />




<View > 

<Swiper

activeDotStyle={{backgroundColor:'white'}}

dotStyle={{borderColor:'white',borderWidth:1}}

buttonColor='white'

showsButtons={false} autoplay={true} 
>


<View style={{width:width,alignItems:'center',justifyContent:'center',height:height}}>

<TouchableOpacity style={{width:90,height:90,borderRadius:200,position:'absolute',top:30,zIndex:1,borderColor:'white',borderWidth:3}}>
<Image source={Pic1} resizeMode="contain" style={{width:84,height:84,borderRadius:200,position:'absolute'}} />
</TouchableOpacity>

<View  style={{padding:10,alignItems:'center',justifyContent:'center',width:width*0.7,height:height*0.7}}>
    
<Text style={{color:'white',fontWeight:'bold',marginTop:70}}>
    Omkar Pawaskar
</Text>

<Text style={{color:'white',marginTop:30}}>
I always thought that paranormal experts look scary like 'Taantriks' but that wasn't the case with Jay. Apart from being a great paranormal expert he is also a very good story teller. He is well aware of the three important aspects of story writing: beginning-middle-end. It's very difficult to believe that such a calm and composed person has had so many encounters and has been to almost more than 130 haunted places in India. I think it's high time that we update our 'Bhooton Ki Kahaniyaan' with reality and Jay is going to make a major contribution to that.
</Text>

</View>

</View>

<View style={{width:width,alignItems:'center',justifyContent:'center',height:height}}>



<TouchableOpacity style={{width:90,height:90,borderRadius:200,position:'absolute',top:30,zIndex:1,borderColor:'white',borderWidth:3}}>
<Image source={Pic2} resizeMode="contain" style={{width:84,height:84,borderRadius:200,position:'absolute'}} />
</TouchableOpacity>

<View  style={{padding:10,alignItems:'center',justifyContent:'center',width:width*0.7,height:height*0.7}}>
    
<Text style={{color:'white',fontWeight:'bold',marginTop:70}}>
    Jay Alani
</Text>

<Text style={{color:'white',marginTop:30}}>
I always thought that paranormal experts look scary like 'Taantriks' but that wasn't the case with Jay. 
</Text>

</View>

</View>




</Swiper>


</View>



</View>
    )
}