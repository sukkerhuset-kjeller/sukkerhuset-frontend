import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { fetchPages, fetchSettings } from './actions';

import Sidebar from './modules/Sidebar';
import Main from './pages/Main';
import Page from './pages/Page';
import Quiz from './pages/Quiz';
import Privacy from './pages/Privacy';

const PageLayout = styled.div`
  display: flex;
`;

const Container = styled.div`
  max-width: calc(100vw -250px);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const App = (props) => {
  useEffect(() => {
    props.fetchSettings();
    props.fetchPages();
  }, []);

  return (
    <Router>
      <PageLayout>
        <Sidebar />
        <Container>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/privacy" component={Privacy} />
            <Route path="/:slug" component={Page} />
          </Switch>
        </Container>
      </PageLayout>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  pages: state.pageReducer.pages,
  token: state.facebookReducer.token,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSettings: () => dispatch(fetchSettings()),
  fetchPages: () => dispatch(fetchPages()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(App));
