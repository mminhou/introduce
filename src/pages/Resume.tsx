import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Email, Phone, GitHub, ArrowRight } from '@material-ui/icons';
import json from '../util/textData.json';

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
        {/* 
          Minho Choi
        */}
        <Grid item md={4} xs={12}>
          <Typography variant='h1' className={classes.resumeName}>
            Minho Choi
          </Typography>
          <Typography variant='h5' className={classes.resumePosition}>
            Front-End Developer
          </Typography>
        </Grid>
        <Grid item md={4}></Grid>
        {/* 
          Contact, Channel
        */}
        <Grid item md={4} xs={12}>
          <Typography variant='h5' className={classes.subTitle}>
            Contact.
          </Typography>
          <div className={classes.iconTextContainer}>
            <Email className={classes.smallIcon} fontSize='small' />
            <Typography variant='body1'>exit19093@gmail.com</Typography>
          </div>
          <div className={classes.iconTextContainer}>
            <Phone className={classes.smallIcon} fontSize='small' />
            <Typography variant='body1'>+82)10-2895-1359</Typography>
          </div>
          <Typography variant='h5' className={classes.subTitle}>
            Channel.
          </Typography>
          <div className={classes.iconTextContainer}>
            <GitHub className={classes.smallIcon} fontSize='small' />
            <Typography variant='body1'>
              <a href='https://github.com/mminhou'>https://github.com/mminhou</a>
            </Typography>
          </div>
        </Grid>
        {/* 
          Introduce
        */}
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.subTitle}>
            Introduce.
          </Typography>
          <div className={classes.subContentContainer}>
            <Typography variant='subtitle1'>
              {textJson.introduce.split('\n').map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </Typography>
          </div>
        </Grid>
        {/* 
          Education 
        */}
        <Grid item md={6} xs={12}>
          <Typography variant='h4' className={classes.subTitle}>
            Education.
          </Typography>
          <div className={classes.subContentContainer}>
            <Typography variant='subtitle2' className={classes.subTitle2}>
              {textJson.university}
            </Typography>
            <Typography variant='body2' className={classes.body2}>
              {textJson.universityComment}
            </Typography>
          </div>
          <div className={classes.subContentContainer}>
            <Typography variant='caption' className={classes.caption}>
              BS. {textJson.universityMajor}
            </Typography>
          </div>
        </Grid>
        {/* 
          OpenSource
        */}
        <Grid item md={6} xs={12}>
          <Typography variant='h4' className={classes.subTitle}>
            Open Source.
          </Typography>
          <Typography>
            <a href='https://github.com/mminhou'>https://github.com/mminhou</a>
          </Typography>
          <br />
          <Typography variant='caption' className={classes.subTitle2}>
            <a href='https://www.npmjs.com/~mminhou'>https://www.npmjs.com/~mminhou</a>
          </Typography>
          <br />
          <Typography variant='caption' className={classes.subTitle2}>
            <a href='https://mminhou.github.io/introduce'>https://mminhou.github.io/introduce</a>
          </Typography>
        </Grid>
        {/* 
          Experience
        */}
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.subTitle}>
            Experience.
          </Typography>
          {textJson.company.map((comp) => (
            <Grid item xs={12}>
              <div className={classes.subContentContainer}>
                <Divider className={classes.divider} />
                <Typography variant='subtitle2' className={classes.subTitle2}>
                  {comp.homepage ? <a href={comp.homepage}>{comp.name}</a> : `${comp.name}`}
                </Typography>
                <Typography variant='body2' className={classes.body2}>
                  <b>( {comp.position} )</b>
                </Typography>
                <Typography variant='caption' className={classes.caption}>
                  {comp.location}&nbsp;&nbsp;&nbsp;{comp.date}
                </Typography>
              </div>
              <div className={classes.subContentContainer}>
                <Typography variant='caption' className={classes.caption}>
                  {comp.caption}
                </Typography>
              </div>
              <div className={classes.subContentContainer}>
                {comp.project.map((proj) => (
                  <div className={classes.projectContainer}>
                    <Typography className={classes.projectTitle}>
                      <a href={proj.url}>{proj.title}</a>
                    </Typography>
                    {proj.captions.map((caption) => (
                      <Typography variant='caption' className={classes.caption}>
                        <ArrowRight /> {caption}
                      </Typography>
                    ))}
                  </div>
                ))}
              </div>
            </Grid>
          ))}
        </Grid>
        {/* 
          Experience
        */}
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
