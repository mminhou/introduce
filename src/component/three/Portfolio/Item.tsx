import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html, Image, useScroll } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state, damp } from './util';
import { Button, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  buttonContainer: {
    visibility: (showButton) => (showButton ? 'visible' : 'hidden'),
    textAlign: 'left',
  },
  detailViewButton: {
    width: 224,
    height: 60,
    top: -30,
    left: -112,
    borderRadius: '30px',
    background: '#0A9DAA',
    color: '#FFFFFF',
  },
}));

interface ItemProps {
  index: number;
  position: [x: number, y: number, z: number];
  scale: any;
  url: any;
  c?: THREE.Color;
}

const Item = ({ index, position, scale, url, c = new THREE.Color() }: ItemProps) => {
  const ref = useRef(null);
  const buttonRef = useRef(null);
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, setHover] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const classes = useStyle(showButton);

  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length);
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta);
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta);
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta);
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta);
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta);
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta);
    ref.current.material.color.set(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1);
  });

  useFrame((state, delta) => {
    if (clicked !== null && clicked === index) {
      buttonRef.current.visible = true;
      setShowButton(true);
    }
    if (clicked !== null && clicked !== index) {
      buttonRef.current.visible = false;
      setShowButton(false);
    }
    if (clicked === null) {
      buttonRef.current.visible = false;
      setShowButton(false);
    }
    if (clicked !== null && index < clicked) buttonRef.current.position.x = damp(buttonRef.current.position.x, position[0] - 2, 6, delta);
    if (clicked !== null && index > clicked) buttonRef.current.position.x = damp(buttonRef.current.position.x, position[0] + 2, 6, delta);
    if (clicked === null || clicked === index) buttonRef.current.position.x = damp(buttonRef.current.position.x, position[0], 6, delta);
  });

  const click = () => {
    state.clicked = index === clicked ? null : index;
  };

  const showDetailView = () => {
    /**
     * TODO: click시 link 이동
     */
    alert('click');
  };

  const over = () => {
    setHover(true);
  };

  const out = () => {
    setHover(false);
  };

  return (
    <>
      <Image ref={ref} position={position} scale={scale} url={url} onClick={click} onPointerOver={over} onPointerOut={out} />
      <mesh position={position} ref={buttonRef} visible={false}>
        <Html className={classes.buttonContainer}>
          <Button color='secondary' variant='contained' className={classes.detailViewButton} onClick={showDetailView}>
            SHOW MORE
          </Button>
        </Html>
      </mesh>
    </>
  );
};

export default Item;
