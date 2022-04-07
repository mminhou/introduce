import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import LogoTextSvg from '../../assets/svg/logoText.svg';
import NavLayer from './NayLayer';

const useStyle = makeStyles((theme) => ({
  wrap: {
    background: theme.custom.white[100],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '16px 24px',
    backdropFilter: 'blur(4px)',
    borderBottom: '1px solid ' + theme.custom.grey[2],
    justifyContent: 'space-between',
  },
  imgStyle: {
    borderRadius: '8px',
    marginLeft: '16px',
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrap}>
      <img src={LogoTextSvg} className={classes.imgStyle}></img>
      <NavLayer />
    </div>
  );
};

export default Header;
