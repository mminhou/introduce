import * as THREE from 'three';
import { proxy } from 'valtio';
import theSalt from '../../../assets/images/theSalt.jpg';
import introduce from '../../../assets/images/introduce.jpg';
import gridaboard from '../../../assets/images/gridaboard.jpg';
import webPenSdk from '../../../assets/images/webPenSdk.jpg';

const projectList = [
  {
    companyId: 'neolab',
    projectId: 'webPenSdk',
    image: webPenSdk,
  },
  {
    companyId: 'neolab',
    projectId: 'gridaboard',
    image: gridaboard,
  },
  {
    companyId: 'personal',
    projectId: 'introduce',
    image: introduce,
  },
  {
    companyId: 'personal',
    projectId: 'theSalt',
    image: theSalt,
  },
]

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: projectList.map((obj) => obj),
});
