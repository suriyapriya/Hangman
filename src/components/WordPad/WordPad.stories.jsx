import React, { useState, useEffect, useRef } from 'react';
import { WordPad } from './WordPad';
import { storiesOf } from '@storybook/react';

const WordPadContainer = props => {
  return <div {...props} style={{ width: '450px', ...props.style }}></div>;
};

const GuessWordLoop = ({word = "", letter = "", reveal = 0}) => {
  const [curLetter, setCurLetter] = useState("");

  useEffect(() => {
    setCurLetter(letter);
    }, [curLetter]);

  return (
    <WordPadContainer>
    <WordPad word={word} letter={curLetter} reveal={reveal}/>
    </WordPadContainer>
  );
}

storiesOf('WordPad', module)
  .add('Default', () => {
    return (
      <WordPadContainer>
        <WordPad word="TESTY" letter="" reveal={0}/>
      </WordPadContainer>
    );
  })
  .add('Guess Correct Letter "S" in "TEST"', () => {
      return (
        <WordPadContainer>
          <GuessWordLoop word="TEST" letter="S"/>
        </WordPadContainer>
      );
    })
  .add('Guess Wrong Letter "W" in "TEST"', () => {
        return (
          <WordPadContainer>
            <GuessWordLoop word="TEST" letter="W"/>
          </WordPadContainer>
        );
      })
  .add('Reveal Answer "TEST"', () => {
        return (
          <WordPadContainer>
            <GuessWordLoop word="TEST" letter="W" reveal={1}/>
          </WordPadContainer>
        );
    })
