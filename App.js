import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreeen';
import { SafeAreaView } from 'react-native';
import GameOver from './screens/GameOver';
export default function App() {
  const [tries,settry]=useState(0);
  const [number,setnumer]=useState(null);
  const changescr=(number1)=>
  { setnumer(number1)};

const [gameover,setgameover]=useState(false)
const gameHandler=(isOver)=>
{
  if(isOver==false)
  setnumer(0);
  setgameover(isOver);
}
  let screen=<StartScreen set={changescr}/>;
  if(number)
  screen=<GameScreen settry={settry} tries={tries}  gameHandler={gameHandler} number={number}/>
  if(gameover)
  screen=<GameOver   gameHandler={gameHandler} tries={tries}/>
 
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
