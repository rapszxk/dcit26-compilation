import React from 'react';
import {
  View, Button, StyleSheet, ImageBackground, Text
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const About = ({navigation}) => {
  return (
    <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://wallpaperaccess.com/full/1719636.png'}}>
    <View style = { styles.container}>
      <Text style = { styles.text}>
    Dota 2 is a multiplayer online battle arena video game developed and published by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III: Reign of Chaos

{'\n\n'}
      </Text>
    </View>
    <View style = { styles.container}>
    
        <Ionicons.Button 
          name = "arrow-back-circle"
          size = {24}
          color = "black"
          backgroundColor="#B22222"
          onPress={() => navigation.goBack()}>
          Back
        </Ionicons.Button>
        </View>
         </ImageBackground>
  );
}

export default About;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
      text:{
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 110,
    color: 'white'
    }
});