import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Email, Phone, GitHub } from '@material-ui/icons';
import json from '../../../util/textData.json';

const useStyle = makeStyles((theme) => ({
  resumeName: {
    fontSize: '70px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  resumePosition: {
    fontWeight: 'bold',
  },
  iconTextContainer: {
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'center',
  },
  smallIcon: {
    marginRight: '20px',
  },
}));

const ResumeHeader = () => {
  const classes = useStyle();
  const textJson = json.ko;

  return (
    <>
      <Grid item md={7} xs={12}>
        <Typography variant='h1' className={classes.resumeName}>
          {textJson.name}
        </Typography>
        <Typography variant='h5' className={classes.resumePosition}>
          {textJson.position}
        </Typography>
      </Grid>
      <Grid item md={5} xs={12}>
        <div className={classes.iconTextContainer}>
          <Email className={classes.smallIcon} fontSize='small' />
          <Typography variant='body1'>{textJson.email}</Typography>
        </div>
        <div className={classes.iconTextContainer}>
          <Phone className={classes.smallIcon} fontSize='small' />
          <Typography variant='body1'>{textJson.phone}</Typography>
        </div>
        <div className={classes.iconTextContainer}>
          <GitHub className={classes.smallIcon} fontSize='small' />
          <Typography variant='body1'>
            <a href={textJson.github}>{textJson.github}</a>
          </Typography>
        </div>
      </Grid>
    </>
  );
};

export default ResumeHeader;
