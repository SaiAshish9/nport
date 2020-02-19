import React,{useState,useEffect,Component}  from 'react'


import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPause,faPlay,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'

import {Slider,ScrollView,ToastAndroid,Text,View,Image,Dimensions,TouchableOpacity} from 'react-native'


import Sound from 'react-native-sound'

var song=null


const {width, height} = Dimensions.get("window")


export class Podcast extends Component{

constructor(props){
    super(props)

    this.state={
        check:false,
        pause:false,
        season:'',
        episode:'',
        value:0,
        duration:1,
        currentTime:1,
        ratio:1
    }
}


componentDidMount(){

    const urls=[
        'http://35.244.1.69/wp-content/uploads/2020/02/EP-1.S2.mp3'
    ]


    // require('./audio.mp3')
    song=new Sound(urls[0],Sound.MAIN_BUNDLE,(e)=>{
        if(e){
            ToastAndroid.show('Error' ,ToastAndroid.SHORT)
        }
    }) 



    this.props.navigation.addListener('drawerOpen', e => {
this.setState({...this.state,check:true})
    });

    this.props.navigation.addListener('drawerClose', e => {
        this.setState({...this.state,check:false})     
    });
           
 
// setInterval(()=>{

// },0.01)


}


componentWillUpdate(){
   if(song!=null){
    song.getCurrentTime(s=>{
        this.setState({...this.state,duration:song.getDuration(),currentTime:s,ratio:s/song.getDuration() *100})
    })
   } 
}


onPressButtonPlay(){
    this.setState({...this.state,pause:!this.state.pause})

    if(song!=null){
        song.play((success)=>{
            if(!success){
                ToastAndroid.show('Error',ToastAndroid.SHORT)
            }
            })  
    }
}


onPressButtonPause(){
    if(song!=null){


        song.pause()
    }

    song.getCurrentTime(s=>{
        this.setState({...this.state,pause:!this.state.pause,duration:song.getDuration(),currentTime:s,ratio:s/song.getDuration() *100})
    })
    
}




      
render(){

    const {navigation}=this.props

  const {check}=this.state




    return (
        <ScrollView>

        
        <View style={{borderLeftColor:'white',borderWidth:0.5,height:height}}>
  
        <View style={{backgroundColor:'black',zIndex:-1,position:'absolute',height:height,width: width,right:0,left:0}}>
      
        </View>
      
        <Image source= {require('./redblue.jpg')} style={{position:'absolute',height:height*0.08,width: width,right:0,left:0}} />
      
        <Image source= {require('./video.jpg')} style={{zIndex:-1,position:'absolute',opacity:0.23,height:height*1,width: width*1.3,right:0,left:0}} />
      
      
      
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

      <View style={{alignItems:'center', marginTop:30,justifyContent:'center'}}>

      <TouchableOpacity
onPress={()=>this.setState({...this.state,pause:false,season:'',episode:'',ratio:1,duration:1,currentTime:1})}
>
<Text style={{color:'white',marginTop:60,fontSize:20,fontWeight:'bold'}}>
    Podcast's
</Text>
</TouchableOpacity>

{
    !this.state.season&&!this.state.episode?(
        <View>
<TouchableOpacity
onPress={()=>this.setState({...this.state,season:'1'})}
>
<Text style={{color:'white',marginTop:110,fontSize:20,fontWeight:'bold'}}>
Season 1
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,season:'2'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Season 2
</Text>
</TouchableOpacity>
</View>

    ):
    this.state.season==='1'&&!this.state.episode?(


        <View>
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'1'})}
        >
        <Text style={{color:'white',marginTop:90,fontSize:20,fontWeight:'bold'}}>
        Episode 1
        </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'2'})}
        >
        <Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
        Episode 2
        </Text>
        </TouchableOpacity>

        <View>
<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'3'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Episode 3
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'4'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Episode 4
</Text>
</TouchableOpacity>
</View>


        </View>


    ):
    
    this.state.season==='2'&&!this.state.episode?
    (


        <View>
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'5'})}
        >
        <Text style={{color:'white',marginTop:90,fontSize:20,fontWeight:'bold'}}>
        Episode 5
        </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity
        onPress={()=>this.setState({...this.state,episode:'6'})}
        >
        <Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
        Episode 6
        </Text>
        </TouchableOpacity>

<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'7'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Episode 7
</Text>
</TouchableOpacity>


<TouchableOpacity
onPress={()=>this.setState({...this.state,episode:'8'})}
>
<Text style={{color:'white',marginTop:30,fontSize:20,fontWeight:'bold'}}>
Episode 8
</Text>
</TouchableOpacity>

</View>



    ):(
<View style={{alignItems:'center',justifyCenter:'center'}}>

<Image
source={require('./video1.jpg')}
style={{height:height*0.3,marginTop:40,marginBottom:20,width:width*0.8,borderColor:'white',borderWidth:3}}
/>


<Slider
         value={this.state.ratio}
         onValueChange={(value)=>this.setState(()=>({value}))}
         step={1}
         minimumValue={0}
         maximumValue={100}
         width={200}
minimumTrackTintColor={'white'}
thumbTintColor={'white'}
/>



{this.state.ratio!=1 ?(
<Text style={{color:'white',fontWeight:'bold',marginTop:-22,marginLeft:width*0.6,fontSize:10}}>
  {Math.round((this.state.currentTime/60)*100)/100} / {Math.round((this.state.duration/60)*100)/100}  
        </Text>):(
            <Text style={{color:'white',fontWeight:'bold',marginTop:-22,marginLeft:width*0.6,fontSize:10}}>
0.00/0.00
</Text>
        )
        }
<Text style={{color:'white',fontWeight:'bold',marginTop:30,fontSize:20}}>
Episode {this.state.episode}
        </Text>
</View>

    )

}




{
    this.state.episode &&!this.state.pause?(
<TouchableOpacity
onPress={
    this.onPressButtonPlay.bind(this)
    }
> 

<FontAwesomeIcon color={'white'} 

style={{marginTop:10}} icon={faPause}  size={17}  />

</TouchableOpacity>
    ):
    this.state.season && this.state.episode? 
    (
    
        <TouchableOpacity
        onPress={
            this.onPressButtonPause.bind(this)
            }
        > 
        
        <FontAwesomeIcon color={'white'} 
        
        style={{marginTop:10}} icon={faPlay}  size={17}  />
        
        </TouchableOpacity>       

    ):(
        <Text>

        </Text>
    )
}


        </View>
        </View>  
        </ScrollView>

    )
}}