import { styled, useTheme } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './grid-spacing.css';

const Item = styled(Paper)((theme: any) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export function GridSpacing(props: any) {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette['text'].secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography className="grid-heading">2 columns layout</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
      </Grid>
      <Typography className="grid-heading">3 columns layout</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
      <Typography className="grid-heading">4 columns layout</Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=3</Item>
        </Grid>
      </Grid>
      <Typography className="grid-heading">5 columns layout</Typography>
      <Grid container spacing={2}>
        <Grid item xs={2.4}>
          <Item>xs=2.4</Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item>xs=2.4</Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item>xs=2.4</Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item>xs=2.4</Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item>xs=2.4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GridSpacing;
