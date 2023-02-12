import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import ko from '../../util/textData';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#0A9DAA',
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
    },
  },
  rightContainer: {
    padding: '0px 0px 0px 30px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      padding: '10px 00px 10px 0px',
    },
  },
  openSourcePlatform: {
    fontSize: '24px',
    color: '#828282',
  },
  openSourceTitle: {
    fontSize: '25px',
  },
  openSourceDescription: {
    fontStyle: 'italic',
    fontSize: '17px',
    fontWeight: 300,
    color: '#808080',
    margin: '5px 0px 15px 0px',
  },
  divider: {
    margin: '10px 0px',
  },
}));

const ResumeOpenSource = () => {
  const classes = useStyle();
  const data = ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Open Source.
      </Typography>
      <Divider className={classes.divider} />

      <Grid item container>
        <Grid item lg={3} md={4} sm={12} xs={12} className={classes.leftContainer}>
          <Typography variant='subtitle2' className={classes.openSourcePlatform}>
            Npm
          </Typography>
        </Grid>
        <Grid item lg={9} md={8} sm={12} xs={12} className={classes.rightContainer}>
          <Typography variant='subtitle2' className={classes.openSourceTitle}>
            <a href={data.npm}>{data.npm}</a>
          </Typography>
          <Typography variant='body2' className={classes.openSourceDescription}>
            Node.js opensource
          </Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={12} xs={12} className={classes.leftContainer}>
          <Typography variant='subtitle2' className={classes.openSourcePlatform}>
            Github
          </Typography>
        </Grid>
        <Grid item lg={9} md={8} sm={12} xs={12} className={classes.rightContainer}>
          <Typography variant='subtitle2' className={classes.openSourceTitle}>
            <a href={data.github}>{data.github}</a>
          </Typography>
          <Typography variant='body2' className={classes.openSourceDescription}>
            Minho's github
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeOpenSource;
