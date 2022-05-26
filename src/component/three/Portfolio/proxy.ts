import * as THREE from 'three';
import { proxy } from 'valtio';
import theSalt from '../../../assets/images/1.jpg';
import introduce from '../../../assets/images/2.jpg';
import gridaboard from '../../../assets/images/3.jpg';
import penSdk from '../../../assets/images/4.jpg';

const projectList = [
  {
    company: 'neolab',
    image: penSdk,
    project: 'penSdk',
  },
  {
    company: 'neolab',
    image: gridaboard,
    project: 'gridaboard',
  },
  {
    company: 'personal',
    image: introduce,
    project: 'introduce',
  },
  {
    company: 'personal',
    image: theSalt,
    project: 'theSalt',
  },
]

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: projectList.map((obj) => obj.image),
});
