import React from 'react';
import ButtonComponent from '@mui/material/Button';
import { useStyles } from './style';

export const Button = ({ title }: { title: string }) => {
  const classes = useStyles();
  return(
    <ButtonComponent className={classes.root} variant='contained'>{title}</ButtonComponent>
  )
}
