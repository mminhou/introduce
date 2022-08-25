import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ko from '../../util/textData';

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
  const data = ko;

  return (
    <Grid item md={6} xs={12}>
      <Typography variant='h4' className={classes.title}>
        Open Source.
      </Typography>
      <div className={classes.contentContainer}>
        <Typography>
          <a href={data.github}>{data.github}</a>
        </Typography>
      </div>
      <div className={classes.contentContainer}>
        <Typography>
          <a href={data.npm}>{data.npm}</a>
        </Typography>
      </div>
    </Grid>
  );
};

export default ResumeOpenSource;
