import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { cards } from './Projects';
import ProjectCard from './ProjectCard';

const useStyles = makeStyles((theme) => ({
  cardGrid : {
    paddingTop    : theme.spacing(8),
    paddingBottom : theme.spacing(8)
  }
}));

export default function ProjectCardList () {
  const classes = useStyles();
  return (
  <Container className={ classes.cardGrid } maxWidth="md" id="portfolio">
    <Typography color="primary" component="h2" variant="h4" align="left" gutterBottom>
      <strong>Portfolio Projects</strong>
     </Typography>
    <Grid container spacing={ 4 }>
      {cards.map((card, i) => (
        <ProjectCard
          key={ i }
          id={ card.id }
          name={ card.name }
          imgSrc={ card.imgSrc }
          techStack={ card.techStack }
          description={ card.description }
          repo={ card.repo }
          live={ card.live }
        />
      ))}
    </Grid>
  </Container>
  );
}
