import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import { Chicken } from "./food_items";
import { Fish } from "./food_items";
import { Mutton } from "./food_items";
import { Combo } from "./food_items";
import { Fast_Food } from "./food_items";
import { Juice } from "./food_items";
import { Ice } from "./food_items";

const Tab=createMaterialTopTabNavigator();
class Router3 extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
    return(
        
        <Tab.Navigator style={{flexDirection:"column",margin:0,border:0,padding:0,backgroundColor:"grey"}} screenOptions={{
            tabBarScrollEnabled:true,
            tabBarStyle:{
                backgroundColor:'00b3ff',
                padding:0,
                margin:0
            },
            tabBarItemStyle:{
                width:85,
            },
            tabBarIndicatorStyle:{
                padding:1.5
            }

        }}>
            <Tab.Group >

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/premium-vector/cute-rooster-mascot-illustration_446331-58.jpg?w=826'}} style={[Styles.cat]} />
               <Text style={Styles.text}>CHICKEN</Text>
               </View>
               
            }}  component={Chicken} name='Chicken'/>

           <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/cute-clownfish-swimming-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-flat_138676-4489.jpg?w=826&t=st=1676553679~exp=1676554279~hmac=713ef5f42cbb96737a569765d5d4043c65f3f84eb8db74fc4e9069bff077fa9c'}} style={[Styles.cat]} />
               <Text style={[Styles.text,{marginLeft:10}]}>FISH</Text>
               </View>
               
            }}  component={Fish} name='Fish'/>


            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/white-goat-cartoon-character_1308-109159.jpg?w=740&t=st=1676553621~exp=1676554221~hmac=01f9fbb5bc4fbdafb9dd5e8f2abf00588af3f0d25dc57baf695c1159a0fd505e'}} style={[Styles.cat]} />
               <Text style={Styles.text}>MUTTON</Text>
               </View>
               
            }}  component={Mutton} name='Mutton'/>

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg?t=st=1673696587~exp=1673697187~hmac=4dc266cc5a040744db5c18ab0882e2e06fac74dc5d7630392401c1b4219f0afe'}} style={[Styles.cat]} />
               <Text style={Styles.text}>CHINESE</Text>
               </View>
               
            }}  component={Fast_Food} name='Fast_Food'/>

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?w=826&t=st=1673699610~exp=1673700210~hmac=7b74afa8ee09708d132ee113a07c844a5230adca6b5859adf51dc4f11b5e27dd'}} style={[Styles.cat]} />
               <Text style={Styles.text}>COMBO</Text>
               </View>
               
            }}  component={Combo} name='Combo'/>

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/realistic-ftuiys-juice-splash-burst-composition-with-spray-images-ripe-tropical-fruits-blank_1284-29364.jpg?w=740&t=st=1673696326~exp=1673696926~hmac=bbf91a2878b15cf7dec183ac1717f2f06a0b12c16a5df8c9a9f193cdc9b25c57'}} style={[Styles.cat]} />
               <Text style={[Styles.text,{marginLeft:6}]}>JUICE</Text>
               </View>
               
            }}  component={Juice} name='Juice'/>

            <Tab.Screen options={{
               title:({})=>
               <View>
               <Image source={{uri: 'https://img.freepik.com/free-vector/ice-cream-glass-bowl-realistic-composition-with-fresh-berries-violet-scoops-icecream_1284-27095.jpg?w=826&t=st=1673696288~exp=1673696888~hmac=a1e90e9d6f876f96df0ae6b026fdc264d8ceec5b1bd96f0045220e1db7e8119e'}} style={[Styles.cat]} />
               <Text style={[Styles.text,{marginLeft:10}]}>ICE</Text>
               </View>
               
            }}  component={Ice} name='Ice'/>
            </Tab.Group>
        </Tab.Navigator>
        
    )
        }
}


const Styles =StyleSheet.create({
    container :{
        backgroundColor:"grey",
        flexDirection:"row",
        padding:2
    },
    cat:{
        borderRadius:30,
        backgroundColor:"white",
        width:50,
        height:50
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:12,
        padding:2
    }

})
export default Router3;