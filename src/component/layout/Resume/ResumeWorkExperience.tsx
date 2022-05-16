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
  companyContainer: {
    marginBottom: '10px',
    paddingBottom: '10px',
    borderBottom: '1px solid black',
  },
  projectContainer: {
    display: 'flex',
    margin: '20px',
  },
  companyTitle: {
    minWidth: '160px',
  },
  projectTitle: {
    fontSize: '17px',
    fontWeight: 'bold',
  },
  subTitle2: {
    fontWeight: 'bold',
    fontSize: '20px',
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
        <div>
          <Grid item container alignItems='center'>
            <Grid item md={2} xs={12} className={classes.companyTitle}>
              <Typography variant='subtitle2' className={classes.subTitle2}>
                {comp.homepage ? <a href={comp.homepage}>{comp.name}</a> : `${comp.name}`}
              </Typography>
            </Grid>
            <Grid item md={10} xs={12}>
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
            {comp.project.map((proj) => (
              <div style={{ width: '100%', margin: '20px 0px 0px 0px' }}>
                <Grid item container>
                  <Grid item md={4} xs={12}>
                    <Typography className={classes.projectTitle}>
                      <a href={proj.url}>{proj.title}</a>
                    </Typography>
                    <Typography variant='caption' className={classes.caption}>
                      {proj.duration}
                    </Typography>
                  </Grid>
                  <Grid item md={8} xs={12}>
                    {proj.captions.map((caption) => (
                      <Typography variant='caption' className={classes.caption}>
                        <ArrowRight /> {caption}
                      </Typography>
                    ))}
                  </Grid>
                </Grid>
              </div>
            ))}
          </Grid>
          <Divider className={classes.divider} />
        </div>
      ))}
    </Grid>
  );
};

export default ResumeWorkExperience;
