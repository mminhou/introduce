import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Light from './Light';
import Loader from './Loader';
import Text3d from './Text';
import { theme } from '../../theme';

const useStyle = makeStyles(() => ({
  canvasContainer: {
    height: window.innerHeight - 98.68,
  },
}));

const HomeCanvasContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 100], up: [0, 1, 0], aspect: 5 }}>
        <fog attach='fog' args={['black', 25, 40]} />
        <color attach='background' args={[theme.palette.background.default]} />
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Light />
          <Text3d position={[0, 5, 30]} text={"I'm Mminhou"} isRotate={false} />

          <Text3d position={[-250, 80, -100]} text={'Front-End'} isRotate={false} />
          <Text3d position={[-560, 100, -350]} text={'Typescript'} isRotate={true} />
          <Text3d position={[-560, 50, -350]} text={'Javascript'} isRotate={true} />
          <Text3d position={[-560, 0, -350]} text={'React'} isRotate={true} />
          <Text3d position={[-560, -50, -350]} text={'Redux'} isRotate={true} />
          <Text3d position={[-560, -100, -350]} text={'Styled-component'} isRotate={true} />
          <Text3d position={[-560, -150, -350]} text={'Canvas'} isRotate={true} />

          <Text3d position={[250, 80, -100]} text={'Back-End'} isRotate={false} />
          <Text3d position={[560, 100, -350]} text={'Python'} isRotate={true} />
          <Text3d position={[560, 50, -350]} text={'Djangoframework'} isRotate={true} />
          <Text3d position={[560, 0, -350]} text={'Mysql'} isRotate={true} />

          <Text3d position={[0, -50, -100]} text={'iOS'} isRotate={false} />
          <Text3d position={[0, -180, -350]} text={'Swift'} isRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HomeCanvasContainer;
