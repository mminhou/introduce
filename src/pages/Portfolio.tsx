import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import PortfolioCanvasContainer from '../component/three/Portfolio/PortfolioCanvasContainer';

const useStyle = makeStyles((theme) => ({
  mainBackground: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Portfolio = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainBackground}>
      <PortfolioCanvasContainer />
    </div>
  );
};

export default Portfolio;
