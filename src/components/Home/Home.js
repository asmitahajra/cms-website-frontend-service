import React, { useEffect } from 'react';
import apiUtil from '../../utils/api';

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Card from '../Card/Card';
// import styles from './Home.scss';

// const Home = ({ vocab }) => (
//   <div data-testid="Home">
//     <p className={styles.heading}>welcome back</p>
//     <div className={styles.homeContainer}>
//       <div className={styles.words}>
//         {vocab.map((item) => (
//           <Card
//             key={item.id}
//             word={item.word}
//             sentence={item.sentence}
//           />
//         ))}
//       </div>
//     </div>
//     <div className={styles.AddWordBtn}>
//       <Link to="/add-word"><button type="button">+</button></Link>
//     </div>
//   </div>
// );

const Home = () => {
  useEffect(async () => {
    // const registerUser = await axios.post(
    //   'http://localhost:7000/register',
    //   {
    //     username: 'billy',
    //     password: 'xyz',
    //     user_details: { ttt: 'abc' },
    //   },
    // );
    // console.log(registerUser);
    // const body = {
    //   username: 'iiiii',
    //   password: 'xyz',
    // };
    // try {
    //   const jwtTokenData = await apiUtil.getJwtToken(body);
    //   if (jwtTokenData) {
    //     localStorage.setItem(
    //       'token',
    //       jwtTokenData.data.token,
    //     );
    //   }
    //   console.log(jwtTokenData);
    // } catch (e) {
    //   console.log('this is error');
    // }
    // const jwtTokenData = await apiUtil.getJwtToken(body);
    const successMessage = await apiUtil.getSuccessMessage();
    console.log(successMessage.data);
    // setName(successMessage.data);
    // console.log(successMessage.data.message);
  }, []);

  return (
    <div>
      Home page
    </div>
  );
};

// vocab
// [
//   { addWordData: { word: 'cogent', sentence: 'belie elish' } },
//   { addWordData: { word: 'cogent', sentence: 'belie elish' } },
//   { addWordData: { word: 'belie', sentence: 'ghjkm' } },
//   { addWordData: { word: 'abate', sentence: 'ertyu' } },
//   { addWordData: { word: 'compilant', sentence: 'belie elish' } },
// ];

// singleVocab
// [
//     {"word":"cogent","sentence":"belie elish"},
//     {"word":"cogent","sentence":"belie elish"},
//     {"word":"belie","sentence":"ghjkm"},
//     {"word":"abate","sentence":"ertyu"},
//     {"word":"compilant","sentence":"belie elish"}
// ]

// const wordShape = PropTypes.shape({
//   word: PropTypes.string,
//   sentence: PropTypes.string,
// });

// const vocabShape = PropTypes.shape({
//   addWordData: PropTypes.shape(wordShape),
// });

// Home.propTypes = {
//   vocab: PropTypes.arrayOf(PropTypes.objectOf(vocabShape)).isRequired,
// };

export default Home;
