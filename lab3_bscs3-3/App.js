// Rafael T. Escullar
// Glen Mirandilla
// BSCS 3-3

import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import SampleModal from './components/SampleModal';


export default function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
      <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://images.alphacoders.com/446/thumb-1920-446372.jpg'}}>
        <View style= {styles.container}>
          <TouchableOpacity onPress={() => setIsModalOpen(true)} style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
          <SampleModal 
          visible={isModalOpen}
           onClose={() => setIsModalOpen(false)} />
        </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  }, 
   button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 500,
  },
   buttonText: {
    fontSize: 20,
    color: 'black',
  },

});
