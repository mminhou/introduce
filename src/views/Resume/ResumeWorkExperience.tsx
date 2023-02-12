import React from 'react';
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import ko from '../../util/textData';

const useStyle = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    margin: '20px 0px 10px 0px',
    color: '#0A9DAA',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  rightContainer: {
    padding: '0px 0px 0px 30px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      padding: '10px 00px 10px 0px',
    },
  },
  companyTitle: {
    fontSize: '25px',
  },
  companyPeriod: {
    fontSize: '24px',
    color: '#828282',
  },
  companyPosition: {
    fontStyle: 'italic',
    fontSize: '17px',
    fontWeight: 400,
    color: '#808080',
    margin: '5px 0px 15px 0px',
  },
  companyDescription: {
    display: 'flex',
    margin: '7px',
    fontSize: '16px',
    fontFamily: 'Noto Sans KR',
    fontWeight: 400,
  },
  divider: {
    margin: '10px 0px',
  },
}));

const ResumeWorkExperience = () => {
  const classes = useStyle();
  const data = ko;

  return (
    <Grid item xs={12}>
      <Typography variant='h4' className={classes.title}>
        Work Experience.
      </Typography>
      <Divider className={classes.divider} />
      {data.company.map((comp, idx) => (
        <div key={idx}>
          <Grid item container>
            <Grid item lg={3} md={4} sm={12} xs={12} className={classes.leftContainer}>
              <Typography variant='subtitle2' className={classes.companyPeriod}>
                {comp.period}
              </Typography>
              <div style={{ color: '#ffffff', backgroundColor: '#e98428', borderRadius: '3px', padding: '2px 3px', margin: '3px 3px 3px 10px', fontSize: '13px' }}>{comp.tenure}</div>
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12} className={classes.rightContainer}>
              <Typography variant='subtitle2' className={classes.companyTitle}>
                {comp.homepage ? <a href={comp.homepage}>{comp.name}</a> : `${comp.name}`}
              </Typography>
              <Typography variant='body2' className={classes.companyPosition}>
                {comp.position}
              </Typography>

              {comp.description.map((content, idx) => (
                <Typography variant='body1' className={classes.companyDescription} key={idx}>
                  <ArrowRight /> {content}
                </Typography>
              ))}
              <Typography className={classes.companyDescription} key={idx}>
                <ArrowRight /> <b>Skill Keywords</b>
              </Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {comp.skills.map((skill, idx) => (
                  <div style={{ color: '#ffffff', backgroundColor: '#6c757d', borderRadius: '3px', padding: '2px 3px', margin: '3px', fontSize: '13px' }}>{skill}</div>
                ))}
              </div>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
        </div>
      ))}
    </Grid>
  );
};

export default ResumeWorkExperience;
