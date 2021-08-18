import React, { useState, Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Drawer,
  Button,
  List,
  ListItem
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ScrollAndHide from './ScrollAndHide';
const Pdf = 'https://www.lauratannahill.com/resume/laura-tannahill-resume.pdf';

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow : 1
  },
  menuButton : {
    marginRight : theme.spacing(2)
  },
  title : {
    flexGrow       : 1,
    justifyContent : 'flex-end'
  },
  navButton : {
    color     : '#303e69',
    '&:hover' : {
      color           : '#Ff5f66',
      backgroundColor : 'transparent'
    },
    textDecoration : 'none',
    textTransform  : 'none',
    fontWeight     : '500'
  },
  listButton : {
    color     : '#fff',
    '&:hover' : {
      color           : '#Ff5f66',
      backgroundColor : 'transparent'
    },
    textDecoration : 'none',
    textTransform  : 'none',
    fontWeight     : '700'
  },
  list : {
    width           : 250,
    height          : '100vh',
    paddingTop      : '15vh',
    backgroundColor : '#303e69',
    backgroundImage : `url("https://www.transparenttextures.com/patterns/3px-tile.png")`,
    justifyContent  : 'center'

  },
  fullList : {
    width : 'auto'
  },
  mainNavHide : {
    [theme.breakpoints.down('md')] : {
      display : 'none'
    }
  },
  navIconHide : {
    [theme.breakpoints.up('lg')] : {
      display : 'none'
    }
  }
}));

const menuOptions = [
  {
    link : '#about-me',
    text : 'About Me'
  },
  {
    link : '#portfolio',
    text : 'Portfolio'
  }
];

export default function Nav (props) {
  const classes = useStyles();
  const [state, setState] = useState({
    top    : false,
    left   : false,
    bottom : false,
    right  : false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor] : open });
  };

  const list = (anchor) => (
    <div
      className={ clsx(classes.list, {
        [classes.fullList] : anchor === 'top' || anchor === 'bottom'
      }) }
      role="presentation"
      onClick={ toggleDrawer(anchor, false) }
      onKeyDown={ toggleDrawer(anchor, false) }
    >
      <List>
        {menuOptions.map((option, i) => (
          <ListItem key={ i }>
            <AnchorLink
              href={ option.link }
              className={ classes.listButton }>
              <Button className={ classes.listButton }>{option.text}</Button>
            </AnchorLink>
        </ListItem>
        ))}
        <ListItem>
          < a href={ Pdf }
            without rel="noopener noreferrer"
            target="_blank"
            className={ classes.listButton }>
            <Button className={ classes.listButton }>Résumé</Button>
          </a>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Fragment>
      <ScrollAndHide threshold={ 0 }>
        <div className={ classes.root }>
          <AppBar position="fixed" style={ { background : 'transparent', boxShadow : 'none' } }>
            <Toolbar className={ classes.title }>
              <div className = { classes.mainNavHide }>
                {menuOptions.map((option, i) => (
                  <AnchorLink
                    key={ i }
                    href={ option.link }
                    className={ classes.navButton }>
                  <Button className={ classes.navButton }>{option.text}</Button>
                  </AnchorLink>
                ))}
                  < a href={ Pdf }
                    without rel="noopener noreferrer"
                    target="_blank"
                    className={ classes.navButton }>
                    <Button className={ classes.navButton }>Résumé</Button>
                  </a>
              </div>
              {/* Show hamburger draweron smaller screens */}
              <div className={ classes.navIconHide }>
                {['right'].map((anchor) => (
                  <Fragment key={ anchor }>
                    <Button onClick={ toggleDrawer(anchor, true) }>
                      <MenuIcon color="primary"/>
                    </Button>
                    <Drawer
                      anchor={ anchor }
                      open={ state[anchor] }
                      onClose={ toggleDrawer(anchor, false) }
                    >
                      {list(anchor)}
                    </Drawer>
                  </Fragment>
                ))}
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </ScrollAndHide>
    </Fragment>
  );
}
