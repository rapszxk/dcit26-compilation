// BSCS 3-4
// Escullar, Rafael T.
// Mirandilla, Glen V.

import React from 'react';
import {View, Text} from 'react-native';

export default function App() {
    return (
        <View style = {{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          background: 'lightblue',
          

        }}>
        <Text style={{
          color: 'yellow',
          fontSize: 20,
          fontFamily: 'TimeNewRoman',
          fontWeight: 'bold'
        
        
        }}> Hello Word!</Text>
        </View>
    )
}
