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
  }
})