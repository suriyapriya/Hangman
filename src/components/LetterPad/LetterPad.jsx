import React, { useState, useEffect } from 'react';
import { Letter } from '../Letter';

/**
 * Create and Update LetterPad based on the corresponding letter click event
 *
 * ```javascript
 * <LetterPad />
 * ```
 */
export const LetterPad = () => {
  const [letterList, updateLetterList] = useState([]);

  /**
   * Create and initialize LetterPad by choosing "not disabled" option
   */
  const createLetterPad = () => {
    let pad = [];
    for(let i = 0; i < 26; i++) {
      let codeNo = i + "A".charCodeAt(0);
      let disabled = false;
      pad.push({letter : getLetter(codeNo), disabled : disabled});
    }
    updateLetterList(pad);
  }

  /**
   * Handle letter click event in the LetterPad
   * Update the chosen letter to disabled state.
   */
  const handleLetterClick = (e) => {
    let id = e.target.id;
    updateLetterList(letterList.map(item => {
      if(item.letter === id) {
         return {...item, disabled : true};
      }
      return item;
    }));
  }

  /**
   * Handy function to get letter for Ascii code
   */
  const getLetter = (code) => {
    let letter = String.fromCharCode(code);
    return letter;
  };

  useEffect(createLetterPad, []);

  return (
    <div className="LetterPad" onClick={handleLetterClick}>
      {letterList.map(item => {
        return (
          <Letter key={item.letter} letter={item.letter} disabled={item.disabled}/>
        );
      })}
    </div>
  );
};
