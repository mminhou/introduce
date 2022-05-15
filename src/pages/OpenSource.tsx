import React from 'react';
import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';
import profile from '../assets/images/profile.jpg';

const useStyle = makeStyles((theme) => ({
  mainBackground: {
    paddingTop: '20px',
    display: 'flex',
  },
  cardContainer: {
    minWidth: '350px',
    textAlign: 'left',
  },
  avatar: {
    border: '0.1px solid lightgray',
  },
  mainContent: {
    textAlign: 'center',
  },
  actionContent: {
    paddingLeft: '15px',
  },
  actionStar: {
    marginRight: '20px',
  },
  actionTitle: {
    color: '#717171',
  },
  divider: {
    width: '95%',
    margin: 'auto',
  },
}));

const OpenSource = () => {
  const classes = useStyle();

  return (
    <Grid container className={classes.mainBackground} direction='column' alignItems='center' spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.cardContainer}>
          <CardHeader
            avatar={<Avatar src={profile} className={classes.avatar} />}
            title={<a href='https://www.npmjs.com/package/web_pen_sdk'>web_pen_sdk</a>}
            subheader='Created By mminhou.'
            action={
              <IconButton>
                <Star />
              </IconButton>
            }
          />
          <Divider className={classes.divider} />
          <CardContent className={classes.mainContent}>
            <Typography variant='body2'>web_pen_sdk for NeoSmartPen.</Typography>
          </CardContent>
          <Divider className={classes.divider} />
          <CardActions className={classes.actionContent}>
            <Typography variant='body2' className={classes.actionStar}>
              0 <br />
              <span className={classes.actionTitle}>STARS</span>
            </Typography>
            <Typography variant='body2'>
              0 <br />
              <span className={classes.actionTitle}>FORKS</span>
            </Typography>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OpenSource;
