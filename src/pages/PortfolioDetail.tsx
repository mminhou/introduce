import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  mainBackground: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const PortfolioDetail = () => {
  const classes = useStyle();

  return (
    <div>
      <p>Portfolio Detail page</p>
    </div>
  );
};

export default PortfolioDetail;
