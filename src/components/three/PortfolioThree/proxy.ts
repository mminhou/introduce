import * as THREE from 'three';
import { proxy } from 'valtio';
import theSalt from '../../../assets/images/theSalt.jpg';
import introduce from '../../../assets/images/introduce.jpg';
import gridaboard from '../../../assets/images/gridaboard.jpg';
import pensdk from '../../../assets/images/pensdk.jpg';
import neostudio from '../../../assets/images/neostudio.jpg';

const projectList = [
  {
    companyId: 'neolab',
    projectId: 'neostudio',
    image: neostudio,
  },
  {
    companyId: 'neolab',
    projectId: 'pensdk',
    image: pensdk,
  },
  {
    companyId: 'neolab',
    projectId: 'gridaboard',
    image: gridaboard,
  },
];

export const damp = THREE.MathUtils.damp;
export const state = proxy({
  clicked: null,
  urls: projectList.map((obj) => obj),
});
