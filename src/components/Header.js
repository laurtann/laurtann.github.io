import React, { useState, useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SocialLinks from './SocialLinks';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import imgUrl from '../../src/images/hero-image-lt.png';

const useStyles = makeStyles((theme) => ({
  heroContent : {
    padding       : theme.spacing(8, 0, 6),
    color         : '#303e69',
    textTransform : 'none',
    height        : '50vh',
    paddingTop    : '20vh',
    letterSpacing : '0.08em'
  },
  img : {
    width : '15vh'
  },
  heroButtons : {
    marginRight    : theme.spacing(1),
    marginTop      : theme.spacing(2),
    textTransform  : 'none',
    textDecoration : 'none'
  },
  image : {
    width : '20%'
  },
  name : {
    paddingBottom : theme.spacing(2)
  },
  socialLinks : {
    display        : 'flex',
    flexDirection  : 'column-reverse',
    justifyContent : 'flex-end',
    alignItems     : 'center',
    marginRight    : theme.spacing(3)
  }
}));

export default function Header (props) {
  const classes = useStyles();

  // Typewriter effect
  const descriptors = ['Traveller', 'Marketer', 'Web Developer'];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === descriptors.length) {
      return;
    }

    if (subIndex === descriptors[index].length + 1 &&
        index !== descriptors.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    },
    Math.max(reverse ? 75 : subIndex === descriptors[index].length ? 500 : 75, parseInt(Math.random() * 150)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div
      className={ classes.heroContent }
      style={ {
        backgroundImage    : `url(${ imgUrl })`,
        // backgroundImage    : heroImage,
        backgroundPosition : 'right bottom',
        backgroundSize     : 'cover',
        backgroundRepeat   : 'no-repeat'
      } }
    >
      <Grid container>
        <Grid item xs={ 2 } lg={ 2 }>
          <div className={ classes.socialLinks }>
            <SocialLinks isVertical={ true }/>
          </div>
        </Grid>
        <Grid item xs={ 10 } lg={ 10 }>
          <Typography className={ classes.name } component="h2" variant="h5" align="left" gutterBottom>
            <strong>Hi! I&apos;m Laura.</strong>
          </Typography>
          <Typography variant="h3" align="left" paragraph>
          <strong>
            I&apos;m a {`${ descriptors[index].substring(0, subIndex) }${ blink ? '|' : ' ' }`}
            <br></br>
            Based in Halifax, NS
          </strong>
        </Typography>
        <AnchorLink href='#portfolio' className={ classes.heroButtons }>
          <Button variant="contained" color="secondary" className={ classes.heroButtons }>
              My Portfolio
          </Button>
        </AnchorLink>
        <AnchorLink href='#about-me' className={ classes.heroButtons }>
          <Button variant="contained" color="primary" className={ classes.heroButtons }>
            About Me
          </Button>
        </AnchorLink>
        </Grid>
      </Grid>
    </div>
  );
}
