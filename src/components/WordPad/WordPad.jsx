import React, { useState, useEffect } from 'react';
import {Letter} from '../Letter';
import PropTypes from 'prop-types';

/**
 * WordPad to show the randomly chosen word for the game
 * Initially it is hidden, reveal one by one based on letter guess
 * Reveal option to show the letters all at once (Mostly in the end of
 * the game)
 *
 * ```javascript
 * <WordPad word="TEST" letter="S" reveal=0/>
 * ```
 */
export const WordPad = ({word="", letter = "", reveal = 0}) => {
  let count = 0;
  const [wordStatus, setWordStatus] = useState([]);

  /**
   * Create wordPad using the given word.
   * keeping "wordStatus" to know if the letter is dsiplayed or not.
   */
  const createWordPad = () => {
    let tempWordHolder = [];
    for(let i = 0; i < word.split('').length; i++) {
      tempWordHolder.push({character : word[i], show : reveal});
    }
    setWordStatus(tempWordHolder);
  }

  /**
   * Updating wordStatus whenever the letter is chosen or guessed.
   */
  useEffect(()=>{
      if(letter === "" || reveal === 1) {
        createWordPad();
      } else {
        setWordStatus(wordStatus.map(item => {
          if(item.character === letter) {
            return {character: item.character, show : 1};
          }
          return item;
        }));
    }
  },[letter]);


  /**
   * Updating wordStatus to show all
   * or remaining letters in the word
   * when the reveal option is set to 1.
   */
  useEffect(() => {
    if(reveal === 1) {
    setWordStatus(wordStatus.map(item => {
        return {character: item.character, show : reveal};
      }));
    }
  }, [reveal]);


  return (
    <div className="wordPad">
      {
        wordStatus.map((item) => {
        count++;
        return (
          <Letter key={item.character + "-" + count} letter={(item.show === 1)? item.character : " "} disabled={true}/>
        );
        })
      }
    </div>
  );
}

WordPad.propTypes = {
  letter: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};
