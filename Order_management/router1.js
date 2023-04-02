import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Router2 from './router2';
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

