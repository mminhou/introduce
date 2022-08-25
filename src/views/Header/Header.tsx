import React from 'react';
import { makeStyles } from '@material-ui/core';
import LogoSvg from '../../assets/svg/shibainu.svg';
import NavLayer from '../NavLayer/NayLayer';
import { NavLink } from 'react-router-dom';

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
    width: '60px',
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrap}>
      <NavLink to='/'>
        <img src={LogoSvg} className={classes.imgStyle}></img>
      </NavLink>
      <NavLayer />
    </div>
  );
};

export default Header;
