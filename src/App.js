import React, { useState, useRef } from 'react';
import { Hangman, LetterPad, WordPad, Result} from './components';
import randomWord from 'random-words';

import './App.css';

const App = () => {
  const [incorrectGuessCount, setIncorrectGuessCount] = useState(0);
  const totalIncorrectGuessCount = 10;
  const word = useRef(randomWord().toUpperCase());
  const [curWord, setCurWord] = useState(word.current);
  const [finalCode, setFinalCode] = useState(0);
  const [currentLetter, setCurrentLetter] = useState("");

  /**
   * Handle child component click events
   * "Letter" & "Play Again" events
   */
  const handleChange = (e) => {
    // Handling Letter Click
    if(     e.target.className !== "undefined"
        &&  e.target.className.split(" ")[0] === "letter") {

          if(!word.current.includes(e.target.id)) {
            if(incorrectGuessCount+1 === totalIncorrectGuessCount) {
              setIncorrectGuessCount(incorrectGuessCount+1);
              setFinalCode(2);
            } else {
              setIncorrectGuessCount(incorrectGuessCount+1);
            }
          } else {
            let reg = new RegExp(e.target.id, 'g');
            word.current = word.current.replace(reg, '');
            if(word.current.length === 0) {
              setFinalCode(1);
            }
          }
          setCurrentLetter(e.target.id);
    }
    //Handling "Play Again"
    if(     e.target.className !== "undefined"
        &&  e.target.className.split(" ")[0] === "playAgain") {
          setCurrentLetter("");
          setIncorrectGuessCount(0);
          setFinalCode(0);
          word.current = randomWord().toUpperCase();
          setCurWord(word.current);
    }
  }
  return (
    <div className="App">
      <div className="container" onClick={handleChange}>
        <h1 className="gameTitle">React Hangman</h1>
          {
            finalCode > 0 ?
            <Result code={finalCode}></Result> : ""
          }
          <WordPad word={curWord} letter={currentLetter} reveal={finalCode > 0 ? 1 : 0}></WordPad>
          <Hangman incorrectGuessCount={incorrectGuessCount}></Hangman>
          {
            finalCode === 0 ?
            <LetterPad/> : ""
          }
      </div>
    </div>
  );
};

export default App;
