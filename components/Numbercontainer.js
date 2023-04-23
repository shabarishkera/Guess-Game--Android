import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
export default function Numbercontainer(props) {
  return (
   <View style={styles.container}>
<Text style={styles.numbertext}>{props.children}</Text>
   </View>
  )
}

const styles=StyleSheet.create({
container:{
    borderRadius:20,
    padding:24,
    margin:24,
    borderWidth:2,
    borderColor:'#ddb523',
    alignItems:'center',
    justifyContent:'center'
},
numbertext:
{
color:'white',
fontSize:32,
fontWeight:'bold'
}


})