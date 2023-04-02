import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import { Order } from "./food_items";
import {All_Orders } from "./food_items";

const Tab=createMaterialTopTabNavigator();
class Router3 extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
    return(
        
        <Tab.Navigator style={{backgroundColor:"grey"}} screenOptions={{
            tabBarScrollEnabled:true,
            tabBarStyle:{
                backgroundColor:'00b3ff',
                // marginLeft:30
                // padding:0,
                // margin:0
            },
            tabBarItemStyle:{
                width:182,
            },
            tabBarIndicatorStyle:{
                padding:1.5
            }

        }}>
            <Tab.Group >

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/online-order-delivery-service-shipment-internet-shop-basket-cardboard-boxes-buyer-with-laptop-delivery-note-monitor-screen-parcel-vector-isolated-concept-metaphor-illustration_335657-2838.jpg?w=826&t=st=1679318417~exp=1679319017~hmac=735abf635b407305260e22a39a65b20c07a40460f76ba2972c840c09049ca8e6'}} style={[Styles.cat]} />
               <Text style={Styles.text}>ALL ORDERS</Text>
               </View>
            }}  component={All_Orders} name='All_Orders'/>

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-photo/3d-hand-using-online-banking-app-smartphone_107791-16639.jpg?w=826&t=st=1679318556~exp=1679319156~hmac=e40bb261218c94ec8a20142668fb05b339e5bd0212189b852bd81dcdf673ff0f'}} style={[Styles.cat]} />
               <Text style={Styles.text}>ORDER</Text>
               </View>
            }}  component={Order} name='Order'/>

        
            </Tab.Group>
        </Tab.Navigator>
        
    )
        }
}


const Styles =StyleSheet.create({
    container :{
        backgroundColor:"grey",
        flexDirection:"row",
    },
    cat:{
        borderRadius:30,
        backgroundColor:"white",
        width:50,
        height:50
    },
    text:{
        color:"white",
        fontFamily:"serif",
        fontSize:11,
        marginLeft:"auto",
        marginRight:"auto"
    }

})
export default Router3;