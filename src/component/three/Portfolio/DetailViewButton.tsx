import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state, damp } from './proxy';
import { Button, makeStyles } from '@material-ui/core';
import { history } from '../../../history';

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


const DetailViewButton = ({ index, position, url }) => {
  const ref = useRef(null);
  const { clicked } = useSnapshot(state);
  const [showButton, setShowButton] = useState(false);
  const classes = useStyle(showButton);

  useFrame((state, delta) => {
    if (clicked !== null && clicked === index) {
      ref.current.visible = true;
      setShowButton(true);
    }
    if (clicked !== null && clicked !== index) {
      ref.current.visible = false;
      setShowButton(false);
    }
    if (clicked === null) {
      ref.current.visible = false;
      setShowButton(false);
    }
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta);
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta);
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta);
  });

  const showDetailView = () => {
    history.push(`/portfolio/${url.companyId}/${url.projectId}`);
  };

  return (
    <mesh position={position} ref={ref} visible={false}>
      <Html className={classes.buttonContainer}>
        <Button color='secondary' variant='contained' className={classes.detailViewButton} onClick={showDetailView}>
          SHOW MORE
        </Button>
      </Html>
    </mesh>
  );
};

export default DetailViewButton;
