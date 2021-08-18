import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper } from '@material-ui/core';
import image1 from '../../src/images/laura-maderas.png';
import image2 from '../../src/images/laura-cocora.png';
import image3 from '../../src/images/laura-clementine.png';
import image4 from '../../src/images/laura-comuna13.png';

const useStyles = makeStyles((theme) => ({
  root : {
    display         : 'flex',
    flexWrap        : 'wrap',
    justifyContent  : 'space-around',
    overflow        : 'hidden',
    backgroundColor : theme.palette.background.paper
  },
  gallery : {
    paddingTop : '3vh',
    maxHeight  : '30vh'
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const itemData = [
  {
    img   : image1,
    title : 'Laura on top of volcan Maderas, Nicaragua'
  },
  {
    img   : image2,
    title : 'Laura in front of trees in Cocora Vallery, Colombia'
  },
  {
    img   : image3,
    title : 'Laura in front of a water fountain with boxer dog, Clementine in Halifax, NS'
  },
  {
    img   : image4,
    title : 'Laura in front of Comuna 13 in Colombia'
  }
];

export default function PhotoGallery () {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <Container className={ classes.gallery } maxWidth="lg" id="portfolio">
        <Grid container spacing={ 1 }>
        {itemData.map((item, i) => (
          <Grid item xs={ 6 } md={ 3 } key={ i }>
            <Paper>
              <img src={ item.img } alt={ item.title } style={ { objectFit : 'cover' } }/>
            </Paper>
          </Grid>
        ))}
        </Grid>
      </Container>
    </div>
  );
}
