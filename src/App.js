import React, { Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from './helpers/history';
import Header from './components/Header/header';
import './App.scss';
import Main from './pages/Main/main';
import Logister from './pages/Logister/logister';

class App extends React.Component {
  state = {
    isMobile: true
  };

  componentDidMount() {
    // Handle window resize
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
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
          <Fragment>
            <Router history={history}>
              <Header />
              <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/login' render={(props) => <Logister isLogin={true} />} />
                <Route exact path='/register' render={(props) => <Logister isLogin={false} />} />
              </Switch>
            </Router>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default App;
