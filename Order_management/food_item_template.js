import React, { Component } from 'react'
import { Text, View, StyleSheet,Image } from 'react-native'


export default class Food_item_template extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <View style={{width:"100%",height:110,marginTop:0.5,borderLeftWidth:2,borderRightWidth:2,borderLeftColor:"black",borderBottomWidth:0.5,borderTopWidth:0.5, borderRightColor:"black"}}>
        <View style={{flexDirection:"row",marginTop:17,alignContent:"center",alignItems:"center"}}>
        <Image source={{uri:this.props.src}} style={[Styles.cat]}/>
        <View style={{marginLeft:30}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{paddingTop:5,fontSize:17,fontWeight:"bold"}}>Food Name :  </Text>
            <Text style={{marginTop:5,fontSize:18,fontWeight:"bold"}}>{this.props.food_name}</Text>
            </View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Total Quantity : {this.props.quantity}</Text>
            </View>
            </View>
      </View>
    )
  }
}


export class Food_item_template_Order extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <View style={{width:"100%",height:110,marginTop:0.5,borderLeftWidth:2,borderRightWidth:2,borderLeftColor:"black",borderBottomWidth:0.5,borderTopWidth:0.5, borderRightColor:"black"}}>
        <View style={{flexDirection:"row",marginTop:17,alignContent:"center",alignItems:"center"}}>
        <Image source={{uri:this.props.src}} style={[Styles.cat]}/>
        <View style={{marginLeft:30}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <Text style={{paddingTop:5,fontSize:17,fontWeight:"bold"}}>Food Name :  </Text>
            <Text style={{marginTop:5,fontSize:18,fontWeight:"bold"}}>{this.props.food_name}</Text>
            </View>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Quantity : {this.props.price}</Text>
            </View>
            </View>
      </View>
    )
  }
}


const Styles = StyleSheet.create({
    view:{
        width:"100%",
        height:"100%",
        backgroundColor:"white",
        flexDirection:"column",
    },
    container:{
       borderWidth:0.5,
       borderColor:"grey",
       height:100,
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center"
    },
    cat:{
        borderRadius:30,
        backgroundColor:"grey",
        width:70,
        height:70,
        marginLeft:20     
    },
    text:{
        color:"black",
    },
    footer:{
        backgroundColor:"grey",
        padding:50,
        height:100,
        width:50
    },
    button:{
        marginTop:2,
        width:20,
       borderWidth:1,
       borderColor:"black",
        justifyContent:"center",
        alignItems:"center"
        
    }
})