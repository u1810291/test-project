import React from 'react';
import { Button } from '../../../components/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {ReactComponent as CreateIMG} from '../../../assets/create-event.svg';
import { Item, useStyles } from './style'

export const EventList = () => {
  const classes = useStyles();
  return(
    <Box className={classes.root} sx={{ flexGrow: 1 }}>
      <Grid className={classes.grid} container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <CreateIMG />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Button title='🎉 Create my event'/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

