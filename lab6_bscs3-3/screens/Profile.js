import React from 'react';
import { Text, ScrollView, ImageBackground, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = ({ navigation, route }) => {
	const data = route.params;
	
	return (
     <ImageBackground
      style={globalStyles.imgBg}
      source={{
        uri:
          'https://i.ebayimg.com/images/g/-1QAAOxy0x1TUyma/s-l300.jpg',
      }}>
		<ScrollView style={globalStyles.scrollViewCon}>
        <View style={globalStyles.container}>
            <Image style = {globalStyles.image} 
                  source={{uri: data.picture.large}} /> 
            <Text style={globalStyles.profnametxt}>
              {data.name.title} {data.name.first} {data.name.last}
            </Text>
        </View>
        <View style={globalStyles.container2}>
          <View style={globalStyles.icon}>
            <Ionicons name="ios-person-circle-sharp" size={24} color="white" />
            <Text style={globalStyles.titletxt}> ABOUT</Text>
          </View>
            <View>
              <Text style={globalStyles.nametxt1}> Age: {data.dob.age} </Text>
              <Text style={globalStyles.nametxt1}> Birthday: {data.dob.date} </Text>
              <Text style={globalStyles.nametxt1}> Gender: {data.gender} </Text>
            <Text style={globalStyles.nametxt1}> {""}
             Address: {data.location.street.number} {data.location.street.name}
            {data.location.street.city} {data.location.street.state}
            {data.location.street.country}
            </Text>
            </View>
            <View style={globalStyles.icon}>
            <Fontisto name="email" size={24} color="white" /> 
            <Text style={globalStyles.titletxt}> CONTACT</Text>
            </View>
            <View>
            <Text style={globalStyles.nametxt1}> Email: {data.email} </Text>
            <Text style={globalStyles.nametxt1}> Phone: {data.phone} </Text>
            </View>
            <View style={globalStyles.icon}>
            <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={24} color="white" />
            <Text style={globalStyles.titletxt}> OTHERS </Text>
            </View>
            <View>
            <Text style={globalStyles.nametxt1}> Date Registered: {data.registered.date} </Text>
            </View>
        </View>
        

		</ScrollView>
    </ImageBackground>
);

};
export default Profile;