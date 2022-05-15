import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import json from '../../../util/textData.json';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#104869',
  },
  subtitle: {
    marginRight: '20px',
    fontWeight: 'bold',
    fontSize: '17px',
  },
  body2: {
    display: 'inline',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  caption: {
    margin: '10px 0px',
    fontSize: '15px',
  },
}));

const ResumeEducation = () => {
  const classes = useStyle();
  const textJson = json.ko;

  return (
    <Grid item md={6} xs={12}>
      <Typography variant='h4' className={classes.title}>
        Education.
      </Typography>
      <Grid item container alignItems='center' spacing={1}>
        <Grid item md={4} xs={12}>
          <Typography variant='subtitle2' className={classes.subtitle}>
            {textJson.university.name}
          </Typography>
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography variant='body2' className={classes.body2}>
            {textJson.university.comment}
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.contentContainer}>
        <Typography variant='caption' className={classes.caption}>
          BS. {textJson.university.major}
        </Typography>
      </div>
    </Grid>
  );
};

export default ResumeEducation;
