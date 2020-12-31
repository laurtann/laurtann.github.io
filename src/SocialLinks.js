import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, IconButton, Link } from '@material-ui/core';

export default function SocialLinks() {
  return (
    <Grid item>
      <Link href={"https://github.com/laurtann"}>
        <IconButton aria-label="secondary" color="secondary">
          <GitHubIcon />
        </IconButton>
      </Link>
      <Link href={"https://www.linkedin.com/in/laura-tannahill/"}>
        <IconButton color="secondary" aria-label="add an alarm">
          <LinkedInIcon />
        </IconButton>
      </Link>
    </Grid>
  )
}