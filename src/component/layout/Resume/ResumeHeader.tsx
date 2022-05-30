import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import { Email, Phone, GitHub } from '@material-ui/icons';
import ko from '../../../util/textData';

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
  const data = ko;

  return (
    <>
      <Grid item md={7} xs={12}>
        <Typography variant='h1' className={classes.resumeName}>
          {data.name}
        </Typography>
        <Typography variant='h5' className={classes.resumePosition}>
          {data.position}
        </Typography>
      </Grid>
      <Grid item md={5} xs={12}>
        <div className={classes.iconTextContainer}>
          <Email className={classes.smallIcon} fontSize='small' />
          <Typography variant='body1'>{data.email}</Typography>
        </div>
        <div className={classes.iconTextContainer}>
          <Phone className={classes.smallIcon} fontSize='small' />
          <Typography variant='body1'>{data.phone}</Typography>
        </div>
        <div className={classes.iconTextContainer}>
          <GitHub className={classes.smallIcon} fontSize='small' />
          <Typography variant='body1'>
            <a href={data.github}>{data.github}</a>
          </Typography>
        </div>
      </Grid>
    </>
  );
};

export default ResumeHeader;
