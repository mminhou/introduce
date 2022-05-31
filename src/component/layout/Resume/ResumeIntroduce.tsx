import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ko from '../../../util/textData';

const useStyle = makeStyles((theme) => ({
  title: {
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
  const data = ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Introduce.
      </Typography>
      <div className={classes.subContentContainer}>
        <Typography variant='subtitle1'>
          {data.introduce.split('\n').map((line, idx) => (
            <span key={idx}>
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
