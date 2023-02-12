import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import { ArrowRight, BuildOutlined, GitHub } from '@material-ui/icons';
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
  projectTitle: {
    fontSize: '25px',
  },
  projectPeriod: {
    fontSize: '24px',
    color: '#828282',
  },
  projectPosition: {
    fontStyle: 'italic',
    fontSize: '17px',
    fontWeight: 400,
    color: '#808080',
    margin: '5px 0px 15px 0px',
  },
  projectDescription: {
    display: 'flex',
    margin: '7px',
    fontSize: '16px',
    fontFamily: 'Noto Sans KR',
    fontWeight: 400,
    color: '#212529',
  },
  divider: {
    margin: '10px 0px',
  },
}));

const ResumeProject = () => {
  const classes = useStyle();
  const data = ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Project.
      </Typography>
      <Divider className={classes.divider} />
      {data.project.map((pro, idx) => (
        <div key={idx}>
          <Grid item container>
            <Grid item lg={3} md={4} sm={12} xs={12} className={classes.leftContainer}>
              <Typography variant='subtitle2' className={classes.projectPeriod}>
                {pro.period}
              </Typography>
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12} className={classes.rightContainer}>
              <Typography variant='subtitle2' className={classes.projectTitle}>
                {pro.caption}
              </Typography>
              <Typography variant='body2' className={classes.projectPosition}>
                {pro.company}
              </Typography>

              {pro.description.map((content, idx) => (
                <Typography className={classes.projectDescription} key={idx}>
                  <ArrowRight /> {content}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
        </div>
      ))}
    </Grid>
  );
};

export default ResumeProject;
