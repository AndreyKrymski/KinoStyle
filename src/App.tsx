import React, { FC } from 'react';
import { Grid } from '@mui/material';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import mainImage from './images/main.png';
import Pages from './components/Pages';

interface IProps {
  children: React.ReactNode;
}

const App: FC<IProps> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        maxWidth: '1570px',
        margin: '0 auto',
        color: 'white',
      }}
    >
      <Grid
        container
        sx={{
          backgroundImage: `url(${mainImage})`,
          backgroundPosition: '50% 0',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
        }}
      >
        <Header />
        <Nav />
        {children}
        <Pages />
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;
