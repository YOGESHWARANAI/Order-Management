import React from "react";
import { Text, View,Image, Alert } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView,SafeAreaView } from "react-native";
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import axios from 'axios'

class Cart extends React.Component{
    constructor(props)
    {
        super(props);
    }
      Ans=()=>{
        var val = Math.floor(1 + Math.random() * 999);
        const tmplist =this.props.lists
        if(tmplist.length!=0){
          axios.post('http://192.168.9.75:3000/get', {
            list:this.props.lists,
            otp:val
           })
        .then((response) => {
            console.log('Response:', response.data);
            Alert.alert(JSON.stringify("your order OTP : " +val +"      Your order Placed Successfuly!!!"));
        })
        .catch((error) => {
            console.error('Error:', error); 
        });
    }
    else{
        Alert.alert(" Sorry! Your Cart is Empty..")
    }
       }
       
       Delete=(n)=>{
        this.props.decre(this.props.keys),
       this.props.decre(n)
    }

    
    render(){
    return (
        <SafeAreaProvider>
            <View style={{width:400,height:70,justifyContent:"center",alignContent:"center",backgroundColor:"grey"}}>
                <Text style={{marginLeft:60, color:"white",fontSize:30,fontWeight:"bold"}}>Total Amount : {this.props.n} </Text>
            </View>
        <ScrollView>
        {this.props.lists.map((item, index) => ( 
           < View style={[Styles.container,{marginTop:1}]}>            
           <View style={{marginRight:"auto"}}>
           <Image source={{uri:item[3]}} style={[Styles.cat]}/>
           </View>
           <View style={{marginRight:"auto"}}>
           <Text style={[Styles.text,{fontWeight:"bold"}]}>{item[0]}</Text>
           <Text style={[Styles.text,{paddingBottom:3}]}>Quantity : {item[1]}</Text>
           <Text style={[Styles.text]}>Total Price :  {item[2] * item[1]}</Text>
           </View>
        <TouchableOpacity onPress={()=>this.props.decre(item[2]*item[1])}>
        <Icons name="delete" size={22} color="red" paddingRight={24} marginLeft="auto"/>
        </TouchableOpacity>
        </View>
        ))}          
        </ScrollView>
        <View>
        
        <TouchableOpacity style={Styles.Buttons} onPress={this.Ans}>
          <Text style={{color:"white",marginLeft:90,marginTop:-19,fontSize:17}}>Place the Order</Text>
      </TouchableOpacity>
        </View>
        </SafeAreaProvider>
    );
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
        margin:10,
        
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
        
    },
    input:{
        borderWidth:1.3,
        borderColor:"black",
        width:200,
        height:45,
        color:"black",
        marginTop:20,
        paddingLeft:14,
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
      },
      Buttons:{
        width:300,
        marginLeft:30,
        height:45,
        paddingTop:30,
        borderRadius:10,
        backgroundColor:"black",
        marginBottom:6
      }
})
const mapStateToProps=state=>({
   
      counter : state.count,
      lists:state.list,
      n:state.sum
    
})
const mapDispatchToProps=dispatch=>({
    decre:(key)=>dispatch({
        type:'DE',
        payload:key}),

    del:(amnt)=>dispatch({
        type:'AMNT',
        payload : amnt
    })
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);


const style=StyleSheet.create({
    
  })