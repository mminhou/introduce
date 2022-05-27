import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ko from '../util/textData';

const useStyle = makeStyles(() => ({
  mainBackground: {
    width: '80%',
    height: '100%',
    margin: '30px auto',
  },
  title: {
    margin: '30px',
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

  return (
    <Grid container className={classes.mainBackground} direction='row' alignItems='center' justifyContent='center'>
      <Grid item container md={6} xs={12} direction='column' spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h4'>{data.title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>{data.period}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>{data.skills}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2'>{data.captions}</Typography>
        </Grid>
      </Grid>
      <Grid container item md={6} xs={12} direction='column'>
        <img src={data.images[0]} width='100%' />
      </Grid>
    </Grid>
  );
};

export default PortfolioDetail;
