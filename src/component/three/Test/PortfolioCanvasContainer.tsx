import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { theme } from '../../../theme';
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
      <Canvas camera={{ position: [0, 0, 20], up: [0, 0, 0] }}>
        <fog attach='fog' args={['black', 25, 40]} />
        <color attach='background' args={[theme.palette.background.default]} />
        <Suspense fallback={<Loader />}>
          <Light />
          <Items />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PortfolioCanvasContainer;
