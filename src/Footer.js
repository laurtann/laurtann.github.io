import React from "react";
import { Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#303e69',
    color: '#ffffff',
    backgroundImage: `url("https://www.transparenttextures.com/patterns/3px-tile.png")`,
    padding: theme.spacing(6),
  },
}));

export default function Footer () {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" color="light" gutterBottom>
        Thanks for Stopping By!
      </Typography>
      <Grid container spacing={2} justify="center">
        <SocialLinks />
      </Grid>
      <Copyright />
    </footer>
  )
}