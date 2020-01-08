import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import BottomNav from '../BottomNav/BottomNav';
import Main from '../Main/Main';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import MeditationSearch from '../MeditationSearch/MeditationSearch';
import Journal from '../Journal/Journal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <main>
          <Route exact path="/" component={Main} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/search' component={MeditationSearch} />
          <Route path='/journals' component={Journal} />
        </main>
        <Route path='/search' component={BottomNav} />
        <Route path='/journals' component={BottomNav} />
      </div>
    );
  }
}

export default App;
