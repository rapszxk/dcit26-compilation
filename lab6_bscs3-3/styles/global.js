import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#F5FFFA',
    resizeMode: 'cover',
  },
  center: {
       flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 150

  },
     scrollViewCon:{
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: '#C0C0C0',
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 16,
      marginTop: 16,
  },
  imgBg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
   image: {   
    margin: 2,  
    height: 150, 
    width: 150,
    borderRadius: 150/2  
  }, 
 
  buttonPos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 140,
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: '#B22222',
    borderRadius: 8,
    alignItems: 'center',
    padding: 3,

  },
  buttontext: {
    fontFamily: 'Tahoma',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 5,
  },
    nametxt: {
    fontSize: 20,
    fontWeight: 'bold',       
    fontFamily: 'Tahoma',
    color: '#F5FFFA',

  },
   profnametxt: {
    fontSize: 20,
    fontWeight: 'bold',       
    fontFamily: 'Tahoma',
    color: 'black',
    marginBottom: 20,

  },
  nametxt1: {
    fontSize: 12,
    fontWeight: 'bold',       
    fontFamily: 'Tahoma',
    marginBottom:1,
  },
   titletxt: {
    fontSize: 16,
    fontWeight: 'bold',       
    fontFamily: 'Tahoma',
    color: '#F5FFFA',
  },
   icon:{
    backgroundColor: '#B22222',
    flexDirection: 'row',
    alignItems: 'center',

  },
});
