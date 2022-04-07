import { AppBar, makeStyles } from '@material-ui/core';
import React from 'react';
import Header from '../component/layout/Header';

const useStyle = makeStyles((theme) => ({
  mainBackground: {
    width: '100%',
    height: '100%',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Home = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainBackground}>
      <AppBar position='relative' color='transparent' elevation={0}>
        <Header />
      </AppBar>
    </div>
  );
};

export default Home;
