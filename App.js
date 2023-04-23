import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreeen';
import { SafeAreaView } from 'react-native';
import GameOver from './screens/GameOver';
export default function App() {
  const [number,setnumer]=useState(null);
  const changescr=(number1)=>
  { setnumer(number1)};

const [gameover,setgameover]=useState(false)
const gameHandler=(isOver)=>
{
  setgameover(isOver);
}
  let screen=<StartScreen set={changescr}/>;
  if(number)
  screen=<GameScreen gameHandler={gameHandler} number={number}/>
  if(gameover)
  screen=<GameOver/>
 
  return (
    <LinearGradient colors={['#72063c','#ddb52f']} style={styles.container}>
   <ImageBackground imageStyle={styles.background} resizeMode='cover' style={styles.container} source={require('./assets/images/bg.jpg')}>
   <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
</ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   

  },
  background:{
    opacity:.5
  }
});
