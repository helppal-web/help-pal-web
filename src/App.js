import React, { Fragment } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import history from './helpers/history';
import './App.scss';
import AppLayout from './pages/AppLayout';
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
              <Switch>
                <Route exact path='/' render={() => <Redirect to={'/app'} />} />
                <Route exact path='/app' component={AppLayout} />
                <Route exact path='/login' render={() => <Logister logister={'login'} />} />
                <Route exact path='/register' render={() => <Logister logister={'register'} />} />
              </Switch>
            </Router>
          </Fragment>
        </div>
      </div>
    );
  }
}

export default App;
