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
    gridGap: '10px',
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
    justifyContent: 'center',
    alignItems: 'end'
  },
  bottomRight: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'start',
    justifyContent: 'center',
    gridArea: 'bottom-right',
  },
})