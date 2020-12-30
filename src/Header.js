import React from 'react';
import { Button, Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import logo from './laura.png';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    color: '#303e69',
    textTransform: 'none',
    height: "40vh",
    paddingTop: "20vh"
  },
  img: {
    width: "20vh"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Header() {
  const classes = useStyles();
  return(
    <div
      className={classes.heroContent}
      style={{
        backgroundImage: `url(${"https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="md">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          <strong>Why, hello there!</strong>
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          I'm Laura, a Full-Stack Web Developer based in Halifax, NS
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              {/* <Button
                variant="contained"
                endIcon={<ExpandMoreIcon />}
              >
                More About Me
              </Button> */}
              {/* <img src={logo} alt="Laura Tannahill" className={classes.img}></img> */}
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}