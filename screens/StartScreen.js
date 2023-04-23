import { TextInput, View,Text,StyleSheet, Alert } from "react-native";
import Primary from "../components/primaryButton";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";
import Title from "../components/Title";

export default function Start({set})
{
    const [entered,setenterd]=useState('');
    const numerchanged=(text)=>
    {
setenterd(text);

    }
const conform=()=>
{
const numer=parseInt(entered);
if(isNaN(numer)||numer<=0||numer>99)
{
Alert.alert("Invalid number","number has to be a valid and between 1 and 99")
setenterd("");
return;
}
set(numer);
}
 return (
<View>
    <View style={{marginTop:50,alignItems:'center'}}>
    <Title >GUESS GAME</Title>
    </View>
<View style={styles.inputContainer}>

<TextInput
value={entered}
onChangeText={numerchanged}
 style={styles.nuberInput} maxLength={2} keyboardType="number-pad" />
<View style={styles.buttonscon}>
    <View style={styles.button}>
<Primary>Reset</Primary>
</View>
<View style={styles.button}>
<Primary onPress={conform} >confirm</Primary>
</View>
</View>
</View>
</View>
 );


}
const styles=StyleSheet.create({
inputContainer:{
alignItems:'center',
marginHorizontal:25,
borderRadius:8,

marginTop:100,
padding:16,
backgroundColor:'#72063c',
elevation:9
},
nuberInput:{

    height:50,
    width:50,
    fontSize:32,
    borderColor:'#ddb52f',
    borderBottomWidth:2,
    marginVertical:8,
    textAlign:'center',
    color:'white'
},
buttonscon:{
    flexDirection:'row'
},
button:{
    flex:1
}


})