import { styled, Theme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

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
  eventCreateHeader: {
    display: 'flex',
    padding: '50px 100px',
    flexDirection: 'column',
    width: '30%',
    gap: '10px'
  },
  button: {
    textDecoration: 'none',
    color: '#919191',
  },
  createButton: {
    display: 'flex',
    padding: '50px 0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventPage: {
    display: 'grid',
    width: '100vw',
    height: '100vh',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    gridGap: '50px'
  },
  eventImage: {
    justifySelf: 'start',
  },
  eventDescription: {
    justifySelf: 'end',
  }
})
