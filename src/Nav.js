import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  navButton: {
    color: '#303e69',
    '&:hover': {
      color: '#Ff5f66',
      backgroundColor: "transparent"
    },
    textTransform: 'none'
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className={classes.title}>
          <Button className={classes.navButton}><strong>Projects</strong></Button>
          <Button className={classes.navButton}><strong>Contact</strong></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}