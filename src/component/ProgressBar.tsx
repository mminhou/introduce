import React from 'react';
import { makeStyles, Typography, CircularProgress, Box } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  progressBar: {
    color: '#FFFFFF',
    filter: 'drop-shadow(0 0 5px hsl(220, 100%, 60%))',
  },
}));

const ProgressBar = ({ value }) => {
  const classes = useStyle();

  return (
    <Box display='inline-flex'>
      <CircularProgress className={classes.progressBar} value={value} size='150px' />
      <Box top={0} left={0} bottom={0} right={0} position='absolute' display='flex' alignItems='center' justifyContent='center'>
        <Typography variant='h5' className={classes.progressBar}>
          {value}%
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
