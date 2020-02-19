import React,{Component,useState,useEffect} from 'react'

import {ScrollView,View,Text,Image,Dimensions,TouchableOpacity} from 'react-native'


import AnimateNumber from 'react-native-countup'

const {height,width}=Dimensions.get('window')
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
import {Paranormal} from './paranormal'
import {Testimonial} from './testimonial'


export class Work extends Component{
 

    state={
        x:1,
        y:1,
        z:1,
        t:1,
        check:false
    }
// useEffect(()=>{

//     setTimeout(()=>{
//         if(x<101)
//         Setx(x+1);
//        if(y<151)
//         Sety(y+1)
//         if(z<51)
//         Setz(z+1);
    
//     },0.00001)



// },[y])

componentDidMount(){

    this.props.navigation.addListener('drawerClose', e => {
        this.setState({...this.state,check:false})
      });

      this.props.navigation.addListener('drawerOpen', e => {
        this.setState({...this.state,check:true})
      });


    // this.interval=setInterval(()=>{   
            
    //     if(this.state.x<100){
    //         this.setState(a=>({
    //             ...a,
    //             x:this.state.x+1
    //         }))
    //     }

    //     if(this.state.y<150){
    //         this.setState(a=>({
    //             ...a,
    //             y:this.state.y+1
    //         }))
    //     }

    //     if(this.state.z<50){
    //         this.setState(a=>({
    //             ...a,
    //             z:this.state.z+1
    //         }))

    //     }
    //         if(this.state.t<10){
    //             this.setState(a=>({
    //                 ...a,
    //                 t:this.state.t+1
    //             }))

    //     }

    //             },0.001)

    //             if(this.state.y>150){
    //                 clearInterval(this.interval)
    //             }
}



render(){

   const {navigation}=this.props
    
    return (

<ScrollView
style={{backgroundColor:'black',borderLeftColor:'white',borderWidth:1}}
>

<View style={{ flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',borderLeftColor:'black',borderWidth:1}}>



<Image source= {require('./background.jpg')} style={{position:'absolute',height:height,zIndex:-1,width: width*1.2,bottom:0,top:40,right:-40,left:0,opacity:0.3}} resizeMode={'cover'} />



<View style={{zIndex:1,position:'absolute',top:0,left:0,width:width,backgroundColor:'blue'}}
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
                      !this.state.check?(
                      <FontAwesomeIcon 
                      color={'white'} icon={faBars}  size={17}  />
                    )
                    :
                    (<FontAwesomeIcon color={'white'} icon={faTimes}  size={17}  />)
                      }
                      </TouchableOpacity>
</View>




<Text style={{fontSize:30,color:'white',fontWeight:'bold',marginTop:50,marginLeft:20}}>

<AnimateNumber initial={1} timing="linear" countBy={1} value={100} size={30} style={{color:'white'}}/>
    {/* {this.state.x}  + */}
</Text>




<Text style={{color:'white',marginBottom:50}}>



    Locations Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
<AnimateNumber initial={1} timing="linear" countBy={1} value={150} size={30} style={{color:'white'}}/>
    {/* {this.state.y}  + */}
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Cases Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
<AnimateNumber initial={1} timing="linear" countBy={1} value={50} size={30} style={{color:'white'}}/>
 {/* {this.state.z}  + */}
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Publications
</Text>


<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
<AnimateNumber initial={1} timing="linear" countBy={1} value={10} size={30} style={{color:'white'}}/>
 {/* {this.state.t}  M+ */}
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Podcast Listeners
</Text>

</View>


{/* <View style={{position:'relative'}}>
    <Paranormal/>
</View> */}

<View style={{position:'relative',top:-10}}>
    <Testimonial/>
</View>


</ScrollView>

)
}}