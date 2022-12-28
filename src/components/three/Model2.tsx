import React, { Suspense, useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

export default function Model2() {
  const group = useRef();
  // const { nodes, materials, asset, scene } = useGLTF('./assets/shibainuT.glb') as any;
  // const res = useGLTF('./assets/shibainuT.glb') as any; // animation
  const res2 = useGLTF('./assets/shibainu.glb') as any;
  const res = useGLTF('./assets/shibainu7.glb') as any;
  const { scene, materials, animations } = res2;
  const { ref, mixer, names, actions, clips } = useAnimations(animations, res2.scene);

  useEffect(() => {
    console.log(res);
    console.log(res2);
    console.log(actions);
    // res2.materials = res.materials;
    actions?.Sit.play();
  }, []);

  return (
    <Suspense fallback={null}>
      <group ref={group} dispose={null} scale={30}>
        <primitive object={res2.scene} />
      </group>
    </Suspense>
  );
}

useGLTF.preload(require('../../assets/glb/shibainu.glb'));
useGLTF.preload(require('../../assets/glb/shibainu7.glb'));
