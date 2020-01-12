import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { FaThumbsUp, FaThumbsDown} from 'react-icons/fa';

export const ResultWrapper = ({message, code}) => {

  const handlePlayAgain = () => {
    console.log("handle Play Again");
  }
  return (
        [<h1>
        { message }
        <br/>
        { code > 0 ? (code === 1 ? <FaThumbsUp/> : <FaThumbsDown/>) : "" }
        </h1>,
        <Button key={code} className="playAgain" btnStyle="primary" onClick={handlePlayAgain}>Play again</Button>]
      );
}

ResultWrapper.propTypes = {
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
