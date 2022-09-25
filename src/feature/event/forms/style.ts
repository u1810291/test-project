import { styled, Theme, alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';

export const useStyles = makeStyles({
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
    color: '#BDBDBD',
  },
  createButton: {
    display: 'flex',
    padding: '50px 0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    cursor: 'pointer'
  },
  input: {
    display: 'none',
    position: 'relative'
  },
  imageUploadlabel: {
    position: 'relative'
  },
  uploadTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffffff',
    fontWeight: '900',
    fontSize: '25px',
  }
})

export const BootstrapInput: any = styled(InputBase)(({ theme }: { theme: Theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#EDE5FF' : '#2b2b2b',
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