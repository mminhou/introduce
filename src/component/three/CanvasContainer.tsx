import React from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {Suspense} from "react";
import Light from "./Light";
import Loader from "./Loader";
import Model from "./Model";
import Model2 from "./Model2";

export default function CanvasContainer() {
  return (
    <Canvas>
      <Suspense fallback={<Loader/>}>
        <OrbitControls/>
        <Light />
        {/*<Model />*/}
        <Model2 />
      </Suspense>
    </Canvas>
  );
}
