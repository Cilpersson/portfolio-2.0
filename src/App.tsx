import React from 'react';
import { Background, Screen } from './styles/stylesheet';
import { Navbar } from './components/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/Home';
import { Social } from './pages/Social';
import { Technical } from './pages/Technical';
import { Personal } from './pages/Personal';

export const App: React.FC = () => {
  return (
    <Router>
      <Background>
        <Screen>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/personal" exact component={Personal} />
          <Route path="/tech" exact component={Technical} />
          <Route path="/social" exact component={Social} />
        </Screen>
      </Background>
    </Router>
  );
};
