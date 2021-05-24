import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, Image, ImageBackground, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() { 
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => { 
        setData(json.results[0]);
        console.log(json.results[0]);
  })
      .catch((error) => console.log(error)) 
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return (
    <ImageBackground
      style={globalStyles.imgBg}
      source={{
        uri:
          'https://i.ebayimg.com/images/g/-1QAAOxy0x1TUyma/s-l300.jpg',
      }}>

          <View style={globalStyles.center}>
            {isLoading ? ( <ActivityIndicator size="large" color="#00FFFF" /> ) : (
              <>
              <TouchableOpacity 
                onPress={() => navigation.navigate('Profile', data)}> 
                <Image style = {globalStyles.image} 
                  source={{uri: data.picture.large}} /> 
              </TouchableOpacity>       
              <Text style={globalStyles.nametxt}>
                {data.name.first} {data.name.last} 
              </Text>      
              </>       
            )}     
          </View>  
      <View style={globalStyles.buttonPos}>
        <TouchableOpacity 
          style={globalStyles.buttonStyle}
          onPress={fetchRandomData}   > 
          <Text style={globalStyles.buttontext}>RANDOM USER</Text> 
        </TouchableOpacity>  
      </View>  
    </ImageBackground>
  );
};

export default Home;
