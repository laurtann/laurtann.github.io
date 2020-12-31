import React from "react";
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from './Copyright';

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
      <Typography variant="subtitle1" align="center" color="light" component="p">
        Social Links
      </Typography>
      <Copyright />
    </footer>
  )
}