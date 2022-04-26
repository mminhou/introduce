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

const CanvasContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 100], up: [0, 1, 0] }}>
        <fog attach='fog' args={['black', 25, 40]} />
        <color attach='background' args={[theme.palette.background.default]} />
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Light />
          {/*<Model />*/}
          {/* <Model2 /> */}
          <Text3d position={{ x: 0, y: 0, z: 0 }} text={"I'm Mminhou"} isRotate={false} />
          <Text3d position={{ x: -200, y: -200, z: -300 }} text={'Minho'} isRotate={true} />
          <Text3d position={{ x: 200, y: 200, z: -300 }} text={'Front-End'} isRotate={true} />
          <Text3d position={{ x: -300, y: 200, z: -300 }} text={'Javascript'} isRotate={true} />
          <Text3d position={{ x: 300, y: -200, z: -300 }} text={'Typescript'} isRotate={true} />
          <Text3d position={{ x: 300, y: -200, z: -300 }} text={'HTML'} isRotate={true} />
          <Text3d position={{ x: 300, y: -200, z: -300 }} text={'CSS'} isRotate={true} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasContainer;
