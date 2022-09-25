import React from 'react';
import Box from '@mui/material/Box';
import { useStyles } from './style';

export const EventPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.eventPage}>
      <Box className={classes.eventDescription}>
        event
      </Box>
      <Box className={classes.eventImage}>
        <img width='500px' height='500px' src={require('../../../assets/birthday-cake.png')} alt='birthday cake'/>
      </Box>
    </Box>
  )
}
