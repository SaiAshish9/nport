import React,{ Component} from 'react'

import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native'

const {width,height}=Dimensions.get("window")

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

import {faArrowRight,faArrowLeft} from '@fortawesome/free-solid-svg-icons'

import Swiper from 'react-native-swiper'


export default class SecondsPerMinute extends Component {
    
    state={
        selectedRight:true
    }

    render() { 
        return(
        <View style={{justifyContent:'center',alignItems:'center'}}>

<Text style={{marginTop:40,fontWeight:'bold',fontSize:17,color: 'white'}}>

HAUNTINGS SO FAR

</Text>



<View style={{width:width,height:height*0.4,marginTop:40,position:'absolute',left:0,right:0,top:40}}>

<Swiper 
activeDotStyle={{backgroundColor:'white'}}
dotStyle={{borderColor:'white',borderWidth:1}}
style={{height:width/2}} autoplay={true} showsButtons={false} autoplayTimeout={3} >

<Image resizeMode="contain"  source={require('./pic1.jpg')} style={{height:height*0.3,width:width}} />
    
<Image resizeMode="contain" style={{height:height*0.3,width:width}} source={require('./pic2.jpg')} />

<Image resizeMode="contain" style={{height:height*0.3,width:width}} source={require('./pic3.jpg')} />



</Swiper>

</View>






 <View style={{alignItems:'center',justifyContent:'center',padding:5,height:height*0.3,width:width*0.9,position:'absolute',top:height*0.5}}> 

 {
this.state.selectedRight?
(<Text style={{color:'white',fontWeight:'bold'}}>
    Jay,the founder and CEO of the Paranormal Company is a paranormal researcher and investigator
</Text>):(
<Text style={{color:'white',fontWeight:'bold',alignItems:'center',justifyContent:'center'}}>

Being a pioneer in the field of Paranormal Investigation in India,Jay has an array of accolades to his name.

</Text>
)
    }

 </View>

{
this.state.selectedRight?
(
    <TouchableOpacity 
    onPress={()=>this.setState({selectedRight:false})}
    style={{position:'absolute',left:width*0.4,top:height*0.75}}>
<FontAwesomeIcon  color={'white'} icon={faArrowLeft}  size={12}  />
</TouchableOpacity>
):(
    <TouchableOpacity 
    onPress={()=>this.setState({selectedRight:true})}
    style={{justifyContent:'center',alignItems:'center',borderRadius:50,height:20,width:20,position:'absolute',left:width*0.4,top:height*0.745,backgroundColor:'white'}}>
<FontAwesomeIcon  color={'black'} icon={faArrowLeft}  size={12}  />
</TouchableOpacity>
)
}

{
this.state.selectedRight?
(
<TouchableOpacity 
    onPress={()=>this.setState({selectedRight:false})}
style={{borderRadius:50,height:20,width:20, position:'absolute',left:width*0.5,justifyContent:'center',alignItems:'center',top:height*0.745,backgroundColor:'white'}} >
<FontAwesomeIcon  color={'black'} icon={faArrowRight}  size={12}  />
</TouchableOpacity>
):(
    <TouchableOpacity 
    onPress={()=>this.setState({selectedRight:true})}
    style={{ position:'absolute',left:width*0.5,justifyContent:'center',alignItems:'center',top:height*0.75}} >
<FontAwesomeIcon  color={'white'} icon={faArrowRight}  size={12}  />
</TouchableOpacity>
)
}










{/* <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginTop:height*0.7,marginLeft:width*0.7, borderColor:'white',borderWidth:1,width:width*0.2,height:height*0.07}}>
    <Text style={{color:'white',fontWeight:'bold'}}>
        Youtube Collections
    </Text>
</TouchableOpacity> */}

        </View>
    )}
}

