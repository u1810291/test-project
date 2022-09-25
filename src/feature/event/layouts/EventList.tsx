import React from 'react';
import { Button } from '../../../components/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ReactComponent as CreateIMG} from '../../../assets/create-event.svg';
import { useStyles } from './style'
import { Link } from 'react-router-dom';

export const EventList = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <Box className={classes.grid}>
        <Box className={classes.leftSide}>
          <CreateIMG />
        </Box>
        <Box className={classes.topRight}>
          <Box>
            <Typography fontWeight={700} variant='h2' align='right' className={classes.title}>Imagine if</Typography>
            <Typography fontWeight={700} variant='h2' align='right' className={classes.titleCustom}> Snapchat </Typography>
            <Typography fontWeight={700} variant='h2' align='right' className={classes.title}>had events.</Typography>
            <Typography fontWeight={300} align='right' className={classes.description}>Easily host and share events with your friends across any social media.</Typography>
          </Box>
        </Box>
        <Box className={classes.bottomRight}>
          <Box>
            <Link to='/event/create' className={classes.createNew}>
              <Button title='🎉 Create my event'/>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

