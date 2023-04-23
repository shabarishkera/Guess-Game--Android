import { View,Text, Pressable,StyleSheet } from "react-native";

export default function Primary  (props)
{

return (
    <View style={styles.buttonoutercontainer}>
    <Pressable onPress={props.onPress} style={({pressed})=>pressed?[styles.buttoncontaier,styles.pressed]:styles.buttoncontaier}  android_ripple={{color:'#640233'}}>

<Text style={styles.buttontext}>{props.children}</Text>


</Pressable>

</View>
);

}
const styles=StyleSheet.create({
    buttonoutercontainer:{
        borderRadius:29,
        margin:4,
        overflow:'hidden',
        elevation:7,
    },
buttoncontaier:
{
backgroundColor:'#72063c',

padding:10,

elevation:4,
color:'white'
},
buttontext:{
color:'white',
textAlign:'center'

},
pressed:{
    opacity:.6
}



})