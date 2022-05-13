import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import json from '../../../util/textData.json';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#104869',
  },
  contentContainer: {
    margin: '5px 0px',
  },
}));

const ResumeOpenSource = () => {
  const classes = useStyle();
  const textJson = json.ko;

  return (
    <Grid item md={6} xs={12}>
      <Typography variant='h4' className={classes.title}>
        Open Source.
      </Typography>
      <div className={classes.contentContainer}>
        <Typography>
          <a href={textJson.github}>{textJson.github}</a>
        </Typography>
      </div>
      <div className={classes.contentContainer}>
        <Typography>
          <a href={textJson.npm}>{textJson.npm}</a>
        </Typography>
      </div>
    </Grid>
  );
};

export default ResumeOpenSource;
