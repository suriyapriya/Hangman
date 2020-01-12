import React from 'react';
import { Button } from '../Button';
import './Letter.css';

/**
 * Create the Button for the given letter with enabled or disabled option.
 * ```javascript
 * <Letter letter="A" disabled=true/>
 * ```
 */
export const Letter = ({letter="", disabled=false}) => {
  let style = "primary";
  if(disabled === true) {
    style = "secondary";
  }
  return (
    <Button key={letter} id={letter} className="letter" btnStyle={style} disabled={disabled}>{letter}</Button>
  );
}
