import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import ko from '../../util/textData';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#0A9DAA',
  },
  leftContainer: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
    },
  },
  rightContainer: {
    padding: '30px 30px 30px 30px',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start',
      padding: '10px 00px 10px 0px',
    },
  },
  introduceTitle: {
    fontSize: '25px',
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
      <Grid item container>
        <Grid item lg={2} md={12} className={classes.leftContainer}>
          <Typography variant='h4' className={classes.title}>
            Introduce.
          </Typography>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={9} md={12} className={classes.rightContainer}>
          <Typography variant='subtitle1'>
            {data.introduce.split('\n').map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeIntroduce;
