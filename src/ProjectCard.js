import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function ProjectCard (props) {
  const classes = useStyles();
  return (
    <Grid item key={props.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.imgSrc}
          title={props.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography>
            {props.description}
          </Typography>
          <br></br>
          <Typography>
            {props.techStack}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={props.repo} target="_blank">
            Github Repo
          </Link>
          <Link href={props.live} target="_blank">
            Live Project
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}