import React from 'react';
import { Button, CustomProvider, Container } from 'rsuite';
import logo from './logo.svg';
import 'rsuite/dist/rsuite.min.css';
import './App.css';

function App() {
  return (
    <CustomProvider theme="light">
      <Container className="app">
        <header className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <Button href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Button>
        </header>
      </Container>
    </CustomProvider>
  );
}

export default App;