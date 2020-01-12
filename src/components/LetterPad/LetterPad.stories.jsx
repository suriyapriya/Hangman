import { LetterPad } from './LetterPad';
import { storiesOf } from '@storybook/react';
import React from 'react';

const LetterPadContainer = props => {
  return <div {...props} style={{ width: '450px', ...props.style }}></div>;
};

storiesOf('LetterPad', module)
  .add('Show LetterPad', () => {
    return (
      <LetterPadContainer>
        <LetterPad/>
      </LetterPadContainer>
    );
  })
