import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  mainBackground: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    marginTop: '30px',
  },
}));

const Resume = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainBackground}>
      <Grid container justifyContent='center' alignItems='center' spacing={3}>
        <Grid item md={4} xs={12} style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '70px' }}>Minho Choi</h1>
          <h2>Front-End Developer</h2>
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={4} xs={12} style={{ textAlign: 'left' }}>
          <h2>Contact.</h2>
          <p>exit19093@gmail.com</p>
          <p>+82)10-2895-1359</p>
          <h2>Channel.</h2>
          <p>https://github.com/mminhou</p>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'left' }}>
          <h2>Introduce</h2>
          <p>Experienced and passionated Front-end Developer with about one years of experience developing easy to use and fast web page.</p>
          <p>Reliable developer with the ability to manage and achieve project goals, leveraging my knowledges of Javascript and browsers.</p>
          <p>Brining proven track record of improving performance, developing well structured web page with good UX, Writing reliable codes with TDD.</p>
        </Grid>
        <Grid item md={6} xs={12} style={{ textAlign: 'left' }}>
          <h1>Education</h1>
        </Grid>
        <Grid item md={6} xs={12} style={{ textAlign: 'left' }}>
          <h1>open source</h1>
        </Grid>
        <Grid item xs={12}>
          <h1>Experience</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
