//CSS
import './App.css';
//React
import{useCallback, useEffect, useState} from "react";

//data
import {wordList, wordsList} from "./data/words";

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickWordAndCategory = () => {
    //pegar alguma categoria
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pegar alguma palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return{word, category}
  }
  // iniciar o jogo secret word
  const startGame = () => {
  //Buscar palavra e categoria
    const {word, category } = pickWordAndCategory();

  //criando array de letras
    let wordLetters = word.split('');

    wordLetters = wordLetters.map((l) => l.toLowerCase());
  
  
    console.log(word, category);
    console.log(wordLetters);

    setGameStage(stages[1].name);
  };


  //Input do jogador da letra
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //Reiniciar o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };


  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
