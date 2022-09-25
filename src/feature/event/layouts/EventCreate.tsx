import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useStyles } from './style';
import { Forms } from '../forms';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';

export const EventCreate = () => {
  const classes = useStyles();
  return(
    <Box>
      <Box className={classes.eventCreateHeader}>
      <Typography variant='h6'><Link to='/' className={classes.button}>Cancel</Link></Typography>
        <Typography variant='h2' fontWeight={700} color='#250d57'>Create your Event</Typography>
      </Box>
      <Forms />
      <Box className={classes.createButton}>
        <Link to='/event/page' className={classes.button}>
          <Button title='Next' width={1}/>
        </Link>
      </Box>
    </Box>
  )
}
