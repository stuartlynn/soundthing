import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './store'
import styled from 'styled-components';
import SoundsSpace from './components/SoundsSpace'
import ControllsContainer from './components/ControllsContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

const Layout  = styled.div`
  display: flex;
  padding: 20px 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Layout>
            <SoundsSpace />
            <ControllsContainer />
          </Layout>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
