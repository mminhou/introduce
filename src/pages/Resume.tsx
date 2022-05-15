import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ResumeIntroduce from '../component/layout/Resume/ResumeIntroduce';
import ResumeEducation from '../component/layout/Resume/ResumeEducation';
import ResumeOpenSource from '../component/layout/Resume/ResumeOpenSource';
import ResumeWorkExperience from '../component/layout/Resume/ResumeWorkExperience';
import ResumeHeader from '../component/layout/Resume/ResumeHeader';
import ResumePersonalProject from '../component/layout/Resume/ResumePersonalProject';

const useStyle = makeStyles((theme) => ({
  mainBackground: {
    width: '50%',
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
        <ResumePersonalProject />
      </Grid>
    </div>
  );
};

export default Resume;
