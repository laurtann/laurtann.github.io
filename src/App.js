import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
// import PhotoGallery from './components/PhotoGallery';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import ProjectCardList from './components/ProjectCardList';
import Footer from './components/Footer';

const firaFont = "'Fira Sans', sans-serif";
const poppinsFont = "'Poppins', sans-serif";

const defaultTheme = createMuiTheme({
  palette : {
    primary : {
      main         : '#303e69',
      contrastText : '#fff'
    },
    secondary : {
      main         : '#Ff5f66',
      contrastText : '#fff'
    }
  },
  typography : {
    fontFamily : firaFont,
    h1         : {
      fontFamily : poppinsFont,
      fontWeight : '700'
    },
    h2 : {
      fontFamily : poppinsFont,
      fontWeight : '700'
    },
    h3 : {
      fontFamily : poppinsFont,
      fontWeight : '700'
    }
  }
});

const theme = responsiveFontSizes(defaultTheme);

export default function App () {
  return (
    <ThemeProvider theme={ theme }>
      <main>
        <Nav />
        <Header />
        {/* <PhotoGallery /> */}
        <AboutMe />
        <ProjectCardList />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
