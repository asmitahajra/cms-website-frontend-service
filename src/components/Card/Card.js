import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = ({ word, sentence }) => (
  <div data-testid="Card">
    <div className={styles.card}>
      {/* <div>{JSON.stringify(vocab)}</div> */}
      <p className={styles.word}>{word}</p>
      <p className={styles.sentence}>{sentence}</p>
    </div>

  </div>
);

Card.propTypes = {
  word: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired,
};

export default Card;
