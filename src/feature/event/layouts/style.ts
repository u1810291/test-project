import { styled, Theme, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';

export const Item = styled(Paper)(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  height: '100%',
}));

export const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    padding: 0,
  },
  grid: {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0px 0px',
    gridTemplateAreas: `"leftSide top-right ."
      "leftSide bottom-right ."`,
    gridGap: '50px',
  },
  leftSide: {
    gridArea: 'leftSide',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  topRight: {
    gridArea: 'top-right',
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  bottomRight: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'start',
    gridArea: 'bottom-right',
    flexDirection: 'column',
  },
  title: {
    color: '#240D57',
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '64px',
    lineHeight: '74px',
    textAlign: 'right'
  },
  titleCustom: {
    background: 'linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    'background-clip': 'text',
    'text-fill-color': 'transparent',
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontWeight: 900,
    fontSize: '64px',
    lineHeight: '74px',
    textAlign: 'right'
  },
  description: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontSize: '24px !important',
    lineHeight: '28px',
    textAlign: 'right',
    color: '#4F4F4F'
  },
  createNew: {
    outline: 'none',
    textDecoration: 'none',
  },
  label: {
    fontSize: '20px',
    color: 'rgb(36 13 87)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    width: '100%',
    alignItems: 'center',
    paddingTop: '10%',
  },
  formElement: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  eventCreate: {
    width: '100vw',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    paddingLeft: '100px',
    paddingRight: '100px',
    gridGap: '50px',
  },
  eventCreateHeader: {
    display: 'flex',
    padding: '50px 100px',
    flexDirection: 'column',
    width: '30%',
    gap: '10px'
  },
  cancel: {
    textDecoration: 'none',
    color: '#919191',
  },
  createButton: {
    display: 'flex',
    padding: '50px 0',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export const BootstrapInput = styled(InputBase)(({ theme }: { theme: Theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#dddddd' : '#2b2b2b',
    fontSize: 24,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));