import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import json from '../../../util/textData.json';

const useStyle = makeStyles((theme) => ({
  subTitle: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#104869',
  },
  subContentContainer: {
    margin: '5px 0px',
  },
}));

const ResumeIntroduce = () => {
  const classes = useStyle();
  const textJson = json.ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.subTitle}>
        Introduce.
      </Typography>
      <div className={classes.subContentContainer}>
        <Typography variant='subtitle1'>
          {textJson.introduce.split('\n').map((line) => (
            <span>
              {line}
              <br />
            </span>
          ))}
        </Typography>
      </div>
    </Grid>
  );
};

export default ResumeIntroduce;
