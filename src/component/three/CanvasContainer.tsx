import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Light from './Light';
import Loader from './Loader';
import Text3d from './Text';

export default function CanvasContainer() {
  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <OrbitControls />
        <Light />
        {/*<Model />*/}
        {/* <Model2 /> */}
        <Text3d />
      </Suspense>
    </Canvas>
  );
}
