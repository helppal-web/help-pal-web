import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './helpers/history';
import './App.scss';
import AppLayout from './pages/AppLayout';
import Logister from './pages/Logister/logister';
import Main from './pages/Main/main';
import Profile from './pages/Profile/Profile';
import *  as languageUtil from './helpers/language';

class App extends React.Component {
  state = {
    isMobile: true
  };
  componentDidMount() {
    // Handle window resize
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    this.restoreLanguage();
  }

  restoreLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && savedLang !== this.props.i18n.language) {
      languageUtil.changeLanguage(this.props.i18n, savedLang)
    }
  }

  resize() {
    let currentMobileState = (window.innerWidth <= 576);
    if (currentMobileState !== this.state.isMobile) {
      this.setState({ isMobile: currentMobileState });
    }
  }
  render() {
    return (
      <div className={this.state.isMobile ? 'mobile' : 'desktop'}>
        <div className="App">
          <Router history={history}>
            <Switch>
              <Route exact path='/' render={() => <Redirect to={'/app'} />} />
              <AppLayout exact path='/app' component={Main} />
              <AppLayout exact path='/app/profile' component={Profile} />
              <Route exact path='/login' render={() => <Logister logister={'login'} />} />
              <Route exact path='/register' render={() => <Logister logister={'register'} />} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
