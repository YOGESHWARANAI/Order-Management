import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import axios from 'axios';
import Food_Item_Template from './food_item_template'
import { Food_item_template_Order } from './food_item_template';


export const All_Orders = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get('http://192.168.9.75:3000/get/api/schemadatas')
        .then((response) => {
          setDetails(response.data);

        })
        .catch((error) => {
          console.error(error);
        });
    }, 10000); 

    return () => clearInterval(intervalId); 
  }, []);


  return (
    <ScrollView>
      {details.map((data)=>(
        <Food_Item_Template food_name={data.name}  quantity={parseInt(data.sum,10)} src={data.url}/>
      ))}
    </ScrollView>
  );
};

export const Order=()=> {
  const [details, setDetails] = useState([]);
  const [otp, setOtp] = useState('');


  const handleSubmit = () => {
    axios.get(`http://192.168.9.75:3000/get/${otp}/otps`)
      .then((response) => {
        setDetails(response.data);
        setOtp('');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleOtpChange = (text) => {
    setOtp(text);
  }
  const handleReset=()=>{
    setDetails([])
  }
 
  return (
    <ScrollView>
     {details.map((data) => (data.list.map((listItem) => (
    <Food_item_template_Order food_name={listItem[0]} price={listItem[1]} quantity={listItem[2] || 0} src={listItem[3]}/>))))}
    <View style={{padding:10}}>
      <TextInput placeholder='otp' style={[style.input]} onChangeText={handleOtpChange} value={otp}></TextInput>
      </View>
      <TouchableOpacity style={style.Button} onPress={handleSubmit}>
          <Text style={{color:"white",marginLeft:130,marginTop:-19,fontSize:17}}>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Button} onPress={handleReset}>
          <Text style={{color:"white",marginLeft:130,marginTop:-19,fontSize:17}}>Reset</Text>
      </TouchableOpacity>
    
    </ScrollView>
  );
};

const style=StyleSheet.create({
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
  Button:{
    width:300,
    marginLeft:30,
    height:45,
    paddingTop:30,
    borderRadius:10,
    backgroundColor:"black",
    marginBottom:6
  }
})