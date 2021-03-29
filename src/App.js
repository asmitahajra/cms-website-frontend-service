import './App.css';

import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

// import Utils from './utils/localStorageUtils';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';

// import Home from './components/Home/Home';
// import AddWord from './components/AddWord/AddWord';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const abc = 1;
  // const [vocab, setVocab] = useState([]);

  // useEffect(() => {
  //   const localStorageData = Utils.getWordsFromLocalStorage('vocab');
  //   if (localStorageData) { setVocab(localStorageData); }
  // }, []);

  // useEffect(() => {
  //   Utils.saveWordToLocalStorage('vocab', vocab);
  // }, [vocab]);

  // const addNewVocab = (newVocab) => {
  //   console.log('now we gotta add this');
  //   console.log({ newVocab });
  //   const newVocabitems = [...vocab, newVocab];
  //   setVocab(newVocabitems);
  //   // console.log('new', newVocabitems);
  //   // setVocab(newVocabitems);
  // };

  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
