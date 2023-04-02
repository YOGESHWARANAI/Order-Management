import axios from "axios";
import React from "react";
import { View,Text,StyleSheet,Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from "react-redux";

class Food_Item_Template extends React.Component{
    constructor(props){
        super(props);
    }  
    state=({
        quantitys : this.props.quantity,
        temp:[],
        ico:"cart-arrow-down",
        icolor:"black"
    })
    Increase=()=>{
        this.setState({
            quantitys:this.state.quantitys+1
        })
    }
    Decrease=()=>{
        this.setState({
            quantitys:this.state.quantitys-1
        })
    }
    url=this.props.src
    Insertion=()=>{
        if(this.state.quantitys>0){
        this.props.amnt(this.state.quantitys * this.props.price);
        this.state.temp.push(this.props.food_name);
        this.state.temp.push(this.state.quantitys);
       this.state.temp.push(this.props.price);
       this.state.temp.push(this.url);
       this.state.temp.push(this.state.ico)
       this.props.incre(this.state.temp)
           if(this.state.quantitys>0){
               this.setState({
                   ico:"check-square-o",
                   icolor:"green"
               })
           }
       this.state.temp.splice();
       console.log(this.props.lists)
       console.log(this.props.amount)
        }
}             
    render()
            {
                return(
                    <View>
                           
                    < View style={[Styles.container,{marginTop:1}]}>  
                      <View style={{marginRight:"auto"}}>
                      <Image source={{uri:this.url}} style={[Styles.cat]}/>
                      </View>
                         <View style={{display:"flex",marginRight:"auto"}}>
                      <Text style={[Styles.text,{fontWeight:"bold"}]}>{this.props.food_name}</Text>
                      <Text style={[Styles.text]}>Price :  {this.props.price}</Text>
                      <Text style={[Styles.text,{paddingBottom:3}]}>Quantity </Text>
                      <View style={{flexDirection:"row"}}>
                      <Icon onPress={this.Increase} name="plus-circle" size={15} color="black"  marginRight={16}/>
                      <Text style={{color:"black"}}>{this.state.quantitys}</Text>
                      <Icon onPress={this.Decrease} name="minus-circle" size={15} color="black"  marginLeft={16}/>
                      </View>
                      </View>
            <TouchableOpacity onPress={this.Insertion}>
            <Icon name={this.state.ico}  size={22} color={this.state.icolor} paddingRight={24} marginLeft="auto"/>
            </TouchableOpacity>
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
        
    }
})
function mapStateToProps(state){
    return {
      lists:state.list,
      amount :state.count,
      ico:state.order
    }
}
const mapDispatchToProps=dispatch=>({
 
    incre:(value)=>dispatch({type:'IN',payload:value}),
    changeico :()=> dispatch({type:'ICO'}),
    amnt : (amt)=> dispatch({type : 'AMOUNT',payload:amt})

})

  export default connect(mapStateToProps,mapDispatchToProps)( Food_Item_Template);