import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import BottomNav from '../BottomNav/BottomNav';
import Main from '../Main/Main';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import MeditationSearch from '../MeditationSearch/MeditationSearch';
import Journal from '../Journal/Journal';
import AddDateCategory from '../Journal/AddDateCategory/AddDateCategory';
import AddJournal from '../Journal/AddJournal/AddJournal';
import JournalMain from '../Journal/JournalMain/JournalMain';
//import DateCategory from '../Journal/DateCategory/DateCategory';
//import Filter from '../Journal/Filter/Filter';
import './App.css';

class App extends Component {
  render() {
    const journal = {
      id: 1,
      categoryid: 1,
      name: 'journal 1',
      duration: 5,
      beforemood: "stressed",
      aftermood: "relieved",
      date: new Date(),
      goal: 'stress relieve',
      content: ''
  };
    return (
      <div className="App">
        <TopNav />
        <main>
          <Route exact path="/" component={Main} />
          <Route path='/register' component={RegistrationForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/search' component={MeditationSearch} />
          <Route exact path='/journals' component={Journal} />
          <Route path='/journals/date-category/:id' component={Journal} />
          <Route 
            path='/journals/journal/:id' 
            render = {() => <JournalMain journal={journal}/>}
          />
          <Route path='/journals/add-date-category' component={AddDateCategory} />
          <Route path='/journals/add-journal' component={AddJournal} />
        </main>
        <Route path='/search' component={BottomNav} />
        <Route path='/journals' component={BottomNav} />
      </div>
    );
  }
}

export default App;
