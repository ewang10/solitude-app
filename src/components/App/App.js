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
import EditJournal from '../Journal/EditJournal/EditJournal';
//import DateCategory from '../Journal/DateCategory/DateCategory';
//import Filter from '../Journal/Filter/Filter';
import TokenService from '../../services/token-service';
import IdleService from '../../services/idle-service';
import AuthApiService from '../../services/auth-api-service';
import PublicOnlyRoute from '../Util/PublicOnlyRoute';
import PrivateRoute from '../Util/PrivateRoute';
import { JournalProvider } from '../../contexts/JournalContext';
//import posterImg from '../../../public/CalmPoster.PNG';
import './App.css';

class App extends Component {
  componentDidMount() {
    //set idle callback function to logout a user
    //from being idle
    IdleService.setIdleCallback(this.logoutFromIdle);
    //if user is logged in
    if (TokenService.hasAuthToken()) {
      //Register event listners that tracks user interactivity
      IdleService.registerIdleTimerResets();
      //Queue the callback function to have token refresh just
      //before it expires
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthApiService.postRefresh()
      });
    }
  }
  componentWillUnmount() {
    //Unregister event listeners that tracks for user interactivity
    IdleService.unregisterIdleResets();
    //Remove refresh token request
    TokenService.clearCallbackBeforeExpiry();
  }
  logoutFromIdle = () => {
    TokenService.clearAuthToken();
    //Clear the queue, and unregister event listeners that tracks
    //for user interactivity
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unregisterIdleResets();
    //Since React won't know that the token has been removed from
    //session storage, we need to tell React to re-render
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <TopNav />
        <main>

          <div className='video-container'>
            <video className='calm-bg-video' poster='/CalmPoster.PNG' autoPlay muted loop>
              <source src='/Calm.mp4' type='video/mp4' />
            </video>
          </div>

          <Route exact path="/" component={Main} />
          <PublicOnlyRoute path='/register' component={RegistrationForm} />
          <PublicOnlyRoute path='/login' component={LoginForm} />
          <PrivateRoute path='/search' component={MeditationSearch} />
          <JournalProvider>
            <PrivateRoute exact path='/journals' component={Journal} />
            <PrivateRoute path='/journals/date-category/:id' component={Journal} />
            <PrivateRoute path='/journals/journal/:id' component={JournalMain} />
            <PrivateRoute path='/journals/add-date-category' component={AddDateCategory} />
            <PrivateRoute path='/journals/add-journal' component={AddJournal} />
            <PrivateRoute path='/journals/edit-journal/:id' component={EditJournal} />
          </JournalProvider>
        </main>
        <PrivateRoute path='/search' component={BottomNav} />
        <PrivateRoute path='/journals' component={BottomNav} />
      </div>
    );
  }
}

export default App;
