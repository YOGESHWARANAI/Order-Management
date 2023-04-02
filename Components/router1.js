import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Router2 from './router2';
import Cart from './cart';
import PaymentScreen from './payment';
import { SafeAreaView } from 'react-navigation';

const Stack = createStackNavigator();
function StackRoutes() {
  return (
  
    <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Main_Menu" 
        component={Router2} 
        options={{ headerShown:false }}
      />
      <Stack.Screen 
        name="Cart" 
        component={Cart} 
        options={{ title: 'Your Cart',headerTintColor:"blue",
      headerStyle:{
        backgroundColor:"white",
      } }}
      />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen}options={{title:'Payment',headerTintColor:"blue", headerStyle:{
        backgroundColor:"white",
      }}}/>
    </Stack.Navigator>
    
  );
}

export default function Router1() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}

