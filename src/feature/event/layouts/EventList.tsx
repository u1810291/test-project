import React from 'react';
import { Button } from '../../../components/Button';
import Box from '@mui/material/Box';
import {ReactComponent as CreateIMG} from '../../../assets/create-event.svg';
import { useStyles } from './style'

export const EventList = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <Box className={classes.grid}>
        <Box className={classes.leftSide}>
          <CreateIMG />
        </Box>
        <Box className={classes.topRight}>
          Imagine if had events.
        </Box>
        <Box className={classes.bottomRight}>
          <Button title='🎉 Create my event'/>
        </Box>
      </Box>
    </Box>
  )
}

