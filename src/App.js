import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import styled from 'styled-components'

import { fetchPages, fetchSettings, fetchToken } from './actions';

import Header from './modules/Header'
import Footer from './modules/Footer'
import Menu from './modules/Menu'
import Main from './pages/Main';
import Page from './pages/Page';
import Quiz from './pages/Quiz';

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchSettings()
    this.props.fetchPages()
    this.props.fetchToken()
  }

  render() {
    return (
      <Router>
        <Container>
          <Header />
          <Menu />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/quiz" component={Quiz} />
            <Route path="/:slug" component={Page} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  pages: state.pageReducer.pages
})

const mapDispatchToProps = dispatch => ({
  fetchSettings: () => dispatch(fetchSettings()),
  fetchPages: () => dispatch(fetchPages()),
  fetchToken: () => dispatch(fetchToken())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
