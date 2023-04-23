import React from 'react'
import { Text, View,StyleSheet,Image,BackHandler } from 'react-native'
import {IonIcons} from '@expo/vector-icons'
import Title from '../components/Title'
import Primary from '../components/primaryButton'
export default function  GameOver(props) {
  const replayhandler=()=>
  {
props.gameHandler(false);
  }
  const exithandler=()=>
  {
BackHandler.exitApp();
  }
  return (
   
<View style={styles.container}>
<Title>Game OVER</Title>
<Image style={{width:'100%',height:'100%'}} source={require('../assets/images/gameover.jpg')}/>
<View style={styles.feedback} >
  <Text style={styles.summarytext} >Computer took  {props.tries}  tries to guess the number </Text>

<Primary onPress={replayhandler}>Replay</Primary>
<Primary onPress={exithandler}>Exit App </Primary>

</View>
</View>
  )
}

const  styles=StyleSheet.create({
container:{
flex:1,

marginTop:70
},
feedback:{
  position:'absolute',
  zIndex:55,
  top:'65%',
display:'flex',
justifyContent:'center',
left:'0%',
alignItems:'center',
//backgroundColor:'#72063c',
padding:33,
opacity:.7
},
buttoncontainer:
{
  display:'flex',
flex:1,
width:'100%',
justifyContent:'space-even'

},
summarytext:{
fontSize:23,
color:'gray',
fontFamily:'monospace'
}

})