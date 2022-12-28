import React, { useRef } from 'react';
import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
const roboto = require('../../assets/font/Roboto_Bold.json');

extend({ TextGeometry });

interface Text3Props {
  position: [x: number, y: number, z: number];
  text: string;
  isRotate: boolean;
}

const Text3d = ({ position, text, isRotate }: Text3Props) => {
  const mesh = useRef(null);
  const rotationDegree = isRotate ? Math.random() * 0.01 : 0;

  const clock = new THREE.Clock();
  const time = clock.getDelta();

  useFrame(() => {
    mesh.current.rotation.x = time;
    mesh.current.rotation.y = time;
    mesh.current.rotation.z = time;
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
    <mesh position={position} ref={mesh}>
      <textGeometry attach='geometry' args={[text, textOptions]} />
      <meshStandardMaterial attach='material' color='black' />
    </mesh>
  );
};

export default Text3d;
