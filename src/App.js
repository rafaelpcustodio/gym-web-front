import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './_config/routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
