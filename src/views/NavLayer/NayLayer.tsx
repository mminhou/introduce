import React, { useState } from 'react';
import { makeStyles, Box, Divider, Drawer, IconButton, List, ListItem, Typography } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import LinkButton from '../../components/buttons/LinkButton';
import LogoSvg from '../../assets/svg/shibainu.svg';

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
  imgStyle: {
    width: '30%',
  },
  listItem: {
    padding: 0,
  },
  drawerButton: {
    width: '100%',
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
  const [open, setOpen] = useState<boolean>(false);

  const navigations = [
    { title: 'HOME', to: '/' },
    { title: 'PORTFOLIO', to: '/portfolio' },
    { title: 'OPEN SOURCE', to: '/openSource' },
    { title: 'RESUME', to: '/resume' },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  const list = () => (
    <Box sx={{ width: 300 }}>
      <List>
        <img src={LogoSvg} className={classes.imgStyle}></img>
        <Typography variant='h6'>MMINHOU</Typography>
      </List>
      <Divider />
      <List>
        {navigations.map((navigation, idx) => (
          <ListItem onClick={toggleDrawer(false)} className={classes.listItem} key={idx}>
            <LinkButton title={navigation.title} to={navigation.to} _className={classes.drawerButton} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <Typography variant='body2' onClick={toggleDrawer(false)}>
          EXIT
        </Typography>
      </List>
    </Box>
  );

  return (
    <div className={classes.navStyle}>
      <div className={classes.sectionDesktop}>
        {navigations.map((navigation, idx) => (
          <LinkButton title={navigation.title} to={navigation.to} _className={classes.caption} key={idx} />
        ))}
      </div>
      <div className={classes.sectionMobile}>
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
        <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </div>
    </div>
  );
};

export default NavLayer;
