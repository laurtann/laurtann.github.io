import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow   : 1,
    paddingTop : '3vh'
  },
  paper : {
    padding   : theme.spacing(2),
    textAlign : 'center',
    color     : theme.palette.text.secondary
  }
}));

export default function AboutMe () {
  const classes = useStyles();

  return (
    <div className={ classes.root } id="about-me">
      <Container maxWidth="md">
        <Grid container spacing={ 3 }>
          <Grid item xs={ 12 }>
          <Typography color="primary" component="h2" variant="h4" align="left" gutterBottom>
            <strong>About Me</strong>
          </Typography>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 } >
            <Typography component="h4" color="primary" variant="p" align="left" gutterBottom>
              Bio
            </Typography>
            <Typography component="p" color="primary" variant="p" align="left" gutterBottom>
              I am a full stack web developer with a background in television production and hospitality.
              I wrote by first line of code in a Web Design for SEO course while completing a diploma in Marketing Management and I haven&apos;t stopped since!
              <br></br><br></br>
              After over a year of creating Wordpress websites, I decided it was time to <em>really</em> learn
              how to code and enrolled in Web Development Bootcamp at Lighthouse Labs in October, 2020.
              I now work as a Web and Software Developer helping businesses streamline their manufacturing
              process.
              <br></br><br></br>
              When away from my text editor, I can usually be found somewhere in nature with my dog, Clementine.
            </Typography>
          </Grid>
          <Grid item xs={ 12 } sm={ 6 }>
            <Typography component="h4" color="primary" variant="p" align="left" gutterBottom>
              Favourite Tech
            </Typography>
            <Typography component="p" color="primary" variant="p" align="left" gutterBottom>
                <strong>Languages:</strong> JavaScript, TypeScript, Ruby, HTML & CSS<br></br>
                <strong>Frameworks & Libraries:</strong> NodeJS, ReactJS, Next.js, Rails, Redux, JQuery, Express, Koa, Bootstrap & Material-UI<br></br>
                <strong>Systems, CMS, Databases & Other</strong>PostgreSQL, Active Record, MongoDB, NetSuite, Wordpress, Heroku & Git<br></br>
                <strong>Testing</strong>RSpec, Storybook, Jest, Cypress, Selenium, Mocha & Chai
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
