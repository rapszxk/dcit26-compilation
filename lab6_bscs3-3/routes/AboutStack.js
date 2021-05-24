import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import NavigationDrawerStructure from './NavigationDrawerStructure';

const Stack = createStackNavigator();



function AboutStack ({navigation}) {
  return (
    
      <Stack.Navigator initialRouteName="About">
          <Stack.Screen name="About" component={About} options={{
          title: 'ABOUT',
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
      </Stack.Navigator>
     
  );
}

export default AboutStack;
