import React, {useEffect, useRef} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";

export default function Model() {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF('./assets/shibainu_posed.glb');
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
  })

  return (
    <group ref={group} dispose={null} scale={5}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.body_Circle_1.geometry} material={materials['Material.001']}/>
        <mesh geometry={nodes.body_Circle_2.geometry} material={nodes.body_Circle_2.material}/>
      </group>
      <mesh
        geometry={nodes.eye_R_Circle008.geometry}
        material={nodes.eye_R_Circle008.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.eye_L_Circle012.geometry}
        material={nodes.eye_L_Circle012.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.collar_Circle005_1.geometry} material={nodes.collar_Circle005_1.material}/>
        <mesh geometry={nodes.collar_Circle005_2.geometry} material={materials.collar}/>
      </group>
      <mesh
        geometry={nodes.teeth_Circle011.geometry}
        material={nodes.teeth_Circle011.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
};

useGLTF.preload(require('../../assets/shibainu_posed.glb'));
