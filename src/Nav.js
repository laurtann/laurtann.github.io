import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button } from '@material-ui/core';
import ScrollAndHide from "./ScrollAndHide";
// import Pdf from './laura-tannahill-resume.pdf';
const Pdf = "https://www.lauratannahill.com/resume/laura-tannahill-resume.pdf"

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
    textDecoration: "none",
    textTransform: 'none'
  }
}));

export default function Nav(props) {
  const classes = useStyles();

  return (
    <ScrollAndHide threshold={0}>
      <div className={classes.root}>
        <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar className={classes.title}>
            <a href="#projects" className={classes.navButton}><Button className={classes.navButton}><strong>Projects</strong></Button></a>
            < a href={Pdf} without rel="noopener noreferrer" target="_blank" className={classes.navButton}><Button className={classes.navButton}><strong>Résumé</strong></Button></a>
          </Toolbar>
        </AppBar>
      </div>
    </ScrollAndHide>
  );
}