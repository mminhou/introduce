import React from 'react';
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import { ArrowRight, DateRangeTwoTone, EditTwoTone, BuildTwoTone } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import ko from '../util/textData';

const useStyle = makeStyles(() => ({
  mainBackground: {
    width: '80%',
    height: '100%',
    margin: '30px auto',
    textAlign: 'left',
  },
  title: {
    margin: '20px 0px',
    fontWeight: 'bold',
  },
  subTitle: {
    margin: '10px 0px',
  },
  iconTextContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
  },
  imgContainer: {
    boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
  },
  link: {
    color: '#0d99ff',
    fontSize: '15px',

    '&:hover': {
      borderBottom: '1px solid #0d99ff',
    },
  },
}));

const PortfolioDetail = () => {
  const classes = useStyle();
  const { companyId, projectId } = useParams();

  let data: any;
  if (companyId === 'personal') {
    data = ko.personal.filter((project) => project.id === projectId)[0];
  } else {
    data = ko.company.filter((com) => com.id === companyId)[0].project.filter((pro) => pro.id === projectId)[0];
  }

  const travelWebsite = () => {
    window.open(data.url);
  };

  return (
    <Grid container className={classes.mainBackground} spacing={3} alignItems='flex-start' justifyContent='flex-start'>
      <Grid item container md={6} xs={12} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4' className={classes.title}>
            {data.title}
          </Typography>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <div className={classes.iconTextContainer}>
            <DateRangeTwoTone className={classes.icon} />
            <Typography variant='h5' className={classes.subTitle}>
              PERIOD
            </Typography>
          </div>
          <Typography variant='subtitle1'>{data.period}</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.iconTextContainer}>
            <EditTwoTone className={classes.icon} />
            <Typography variant='h5' className={classes.subTitle}>
              WHAT I DID
            </Typography>
          </div>
          {data.captions.map((caption, idx) => (
            <div className={classes.iconTextContainer} key={idx}>
              <ArrowRight />
              <Typography variant='subtitle1'>{caption}</Typography>
            </div>
          ))}
        </Grid>
        <Grid item xs={12}>
          <div className={classes.iconTextContainer}>
            <BuildTwoTone className={classes.icon} />
            <Typography variant='h5' className={classes.subTitle}>
              TOOLS
            </Typography>
          </div>
          {data.skills.split(', ').map((skill, idx) => (
            <div className={classes.iconTextContainer} key={idx}>
              <ArrowRight />
              <Typography variant='subtitle1'>{skill}</Typography>
            </div>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='overline' className={classes.link} onClick={travelWebsite}>
            take a look at website
          </Typography>
        </Grid>
      </Grid>
      <Grid item container md={6} xs={12} spacing={3}>
        {data.images.map((image, idx) => (
          <Grid item xs={12} key={idx}>
            <img src={image} width='100%' className={classes.imgContainer} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PortfolioDetail;
