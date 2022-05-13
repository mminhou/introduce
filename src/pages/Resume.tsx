import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Email, Phone, GitHub, ArrowRight } from '@material-ui/icons';
import json from '../util/textData.json';
import ResumeIntroduce from '../component/layout/Resume/ResumeIntroduce';
import ResumeEducation from '../component/layout/Resume/ResumeEducation';
import ResumeOpenSource from '../component/layout/Resume/ResumeOpenSource';
import ResumeWorkExperience from '../component/layout/Resume/ResumeWorkExperience';
import ResumeHeader from '../component/layout/Resume/ResumeHeader';

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
  alignLeftContainer: {
    textAlign: 'left',
  },
  subTitle: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#104869',
  },
  subContentContainer: {
    margin: '5px 0px',
  },
  projectContainer: {
    margin: '20px',
  },
  projectTitle: {
    fontSize: '17px',
    fontWeight: 'bold',
  },
  resumeName: {
    fontSize: '70px',
    fontWeight: 'bold',
  },
  resumePosition: {
    fontWeight: 'bold',
  },
  iconTextContainer: {
    display: 'flex',
    marginBottom: '5px',
    alignItems: 'center',
  },
  smallIcon: {
    marginRight: '10px',
  },
  subTitle2: {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '17px',
    marginBottom: '20px',
    marginRight: '15px',
  },
  body2: {
    display: 'inline',
  },
  caption: {
    fontSize: '15px',
    display: 'flex',
    margin: '10px 0px',
  },
  divider: {
    margin: '10px 0px',
  },
}));

const Resume = () => {
  const classes = useStyle();
  const textJson = json.ko;

  return (
    <div className={classes.mainBackground}>
      <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <ResumeHeader />
        <ResumeIntroduce />
        <ResumeEducation />
        <ResumeOpenSource />
        <ResumeWorkExperience />
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.subTitle}>
            Personal Project.
          </Typography>
          <Grid item xs={12}>
            <div className={classes.subContentContainer}>
              <Divider style={{ margin: '10px 0px' }} />
              <Typography variant='subtitle2' className={classes.subTitle2}>
                The Salt
              </Typography>
              <Typography variant='body2' className={classes.body2}>
                <a href='http://the-salt.co.uk/'>(http://the-salt.co.uk/)</a>
              </Typography>
              <Typography variant='caption' className={classes.caption}>
                Seoul, Korea&nbsp;&nbsp;&nbsp;Nov. 2021 ~ Nov. 2021
              </Typography>
            </div>
            <div className={classes.subContentContainer}>
              <Typography variant='caption' className={classes.caption}>
                Have joined the world's number one smartpen manufacturing and service company in Korea as a Front-end developer. <br />
                Developed pen gesture function for&nbsp;
                <i>
                  <a href='https://gridaboard.io/'>GridaBoard</a>
                </i>
                , the graphic service of company bluetooth smartpen. It was build with ReactJS, Redux and Typescript. <br />
                Improved company service application's pages UI/UX.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
