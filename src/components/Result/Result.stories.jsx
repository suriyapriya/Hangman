import { Result } from './Result';
import { storiesOf } from '@storybook/react';
import React from 'react';

const ResultContainer = props => {
  return <div {...props} style={{ width: '450px', ...props.style }}></div>;
};

storiesOf('Result', module)
  .add('Default', () => {
    return (
      <ResultContainer>
        <Result code={0}/>
      </ResultContainer>
    );
  })
  .add('Show Success', () => {
    return (
      <ResultContainer>
        <Result code={1}/>
      </ResultContainer>
    );
  })
  .add('Show Failure', () => {
    return (
      <ResultContainer>
        <Result code={2}/>
      </ResultContainer>
    );
  })
