import React, { useCallback, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state, damp } from './util';

const Minimap = () => {
  const group = useRef<THREE.Group>();
  const scroll = useScroll();

  const { urls } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);

  const points = useMemo(() => [new THREE.Vector3(0, -0.5, 0), new THREE.Vector3(0, 0.5, 0)], []);
  const onUpdate = useCallback((self) => self.setFromPoints(points), [points]);

  useFrame((state, delta) => {
    group.current.children.forEach((child, index) => {
      const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length);
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta);
    });
  });

  return (
    <group ref={group}>
      {urls.map((_, i) => (
        <lineSegments key={i} position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}>
          <bufferGeometry attach='geometry' onUpdate={onUpdate} />
          <lineBasicMaterial attach='material' color={'white'} />
        </lineSegments>
      ))}
    </group>
  );
};

export default Minimap;
