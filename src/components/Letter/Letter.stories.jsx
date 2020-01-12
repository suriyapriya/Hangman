import React from 'react';
import { Letter } from './Letter';
import { storiesOf } from '@storybook/react';

const LetterContainer = props => {
  return <div {...props} style={{ width: '450px', ...props.style }}></div>;
};

storiesOf('Letter', module)
  .add('Enable Letter', () => {
    return (
      <LetterContainer>
        <Letter letter="A" disabled={false}/>
      </LetterContainer>
    );
  })
  .add('Disable Letter', () => {
    return (
      <LetterContainer>
        <Letter letter="A" disabled={true}/>
      </LetterContainer>
    );
  })
