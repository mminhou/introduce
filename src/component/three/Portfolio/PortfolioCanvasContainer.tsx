import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import { Canvas } from '@react-three/fiber';
import Items from './Items';
import Light from '../Light';
import Loader from '../Loader';

const useStyle = makeStyles(() => ({
  canvasContainer: {
    height: window.innerHeight - 98.68,
  },
}));

const PortfolioCanvasContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 5], up: [0, 0, 0] }}>
        <color attach='background' args={['#151515']} />
        <Suspense fallback={<Loader />}>
          <Light />
          <Items />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PortfolioCanvasContainer;
