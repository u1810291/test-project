import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import { BootstrapInput, useStyles } from './style'
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';

export const EventCreate = () => {
  const classes = useStyles();
  return(
    <Box>
      <Box className={classes.eventCreateHeader}>
      <Typography variant='h6'><Link to='/' className={classes.cancel}>Cancel</Link></Typography>
        <Typography variant='h2' fontWeight={700} color='#250d57'>Create your Event</Typography>
      </Box>
      <Box className={classes.eventCreate}>
        <FormControl variant="standard" className={classes.form}>
          <Box className={classes.formElement}>
            <Typography fontWeight={700} fontSize={20} className={classes.label}>
              🎉 My event is called
            </Typography>
            <BootstrapInput/>
          </Box>
          <Box className={classes.formElement}>
            <Typography fontWeight={700} fontSize={20} className={classes.label}>
              🗓 It starts at
            </Typography>
            <BootstrapInput/>
          </Box>
          <Box className={classes.formElement}>
            <Typography fontWeight={700} fontSize={20} className={classes.label}>
              🏁 It ends at (optional)
            </Typography>
            <BootstrapInput/>
          </Box>
          <Box className={classes.formElement}>
            <Typography fontWeight={700} fontSize={20} className={classes.label}>
              📍 It’s happening at (optional)
            </Typography>
            <BootstrapInput/>
          </Box>
          <Box className={classes.formElement}>
            <Typography fontWeight={700} fontSize={20} className={classes.label}>
              🔗 Add a URL link (optional)
            </Typography>
            <BootstrapInput/>
          </Box>
          <Box className={classes.formElement}>
            <Typography fontWeight={700} fontSize={20} className={classes.label}>
              ✏️ Description (optional)
            </Typography>
            <BootstrapInput/>
          </Box>
        </FormControl>
        <Box>
          Image
        </Box>
      </Box>
      <Box className={classes.createButton}>
        <Button title='Create' width={1}/>
      </Box>
    </Box>
  )
}
