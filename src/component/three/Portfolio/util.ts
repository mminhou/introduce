import * as THREE from 'three';
import { proxy } from 'valtio';
import theSalt from '../../../assets/images/1.jpg';
import introduce from '../../../assets/images/2.jpg';
import gridaboard from '../../../assets/images/3.jpg';
import penSdk from '../../../assets/images/4.jpg';

const imageList = [penSdk, gridaboard, introduce, theSalt];

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: [0, 1, 2, 3].map((u) => imageList[u]),
});
