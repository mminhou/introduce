import React, { useRef } from 'react';

const Light = () => {
  const ref = useRef();
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight ref={ref} intensity={0.5} position={[5, 10, 7.5]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
    </>
  );
};

export default Light;
