import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { Email, Phone, GitHub } from '@material-ui/icons';

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
    fontWeight: 700,
    fontSize: '17px',
    marginBottom: 20,
  },
  body2: {
    display: 'inline',
  },
  caption: {
    fontSize: '15px',
    display: 'block',
    margin: '10px 0px',
  },
}));

const Resume = () => {
  const classes = useStyle();

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
            <Typography>Experienced and passionated Front-end Developer with about one years of experience developing easy to use and fast web page.</Typography>
            <Typography>Reliable developer with the ability to manage and achieve project goals, leveraging my knowledges of Javascript and browsers.</Typography>
            <Typography>Brining proven track record of improving performance, developing well structured web page with good UX, Writing reliable codes with TDD.</Typography>
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
              Sangmyung Univ. &nbsp;&nbsp;
            </Typography>
            <Typography variant='body2' className={classes.body2}>
              (Seoul, Korea 2014 - 2021)
            </Typography>
          </div>
          <div className={classes.subContentContainer}>
            <Typography variant='caption' className={classes.caption}>
              BS. Computer Science Engineering
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
          <Typography variant='subtitle2' style={{ fontSize: '17px' }}>
            <a href='https://github.com/mminhou'>https://github.com/mminhou</a>
          </Typography>
          <Typography variant='subtitle2' style={{ fontSize: '17px' }}>
            <a href='https://www.npmjs.com/~mminhou'>https://www.npmjs.com/~mminhou</a>
          </Typography>
        </Grid>
        {/* 
          Experience
        */}
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.subTitle}>
            Experience.
          </Typography>
          <Grid item xs={12}>
            <div className={classes.subContentContainer}>
              <Divider style={{ margin: '10px 0px' }} />
              <Typography variant='subtitle2' className={classes.subTitle2}>
                NeoLAB Convergence Inc. &nbsp;&nbsp;
              </Typography>
              <Typography variant='body2' className={classes.body2}>
                <a href='https://www.neolab.kr/'>(https://www.neolab.kr/)</a>
              </Typography>
              <Typography variant='caption' className={classes.caption}>
                Seoul, Korea&nbsp;&nbsp;&nbsp;Nov. 2021 ~ Present
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
            <div className={classes.subContentContainer}>
              <Divider style={{ margin: '10px 0px' }} />
              <Typography variant='subtitle2' className={classes.subTitle2}>
                NeoLAB Convergence Inc. &nbsp;&nbsp;
              </Typography>
              <Typography variant='body2' className={classes.body2}>
                <a href='https://www.neolab.kr/'>(https://www.neolab.kr/)</a>
              </Typography>
              <Typography variant='caption' className={classes.caption}>
                Seoul, Korea&nbsp;&nbsp;&nbsp;Nov. 2021 ~ Present
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
                The Salt &nbsp;&nbsp;
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
