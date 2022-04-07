import React from 'react';
import { Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';

const useStyle = makeStyles((theme) => ({
  navStyle: {
    height: '50px',
    backgroundColor: theme.custom.white[50],
    display: 'flex',
  },
  caption: {
    padding: '4px',
    color: '#121212',
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0.25px',
    width: '120px',
    marginRight: '16px',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const NavLayer = () => {
  const classes = useStyle();
  return (
    <div className={classes.navStyle}>
      <div className={classes.sectionDesktop}>
        <Button className={classes.caption}>Posts</Button>
        <Button className={classes.caption}>Portfolio</Button>
        <Button className={classes.caption}>Open Source</Button>
        <Button className={classes.caption}>Resume</Button>
        <Button className={classes.caption}>Ideas</Button>
      </div>
      <div className={classes.sectionMobile}>
        <IconButton>
          <Menu />
        </IconButton>
      </div>
    </div>
  );
};

export default NavLayer;
