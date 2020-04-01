import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import GenreDetails from './components/GenreDetails/GenreDetails';
import GenreFancyItem from './components/GenreFancyItem/GenreFancyItem';
import FancyItem from './components/FancyItem/FancyItem';
import Routes from './components/Routing/Routes';
import GlobalStyle from '../src/styles/applicationStyles/globalStyles';
import GenreFancyItemState from './Context/genreFancyITem/GenreFancyItemState';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  return (
    <GenreFancyItemState>
      <Router>
        <Switch>
          <Route exact path="/" component={GenreFancyItem} />
          <Route component={Routes} />
        </Switch>
      </Router>
      <GlobalStyle />
    </GenreFancyItemState>
  );
}

export default App;
