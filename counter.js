import React, { Component } from 'react'

import {Text,View} from 'react-native'



 class Counter extends Component {

    constructor(props){
        super(props)


        this.state={
            x:1,
            y:1,
            z:1,
            t:1
        }
    }
    
componentDidMount(){
    
    this.interval=setInterval(()=>{
        if(this.state.x<100){
            this.setState(a=>({
                ...a,
                x:this.state.x+1
            }))
        }

        if(this.state.y<150){
            this.setState(a=>({
                ...a,
                y:this.state.y+1
            }))
        }

        if(this.state.z<50){
            this.setState(a=>({
                ...a,
                z:this.state.z+1
            }))

        }
            if(this.state.t<10){
                this.setState(a=>({
                    ...a,
                    t:this.state.t+1
                }))

        }

                },1)

                if(this.state.y>151){
                    clearInterval(this.interval)
                }
}


    render() {
        return (
          <View>


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
    {this.state.x}  +
</Text>
<Text style={{color:'white',marginBottom:50}}>
    Locations Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
    {this.state.y}  +
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Cases Investigated
</Text>

<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
 {this.state.z}  +
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Publications
</Text>


<Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>
 {this.state.t}  M+
</Text>

<Text style={{color:'white',marginBottom:50}}>
    Podcast Listeners
</Text>


</View>
          </View>
        )
    }
}


export default Counter