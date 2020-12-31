import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { cards } from './Projects'
import ProjectCard from './ProjectCard'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function ProjectCardList () {

  const classes = useStyles();
  return (
  <Container className={classes.cardGrid} maxWidth="md" id="projects">
    <Grid container spacing={4}>
      {cards.map((card) => (
        <ProjectCard
          id={card.id}
          name={card.name}
          imgSrc={card.imgSrc}
          description={card.description}
          repo={card.repo}
          live={card.live}
        />
      ))}
    </Grid>
  </Container>
  )
}