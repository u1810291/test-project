import React from 'react';
import ButtonComponent from '@mui/material/Button';
import { useStyles } from './style';
import { Typography } from '@mui/material';

export const Button = ({ title, ...props }: { title: string } | any) => {
  const classes = useStyles();
  return(
    <ButtonComponent className={classes.root} {...props} variant='contained'><Typography variant='button' fontWeight={700} fontSize={20}>{title}</Typography></ButtonComponent>
  )
}
