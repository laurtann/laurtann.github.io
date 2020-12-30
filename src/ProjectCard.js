import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Container, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { cards } from './Projects'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ProjectCard () {
  const classes = useStyles();
  return (
  <Container className={classes.cardGrid} maxWidth="md">
    {/* End hero unit */}
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={card.imgSrc}
              title={card.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {card.name}
              </Typography>
              <Typography>
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={card.repo}>
                Github Repo
              </Link>
              <Link href={card.live}>
                Live Project
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )

}