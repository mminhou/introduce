import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import { ArrowRight, BuildOutlined, GitHub } from '@material-ui/icons';
import ko from '../../../util/textData';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#104869',
  },
  subContentContainer: {
    margin: '20px 0px',
  },
  projectContainer: {
    margin: '20px',
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
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
  smallIcon: {
    fontSize: '18px',
    marginRight: '20px',
  },
  divider: {
    margin: '10px 0px',
  },
}));

const ResumePersonalProject = () => {
  const classes = useStyle();
  const data = ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Personal Project.
      </Typography>
      <Divider className={classes.divider} />
      {data.personal.map((project, idx) => (
        <Grid item container alignItems='center' key={idx}>
          <Grid item xs={12}>
            <Typography variant='subtitle2' className={classes.subTitle2}>
              {project.url ? <a href={project.url}>{project.title}</a> : `${project.title}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2' className={classes.body2}>
              {project.caption}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.iconTextContainer}>
              <GitHub className={classes.smallIcon} />
              <Typography variant='body2' className={classes.body2}>
                <a href={project.github}>{project.github}</a>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.iconTextContainer}>
              <BuildOutlined className={classes.smallIcon} />
              <Typography variant='caption' className={classes.caption}>
                {project.skills}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.subContentContainer}>
              {project.captions.map((caption) => (
                <Typography variant='caption' className={classes.caption} key={caption}>
                  <ArrowRight /> {caption}
                </Typography>
              ))}
            </div>
            <Divider className={classes.divider} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResumePersonalProject;
