import * as THREE from 'three';
import { proxy } from 'valtio';
import gridaboard from '../../../assets/images/1.jpg';
import tmp from '../../../assets/images/2.jpg';

const imageList = [gridaboard, tmp, tmp];

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: [1, 2, 3].map((u) => imageList[u - 1]),
});
