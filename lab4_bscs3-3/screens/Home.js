import React from 'react';
import {
  View, Button, StyleSheet, ImageBackground, Text
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://wallpaperaccess.com/full/1719636.png'}}>
    <View style = { styles.container}>
      <Text style = { styles.text}>
      JOIN THE
BATTLE OF THE ANCIENTS{'\n\n'}
Every day, millions of players worldwide enter the battle as one of over a hundred Dota Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and there's always a new strategy or tactic to discover. It's completely free to play and always will be – start defending your ancient now.{'\n\n'}
SEE WHAT'S NEW
      </Text>
    </View>
    <View style = { styles.container}> 
        <AntDesign.Button 
          name = "profile"
          size = {18}
          color = "black"
          backgroundColor="#B22222"
           onPress={() => navigation.navigate('Profile')} >
          Profile
          </AntDesign.Button>
        </View>
      </ImageBackground>
  );
}

export default Home;

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
    marginBottom: 120,
    color: 'white'
    }
});