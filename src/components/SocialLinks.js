import React from 'react';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon } from '@material-ui/icons';
import { Grid, IconButton, Link } from '@material-ui/core';

export default function SocialLinks ({ isVertical }) {
  return (
    <Grid item style={ { display : 'flex', flexDirection : isVertical ? 'column' : 'row' } }>
      <Link href={ 'https://www.linkedin.com/in/laura-tannahill/' }>
        <IconButton color="secondary" aria-label="add an alarm">
          <LinkedInIcon />
        </IconButton>
      </Link>
      <Link href={ 'https://github.com/laurtann' }>
        <IconButton aria-label="secondary" color="secondary">
          <GitHubIcon />
        </IconButton>
      </Link>
      <Link href={ 'https://twitter.com/laurathedev' }>
        <IconButton color="secondary" aria-label="add an alarm">
          <TwitterIcon />
        </IconButton>
      </Link>
    </Grid>
  );
}
