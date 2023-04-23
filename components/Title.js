import React from 'react'
import { StyleSheet ,Text} from 'react-native'
export default function Title(props) {
  return (
   <Text style={styles.title}>{props.children}</Text>
  )
}
const styles=StyleSheet.create({

    title:{
        fontSize:34,
        fontFamily:"monospace",
            fontWeight:'bold',
            color:'yellow',
            textAlign:'center',
            borderWidth:2,
            borderColor:'#ddb52f'
        }

})