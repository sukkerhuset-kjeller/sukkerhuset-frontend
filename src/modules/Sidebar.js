import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';

const SidebarContainer = styled.div`
  background: var(--gray);
  height: 100vh;
  width: 250px;
  flex: 0 0 220px;
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: column nowrap;
`;

const Sidebar = (props) => {
  return (
    <SidebarContainer>
      <Header />
      <Menu />
      <Footer />
    </SidebarContainer>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settingsReducer.settings,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(React.memo(Sidebar)),
);
