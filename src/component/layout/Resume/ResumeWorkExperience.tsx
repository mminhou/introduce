import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import json from '../../../util/textData.json';
import { ArrowRight } from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  title: {
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
  subTitle2: {
    fontWeight: 'bold',
    fontSize: '17px',
  },
  body2: {
    margin: '10px 0px',
  },
  caption: {
    fontSize: '15px',
    display: 'flex',
  },
  divider: {
    margin: '10px 0px',
  },
}));

const ResumeWorkExperience = () => {
  const classes = useStyle();
  const textJson = json.ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Work Experience.
      </Typography>
      <Divider className={classes.divider} />
      {textJson.company.map((comp) => (
        <Grid item container alignItems='center'>
          <Grid item md={3} xs={12}>
            <Typography variant='subtitle2' className={classes.subTitle2}>
              {comp.homepage ? <a href={comp.homepage}>{comp.name}</a> : `${comp.name}`}
            </Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography variant='caption' className={classes.caption}>
              {comp.duration}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' className={classes.body2}>
              <b>{comp.position}</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption' className={classes.caption}>
              {comp.caption}
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResumeWorkExperience;
