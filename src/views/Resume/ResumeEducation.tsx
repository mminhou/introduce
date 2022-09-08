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
  educationPeriod: {
    fontSize: '24px',
    color: '#828282',
  },
  educationTitle: {
    fontSize: '25px',
  },
  educationDescription: {
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

const ResumeEducation = () => {
  const classes = useStyle();
  const data = ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Education.
      </Typography>
      <Divider className={classes.divider} />
      {data.education.map((edu, idx) => (
        <div key={idx}>
          <Grid item container>
            <Grid item lg={3} md={4} sm={12} xs={12} className={classes.leftContainer}>
              <Typography variant='subtitle2' className={classes.educationPeriod}>
                {edu.period}
              </Typography>
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12} className={classes.rightContainer}>
              <Typography variant='subtitle2' className={classes.educationTitle}>
                {edu.name}
              </Typography>
              <Typography variant='body2' className={classes.educationDescription}>
                {edu.description}
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
        </div>
      ))}
    </Grid>
  );
};

export default ResumeEducation;
