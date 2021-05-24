import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationDrawerStructure from './NavigationDrawerStructure';
import Home from '../screens/Home';
import Profile from '../screens/Profile';


const Stack = createStackNavigator();



function HomeStack ({navigation})  {
  return (
    
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
          title: 'HOME', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#B22222',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Profile" component={Profile} options={{
          title: 'PROFILE', 
  
          headerStyle: {
            backgroundColor: '#B22222',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         
      </Stack.Navigator>
    
  );
}

export default HomeStack;
