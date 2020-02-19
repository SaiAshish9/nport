import React from 'react'

import {Animated,TouchableWithoutFeedback,Image,Linking,View,Text,Dimensions,TouchableOpacity} from 'react-native'

// import YoutubePlayer from 'react-native-youtube-sdk'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars,faTimes} from '@fortawesome/free-solid-svg-icons'

// import Video from 'expo-av'

const {width, height} = Dimensions.get("window")


import Video from 'react-native-video'

import V from './genymotion.mp4'


 export default class Videos extends React.Component{
   
constructor(props){
    super(props)
    this.state={
        check: false  ,
        fadeAnim:new Animated.Value(0)
    }
}

componentDidMount(){

        this.display=setInterval(   
  ()=>{
    Animated.timing(
      this.state.fadeAnim,
      {toValue:1},
    ).start()
  
  },200)

    this.props.navigation.addListener('drawerClose', e => {
        this.setState({...this.state,check:false})
      });

      this.props.navigation.addListener('drawerOpen', e => {
        this.setState({...this.state,check:true})
      });

}


componentWillUnmount(){
  
        
    clearInterval(this.display)
        }

   render(){

    const {navigation}=this.props

    return(
        <View style={{borderLeftColor:'white',borderWidth:1,flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>

<Image source= {require('./videos.jpg')} style={{opacity:0.28,zIndex:-1,position:'absolute',height:height,width: width,top:50,right:0,left:0}} />


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




<View style={{alignItems:'center',justifyContent:'center'}}>


<Animated.View
        style={{opacity:this.state.fadeAnim,
        transform:[{
          translateX:this.state.fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[150,0]
          })
        }]
        
        }}
        >

<View>
    <Text style={{fontSize:20,marginTop:30,marginBottom:20,color:'white',fontWeight:'bold',alignItems:'center'}}>
        Latest Videos
    </Text>
</View>

</Animated.View>



<TouchableOpacity
// onPress={()=>Video.seek(0)}
> 

</TouchableOpacity>


<Animated.View
        style={{opacity:this.state.fadeAnim,
        transform:[{
          translateY:this.state.fadeAnim.interpolate({
            inputRange:[0,1],
            outputRange:[150,0]
          })
        }]
        
        }}
        >


{/* {uri:'https://www.youtube.com/channel/UCtg5jAbdQf6YLXjhNQuSHXg'} */}
{/* <TouchableWithoutFeedback>
<Video
source={V}
ref={(ref:Video)=>this.video=ref}
resizeMode="cover"
progressUpdateInterval={250.0} 
paused={false}
style={{height:height*0.3,marginBottom:10,width:width*0.8,borderColor:'white',borderWidth:3}}
/>
</TouchableWithoutFeedback> */}

<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/DGBpfUTDavc')}
>
{/* <Video
source={V}
ref={(ref:Video)=>this.video=ref}
resizeMode="cover"
progressUpdateInterval={250.0} 
paused={false}
style={{height:height*0.3,width:width*0.8,borderColor:'white',borderWidth:3}}
/> */}

<Image
source={require('./video1.jpg')}
style={{height:height*0.3,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


</TouchableOpacity>


<TouchableOpacity
onPress={()=>Linking.openURL('https://youtu.be/oL1cPkd1mxA')}
>
{/* <Video
source={V}
ref={(ref:Video)=>this.video=ref}
resizeMode="cover"
progressUpdateInterval={250.0} 
paused={false}
style={{height:height*0.3,width:width*0.8,borderColor:'white',borderWidth:3}}
/> */}

<Image
source={require('./video2.jpg')}
style={{height:height*0.3,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


</TouchableOpacity>

<View style={{alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity 
onPress={()=>Linking.openURL('https://www.youtube.com/channel/UCtg5jAbdQf6YLXjhNQuSHXg')}
style={{width:100,borderColor:'white',margin:10,borderWidth:2,borderRadius:8,padding:7}}
>

    <Text style={{color:'white',fontWeight:'bold'}}>
          Watch More
    </Text>
</TouchableOpacity>

</View>

</Animated.View>

</View>



{/*    
<YoutubePlayer
ref={ref=>{this.youtubePlayer=ref}}
videoId="t_aIEOqB8VM"
autoplay={true}
fullscreen={true}
showFullscreenButton={true}
showSeekBar={true}
showPlayPauseButton={true}
style={{width:"100%",height:200}}
onChangeState={e=>console.log(e)}
/> */}




        </View>
    )
}
 }
// AppRegistry.registerComponent('Video',()=>Videos)

