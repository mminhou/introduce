import React from 'react';
import { makeStyles } from '@material-ui/core';
import HomeCanvasContainer from '../../components/three/HomeCanvasContainer';

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
      <HomeCanvasContainer />
    </div>
  );
};

export default Home;
