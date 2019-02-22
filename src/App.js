import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { fetchPages, fetchSettings } from './actions';

import Header from './modules/Header'
import Main from './pages/Main';

class App extends Component {
  componentDidMount() {
    this.props.fetchSettings()
    this.props.fetchPages()
  }

  render() {
    return (
      <Router>
        <>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        </>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  fetchSettings: () => dispatch(fetchSettings()),
  fetchPages: () => dispatch(fetchPages())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
