import {Text, View, StyleSheet} from "react-native";
import Title from "../components/Title";
import Numbercontainer from "../components/Numbercontainer";
import Primary from "../components/primaryButton";
import { useEffect, useState } from "react";
const GameScreen = (props) => {
    let min = 1;
    let max = 100;

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
    }
    return (

        <View style={
            styles.screen
        }>
            <Title>GUESS THE NUMBER</Title>
            <Numbercontainer>{cururennumber}</Numbercontainer>
            <View>
                <Primary onPress={nextguesshandler.bind(this,'lower')}>-</Primary>
                <Primary onPress={nextguesshandler.bind(this,'grater')}>+</Primary>
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
