import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const LinkButton = ({ title, to, _className }) => {
  return (
    <Button component={NavLink} to={to} className={_className}>
      {title}
    </Button>
  );
};

export default LinkButton;
