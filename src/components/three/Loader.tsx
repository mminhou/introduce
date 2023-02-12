import { Html, useProgress } from '@react-three/drei';
import React from 'react';
import ProgressBar from '../buttons/ProgressBar';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <ProgressBar value={progress} />
    </Html>
  );
};

export default Loader;
