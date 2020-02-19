import React,{Component,useState,useEffect} from 'react'

import {ScrollView,FlatList,Linking,View,Text,Image,TextInput,Dimensions,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get("window")

import {Paranormal} from './paranormal'

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'



import {Contact} from './contact'





// async function sendEmail(to,{subject,body}={}){

//   const query=qs.stringify({
//     subject,
//     body
//   })

// let url='mailto:saiashish7777@gmail.com?subject=SendMail&body=example'
// let url='https://www.gmail.com'

// // url=encodeURIComponent(url)
// if(query.length){
//   // url+=`?${query}`
// }

// // const canOpen=await Linking.canOpenURL(url)

// // if(!canOpen){
// //   throw new Error('Provided URL cannot be handled')
// // }

// return Linking.openURL(url)
// }



export const Intouch=({navigation})=>{
  const [check,setCheck]=useState(false)


  useEffect(() => {
    navigation.addListener('drawerClose', e => {
      setCheck(false)
    });
    
    navigation.addListener('drawerOpen', e => {
      setCheck(true)
    });
  },[navigation])
  


        return(


<ScrollView
>

<View 
style={{height:height*0.08}}
>

<Image source= {require('./redblue.jpg')} style={{position:'absolute',height:height*0.08,width: width,right:0,left:0}} />



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



</View>


<View>
  <Contact/>
</View>

<View>



</View>
            </ScrollView>      
        )
}