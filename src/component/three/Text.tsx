import React, { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
const roboto = require('../../assets/font/Roboto_Bold.json');

extend({ TextGeometry });

const Text3d = ({ position, text, isRotate }) => {
  const mesh = useRef(null);
  const rotationDegree = isRotate ? Math.random() * 0.01 : 0;

  useFrame(() => {
    mesh.current.rotation.x += rotationDegree;
    mesh.current.rotation.y += rotationDegree;
    mesh.current.rotation.z += rotationDegree;
    mesh.current.geometry.center();
  });

  const font = new FontLoader().parse(roboto);
  const textOptions = {
    font,
    size: 14,
    height: 0,
    style: 'normal',
    bevelSize: 0.75,
    bevelThickness: 0.5,
    bevelEnabled: true,
    anchor: { x: 0, y: 0, z: 0 },
  };

  return (
    <mesh position={[position.x, position.y, position.z]} ref={mesh}>
      <textGeometry args={[text, textOptions]}></textGeometry>
      <meshStandardMaterial attach='material' color='black' />
    </mesh>
  );
};

export default Text3d;
