import React,{useEffect,useState} from 'react'

import {Animated,View,Text,StyleSheet,ImageBackground,Image,TouchableOpacity, FlatList} from 'react-native'


import {Dimensions} from 'react-native'

import {faArrowRight,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'



import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'



console.disableYellowBox=true

const {width,height}=Dimensions.get("window")



export default class Home extends React.Component{



  constructor(props){
    super(props)

    this.state={
      current:'home',
    toggle:false,
  title:'' ,
 fadeAnim:new Animated.Value(0)
}
  }
    


    componentDidMount(){




      this.display=setInterval(

  
()=>{this.toggle()
  Animated.timing(
    this.state.fadeAnim,
    {toValue:1},
  ).start()

},200)
   
}

    componentWillUnmount(){

      
clearInterval(this.display)
    }

    toggle(){
const title="I'm a Designer"
const x=title.split()
if(this.state.title.length!=title.length){
  this.setState({
    current:'home',
    toggle:!this.state.toggle,
    title:this.state.title+title[this.state.title.length]
  })}else{
    this.setState({
      current:'home',
      toggle:true,
      title:this.state.title
    })
  }
}

    



    render(){
        return(




            <View>
            
   
               
                    <View style={{width:width/2,height:height,color:'white'}}>
                    <Image source={require('./home.jpg')} style={{position:'absolute',right:-120,top:0,left:0,bottom:0,width:width*1.7,height:height}}/>

                    
                      <Text style={{color:'white',fontFamily:'Cochin',fontWeight:'bold',fontSize:20,marginTop:height*0.5,marginLeft:width*0.1}}>
        
        {
          this.state.title
        }
        
         {
          this.state.toggle?
          ' |':''
        }
                      </Text>
        
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


        <Text style={{marginTop:10,fontSize:12,marginLeft:width*0.1,color:'white'}}>
                    
                    I'm a Designer with extensive experience for over 3 years
                    
                      </Text>
                      </Animated.View>


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
                    <Text style={{marginTop:30,marginLeft:width*0.1,color:'white',fontWeight:'bold'}}> 
                    Get in my world
                    </Text>
                    </Animated.View>



                   
                    
               
                    
                    
                    
                    </View>
                    
                    {/* <View style={{position:'absolute',right:20,top:width*0.27, height:height*0.4,width:width*0.4,borderColor:'white',borderWidth:0.6}}>
                    
                    <Image source={require('./image.jpg')} style={{position:'relative',right:0,top:0,left:0,bottom:0,width:width*0.395,height:height*0.35}}/>
                    </View> */}

              

            </View>
        )
    }
}