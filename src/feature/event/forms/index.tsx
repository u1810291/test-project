import React from 'react';
import FormControl from '@mui/material/FormControl';
import { BootstrapInput, useStyles } from './style';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const Forms = () => {
  const classes = useStyles();
  const handleUploadClick = () => {}
  return (
    <Box className={classes.eventCreate}>
      <Box className={classes.form}>
        <Box className={classes.formElement}>
          <Typography fontWeight={700} fontSize={20} className={classes.label}>
            π My event is called
          </Typography>
          <BootstrapInput/>
        </Box>
        <Box className={classes.formElement}>
          <Typography fontWeight={700} fontSize={20} className={classes.label}>
            π It starts at
          </Typography>
          <BootstrapInput/>
        </Box>
        <Box className={classes.formElement}>
          <Typography fontWeight={700} fontSize={20} className={classes.label}>
            π It ends at (optional)
          </Typography>
          <BootstrapInput/>
        </Box>
        <Box className={classes.formElement}>
          <Typography fontWeight={700} fontSize={20} className={classes.label}>
            π Itβs happening at (optional)
          </Typography>
          <BootstrapInput/>
        </Box>
        <Box className={classes.formElement}>
          <Typography fontWeight={700} fontSize={20} className={classes.label}>
            π Add a URL link (optional)
          </Typography>
          <BootstrapInput/>
        </Box>
        <Box className={classes.formElement}>
          <Typography fontWeight={700} fontSize={20} className={classes.label}>
            βοΈ Description (optional)
          </Typography>
          <BootstrapInput/>
        </Box>
      </Box>
      <Box className={classes.uploadImage}>
        <input
          id="contained-button-file"
          accept="image/*" className={classes.input}
          multiple 
          type="file"
          onChange={handleUploadClick}
        />
        <label
          htmlFor="contained-button-file"
          className={classes.imageUploadlabel}
        >
          <span className={classes.uploadTitle}>Choose a photo</span>
          <img
            className={classes.image}
            draggable={false}
            src={require('../../../assets/image-upload.png')}
            width='500px'
            height='500px'
            alt='upload'
            aria-label='upload-image'
          />
        </label>
      </Box>
    </Box>
  )
}
