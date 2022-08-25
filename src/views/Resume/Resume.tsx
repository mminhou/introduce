import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import ResumeIntroduce from './ResumeIntroduce';
import ResumeEducation from './ResumeEducation';
import ResumeOpenSource from './ResumeOpenSource';
import ResumeWorkExperience from './ResumeWorkExperience';
import ResumeHeader from './ResumeHeader';
import ResumeProject from './ResumeProject';

const useStyle = makeStyles((theme) => ({
  mainBackground: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    paddingTop: '30px',
    textAlign: 'left',
    fontFamily: 'Noto Sans CJK KR',
    fontStyle: 'normal',
  },
}));

const Resume = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainBackground}>
      <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <ResumeHeader />
        <ResumeIntroduce />
        <ResumeEducation />
        <ResumeOpenSource />
        <ResumeWorkExperience />
        <ResumeProject />
      </Grid>
    </div>
  );
};

export default Resume;
