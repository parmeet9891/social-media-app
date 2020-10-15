import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Feed from './components/Feed/Feed';
import UserDetails from './components/UserDetails/UserDetails';
import * as userActions from './actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path = '/' component = {Signin}/>
          <Route exact path = '/signup' component = {Signup}/>
          <Route exact path="/feed" component={Feed}/>
          <Route exact path="/user/:userid" component = {UserDetails}/>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
      user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
