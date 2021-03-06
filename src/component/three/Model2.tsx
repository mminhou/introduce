import React, {useEffect, useRef} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";

export default function Model2() {
  const group = useRef();
  const {nodes, materials, animations, asset} = useGLTF('./assets/shibainu.glb') as any;
  const {actions} = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
  })

  return (
    <group ref={group} dispose={null} scale={5}>
      <group position={[0, 0.3, -0.22]} rotation={[2.73, 0, 0]}>
        <group position={[0, 0.05, 0]} rotation={[-0.19, 0, 0]}>
          <group position={[0, 0.04, 0]} rotation={[-0.15, 0, 0]}>
            <group position={[0, 0.04, 0]} rotation={[-0.14, 0, 0]}>
              <group position={[0, 0.03, 0]} rotation={[-0.86, 0, 0]}>
                <group position={[0, 0.04, 0]} rotation={[0.12, 0, 0]}>
                  <group position={[0, 0.04, 0]} rotation={[0.02, 0, 0]}>
                    <group position={[0, 0.04, 0]} rotation={[-0.03, 0, 0]}>
                      <group position={[0, 0.03, 0]} rotation={[-0.14, 0, 0]}>
                        <group position={[0, 0.03, 0]} rotation={[-0.31, 0, 0]}>
                          <group position={[0, 0.04, 0]} rotation={[-0.42, 0, 0]}/>
                        </group>
                        <group position={[0.03, -0.01, -0.01]} rotation={[1.35, 0.39, -0.86]}>
                          <group position={[-0.06, 0.09, -0.02]} rotation={[0.88, 0.26, 0.94]}>
                            <group position={[0, 0.06, 0]} rotation={[-0.51, 0.1, 0.05]}>
                              <group position={[0, 0.03, 0]} rotation={[-0.88, -0.09, 0.07]}/>
                            </group>
                          </group>
                        </group>
                        <group position={[-0.03, -0.01, -0.01]} rotation={[1.35, -0.39, 0.86]}>
                          <group position={[0.06, 0.09, -0.02]} rotation={[0.88, -0.26, -0.94]}>
                            <group position={[0, 0.06, 0]} rotation={[-0.51, -0.1, -0.05]}>
                              <group position={[0, 0.03, 0]} rotation={[-0.88, 0.09, -0.07]}/>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group position={[0.04, 0.02, 0.1]} rotation={[2.43, 0.08, 0.02]}>
                    <group position={[0, 0.06, 0]} rotation={[-1.02, -0.07, -0.09]}>
                      <group position={[0, 0.03, 0]} rotation={[-0.96, -0.01, 0.06]}/>
                    </group>
                  </group>
                  <group position={[-0.04, 0.02, 0.1]} rotation={[2.43, -0.08, -0.02]}>
                    <group position={[0, 0.06, 0]} rotation={[-1.02, 0.07, 0.09]}>
                      <group position={[0, 0.03, 0]} rotation={[-0.96, 0.01, -0.06]}/>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh
        name="Circle"
        geometry={nodes.Circle.geometry}
        material={materials.Material}
        morphTargetDictionary={nodes.Circle.morphTargetDictionary}
        morphTargetInfluences={nodes.Circle.morphTargetInfluences}
      />
      <mesh
        name="Circle_1"
        geometry={nodes.Circle_1.geometry}
        material={nodes.Circle_1.material}
        morphTargetDictionary={nodes.Circle_1.morphTargetDictionary}
        morphTargetInfluences={nodes.Circle_1.morphTargetInfluences}
      />
      <mesh geometry={nodes.Circle005.geometry} material={nodes.Circle005.material}/>
      <mesh geometry={nodes.Circle005_1.geometry} material={materials.collar}/>
      <mesh geometry={nodes.eye_L.geometry} material={nodes.eye_L.material}/>
      <mesh geometry={nodes.eye_R.geometry} material={nodes.eye_R.material}/>
      <mesh
        name="teeth"
        geometry={nodes.teeth.geometry}
        material={nodes.teeth.material}
        morphTargetDictionary={nodes.teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.teeth.morphTargetInfluences}
      />
    </group>
  )
};

useGLTF.preload(require('../../assets/shibainu.glb'));
