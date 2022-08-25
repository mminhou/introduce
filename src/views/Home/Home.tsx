import React from 'react';
import { makeStyles } from '@material-ui/core';
import CanvasContainer from '../../components/three/CanvasContainer';

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
      <CanvasContainer />
    </div>
  );
};

export default Home;
