// Rafael T. Escullar
// Glen V. Mirandilla
// BSCS 3-3


import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Button, ImageBackground} from 'react-native';


export default function App() {
const [outputText, setOutputText] = useState('');
const [submittedText, setSubmittedText] = useState([]);
const [count, setCount] = useState(1);

 const itemInputHandler = (enteredText) => {
     setOutputText(enteredText);
 }

 const addItemHandler = () => {
     setOutputText(count + 1);
     setSubmittedText(currentOutput => [...currentOutput, outputText]);
     setOutputText('');
}

  return (
    <ImageBackground 
    style= {{
      flex: 1,
    }} 
    source = {{uri: 'https://r1.ilikewallpaper.net/iphone-11-wallpapers/download/101639/phoenix-valorant-4k-2020-iphone-11-wallpaper-ilikewallpaper_com.jpg'}}>
    <View style={styles.container}>
     <View style = {styles.inputcontainer}>
   <TextInput placeholder="Enter text"
   onChangeText = {itemInputHandler}
     value = {outputText}
    style = {styles.inputtextBox} 
    />
    <Button title="Add" onPress={addItemHandler}/>
    </View>
      <View>
            {submittedText.map((outputText) => (
              <View > 
              <Text style={styles.outputBox}> {outputText}</Text>
              </View>
            ))}
    
    
      </View>
     
    </View>
    </ImageBackground>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
  },
   inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 1,
    bottom: 45,
  },
  inputtextBox:{
    borderColor: 'black', 
    borderBottomWidth: 2,
    padding:8,
  },
  outputBox: {
    width: 200, 
    padding: 7,
    borderColor:'#008080',
    borderRadius: 5,
    borderWidth: 2,
    margin: 4,
    backgroundColor: '#F5F5F5',
    
  },
});
