import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Food_Item_Template from './food_item_template';
import axios from 'axios';
export const Chicken=()=> {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.9.75:3000/get/Chicken')
      .then((response) => {
        console.log(response.data)
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {details.map((data) => (
        <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
      ))}
    </ScrollView>
  );
};

export const Fish=()=> {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.9.75:3000/get/Fish')
      .then((response) => {
        console.log(response.data)
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {details.map((data) => (
        <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
      ))}
    </ScrollView>
  );
};
export const Mutton=()=> {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.9.75:3000/get/Mutton')
      .then((response) => {
        console.log(response.data)
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {details.map((data) => (
        <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
      ))}
    </ScrollView>
  );
};


export const Fast_Food=()=> {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.9.75:3000/get/Fast_Food')
      .then((response) => {
        console.log(response.data)
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {details.map((data) => (
        <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
      ))}
    </ScrollView>
  );
};


export const Combo=()=> {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.9.75:3000/get/Combo')
      .then((response) => {
        console.log(response.data)
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {details.map((data) => (
        <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
      ))}
    </ScrollView>
  );
};


  export const Juice=()=> {
    const [details, setDetails] = useState([]);

    useEffect(() => {
      axios.get('http://192.168.9.75:3000/get/Juice')
        .then((response) => {
          console.log(response.data)
          setDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
    return (
      <ScrollView>
        {details.map((data) => (
          <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
        ))}
      </ScrollView>
    );
  };
  export const Ice=()=> {
    const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.9.75:3000/get/Ice')
      .then((response) => {
        console.log(response.data)
        setDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView>
      {details.map((data) => (
        <Food_Item_Template food_name={data.name} price={data.price} quantity={0} src={data.src}  />
      ))}
    </ScrollView>
  );
};