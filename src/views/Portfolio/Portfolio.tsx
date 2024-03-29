import React from 'react';
import { makeStyles } from '@material-ui/core';
import PortfolioCanvasContainer from '../../components/three/PortfolioThree/PortfolioCanvasContainer';

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
