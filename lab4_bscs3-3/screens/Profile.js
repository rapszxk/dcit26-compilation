import React, {useState} from 'react';
import {
  View, Button, StyleSheet, ImageBackground, Text, Image, TouchableOpacity
} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import SampleModal from '../components/SampleModal';

function Profile  ({navigation})  {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
     <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://wallpaperaccess.com/full/1719636.png'}}>
    <View style = { styles.container}>
    <Image style= {styles.picture} source={{uri: 'https://pngimage.net/wp-content/uploads/2018/06/valve-logo-png-4.png'}}/>
      <Text style = { styles.text}>
   Valve Corporation, also known as Valve Software, is an American video game developer, publisher, and digital distribution company headquartered in Bellevue, Washington. It is the developer of the software distribution platform Steam and the Half-Life, Counter-Strike, Portal, Day of Defeat, Team Fortress, Left 4 Dead, and Dota series.
      </Text>
    </View>
    <View style= {styles.container}>
          <TouchableOpacity onPress={() => setIsModalOpen(true)} style={styles.button}>
        <Text style={styles.buttonText}>Click here for All Hereos</Text>
      </TouchableOpacity>
          <SampleModal 
          visible={isModalOpen}
           onClose={() => setIsModalOpen(false)} />
        </View>
    <View style = { styles.container}>
        <FontAwesome.Button 
          name="book" 
          size={24} 
          color="black"
          backgroundColor="#B22222"
        onPress={() => navigation.navigate('About')} >
        About
        </FontAwesome.Button>
    </View>
    </ImageBackground>
  );
}

export default Profile;

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
    color: 'white'
    },
     picture:{
    width: 240,
    height: 95,  
    marginBottom: 8
  },
  button: {
    backgroundColor: "#B22222",
    padding: 5,
    borderRadius: 5,
    marginTop: 400,
  },
   buttonText: {
    fontSize: 15,
    color: 'black',
  },
});