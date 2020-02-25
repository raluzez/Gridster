import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo/Logo';
import Header from './containers/Header/Header';
import Grid from './containers/Grid/Grid';

const Container = styled.div`
  width: 30%;
  margin: auto;
  font-family: 'Comfortaa', serif;
  @media (max-width: 1270px) {
    width: 50%;
  }
  @media (max-width: 775px) {
    width: 75%;
  }
`;

const App = () => {
  return (
    <Container>
      <Logo />
      <Header />
      <Grid />
    </Container>
  );
};

export default App;
