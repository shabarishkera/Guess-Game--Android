import {Text, View, StyleSheet} from "react-native";
import Title from "../components/Title";
import Numbercontainer from "../components/Numbercontainer";
import Primary from "../components/primaryButton";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";
let min = 1;
let max = 100;
const GameScreen = (props) => {
   
   

    const generateRandom = (min, max, exclude) => {
        const n = Math.floor(Math.random() * (max - min)) + min;
        if (n === exclude) 
            return Math.floor(Math.random() * (max - min)) + min;
        
        return n;
    }
  
    const initial = generateRandom(1,100, props.number);
    const[cururennumber,setcurrentnumer]=useState(initial);
    useEffect(()=>{
if(cururennumber==props.number)
props.gameHandler(true);
    },[cururennumber] )
    const nextguesshandler = (direction)=> {
        if (direction === 'lower') {
            max =cururennumber;
          

        }
      else{
            min=cururennumber+1;
           

        }
        const newnguess= generateRandom(min,max,cururennumber);
        setcurrentnumer(newnguess);
console.log(min,max);
props.settry(props.tries+1);
console.log(props);
    }
    return (

        <View style={
            styles.screen
        }>
            <Title>GUESS THE NUMBER</Title>
            <Numbercontainer>{cururennumber}</Numbercontainer>
            <View>
                <Primary onPress={nextguesshandler.bind(this,'lower')}><Entypo name="minus" size={24} color="white" /></Primary>
                <Primary onPress={nextguesshandler.bind(this,'grater')}><AntDesign name="plus" size={24} color="white" /></Primary>
            </View>
        </View>

    )


}
export default GameScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50
    }


})
