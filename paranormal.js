import React,{Component,useState,useEffect} from 'react'

import {Animated,View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get("window")

import Pic1 from './blog1.jpg'
import Pic2 from './blog2.jpg'
import Pic3 from './blog3.jpg'
import Pic4 from './blog4.jpg'
import Pic5 from './blog5.jpg'

export const Paranormal=({navigation})=>{

const [fadeAnim]=useState(new Animated.Value(0))


  useEffect(() => {
    setTimeout(()=>{
      Animated.timing(
        fadeAnim,
        {toValue:1},
      ).start()
    },100)
   
  },[])

     
 

        return(
        
        
         
<View style={{ backgroundColor:'#1b1d38', justifyContent:'center',alignItems:'center',flex:1,color:'white',borderWidth:1,borderLeftColor:'black',width:width,height:height}}>

<Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>
            Paranormal Blogs
          </Text>

<Animated.View
          style={{opacity:fadeAnim,
           transform:[{
             translateX:fadeAnim.interpolate({
               inputRange:[0,1],
               outputRange:[150,0]
             })
           }]
         }}
          >  


    


<Image source={Pic1} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic2} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic3} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic4} resizeMode="contain" style={{width:100,height:100}}/>
<Image source={Pic5} resizeMode="contain" style={{width:100,height:100}}/>


</Animated.View> 

            </View>
            
        )
}