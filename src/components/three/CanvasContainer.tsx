import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Light from './Light';
import Loader from './Loader';
import Text3d from './Text';
import { theme } from '../../theme';
import Model from './Model';
import Model2 from './Model2';

const useStyle = makeStyles(() => ({
  canvasContainer: {
    height: window.innerHeight - 98.68,
  },
}));

const CanvasContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 100], up: [0, 1, 0], aspect: 5 }}>
        <fog attach='fog' args={['black', 25, 40]} />
        <color attach='background' args={[theme.palette.background.default]} />
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Model2 />
          <Light />
          {/* <Text3d position={[0, 0, 0]} text={"I'm Mminhou"} isRotate={false} />
          <Text3d position={[420, -50, -300]} text={'Minho'} isRotate={true} />
          <Text3d position={[250, 200, -300]} text={'Front-End'} isRotate={true} />
          <Text3d position={[50, 230, -300]} text={'Full-Stack'} isRotate={true} />
          <Text3d position={[-300, 200, -300]} text={'Javascript'} isRotate={true} />
          <Text3d position={[-400, 70, -300]} text={'Typescript'} isRotate={true} />
          <Text3d position={[-50, -230, -300]} text={'webpack'} isRotate={true} />
          <Text3d position={[150, -220, -300]} text={'babel'} isRotate={true} />
          <Text3d position={[350, -160, -300]} text={'HTML/CSS'} isRotate={true} />
          <Text3d position={[-400, -100, -300]} text={'ReactJS'} isRotate={true} />
          <Text3d position={[-100, 240, -300]} text={'Redux'} isRotate={true} />
          <Text3d position={[400, 100, -300]} text={'AWS'} isRotate={true} />
          <Text3d position={[-250, -200, -300]} text={'Firebase'} isRotate={true} /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
