import React, { useState, useEffect } from 'react';
import { ResultWrapper } from './ResultWrapper.jsx'
import './Result.css'

/**
 * Create Result with final output for the game based on corresponding code
 *
 * ```javascript
 * <Result code={1} /> // 1 - Success
 * <Result code={2} /> // 2 - failure
 * ```
 */
export const Result = ({ code = 0 }) => {
  const [finalMessage, setFinalMessage] = useState("");

  // Update finalMessage based on the corresponding code
  useEffect(() => {
    if(code === 1) {
      setFinalMessage("Hoorah.. Escaped");
    }
    if(code === 2) {
      setFinalMessage("Ouch.. Hanged");
    }
  }, [code]);

  return (
    <div className="result">
    {
      code > 0 ?
      <ResultWrapper message={finalMessage} code={code}></ResultWrapper> : ""
    }
    </div>
  );
}
