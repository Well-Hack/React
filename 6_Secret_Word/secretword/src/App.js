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

  const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState ([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    //pegar alguma categoria
    const categories = Object.keys(words)
    const category = 
              categories[Math.floor(Math.random() * Object.keys(categories).length)];

    console.log(category);

    //pegar alguma palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)];
    console.log(word);

    return{word, category};
  },[words]);
  // iniciar o jogo secret word
  const startGame = useCallback(() => {
  //Limpar letras
  clearLetterStates();
  //Buscar palavra e categoria
    const {word, category } = pickWordAndCategory();

  //criando array de letras
    let wordLetters = word.split('');

    wordLetters = wordLetters.map((l) => l.toLowerCase());
  
  
    console.log(word, category);
    console.log(wordLetters);

   //fill states
   setPickedWord(words);
   setPickedCategory(category);
   setLetters(wordLetters);

   setGameStage(stages[1].name)
  }, [pickWordAndCategory]);
   
  
 
  //Input do jogador da letra
  const verifyLetter = (letter) => {
    
    const normalizedLetter = letter.toLowerCase()

    //checar se a letra ja foi usada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //push guessed letter or remove a guess

    if (letters.includes(normalizedLetter)) {
        setGuessedLetters((actualGuessedLetters) => [
          ...actualGuessedLetters, normalizedLetter
        ]);
    }else {
      setWrongLetters((actualWrongLetters) => [
          ...actualWrongLetters, normalizedLetter
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

    const clearLetterStates = () => {
      setGuessedLetters([])
      setWrongLetters([])
    };
  //Checar se as tentativas terminaram


  useEffect(() =>{

    if(guesses <= 0){
      //resetar todos os states
      clearLetterStates()

      setGameStage(stages[2].name);
    }
    },[guesses])

  //Checar condição de vitória
  useEffect(() => {
    const uniqueLetters = [... new Set(letters)];
    //win condition
    if(guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name){
      //add score
      setScore ((actualScore) => actualScore += 100)

      //reiniciar com nova palabra
      startGame();
    }
  }, [guessedLetters, letters, startGame, gameStage]);

  //Reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };


  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/>}
      {gameStage === "end" && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
