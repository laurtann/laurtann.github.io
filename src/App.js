import React from 'react';
import Nav from './Nav';
import Header from './Header';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import ProjectCardList from './ProjectCardList';
import Footer from './Footer'

const firaFont = "'Fira Sans', sans-serif";
const notoFont = "'Noto Sans', sans-serif";

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#303e69',
      contrastText: '#fff'
    },
    secondary: {
      main: '#Ff5f66',
    },
  },
  typography: {
    fontFamily: firaFont,
    h1: {
      fontFamily: notoFont
    },
    h2: {
      fontFamily: notoFont
    },
    h3: {
      fontFamily: notoFont
    }
  }
});

// well this is just amazing.
const theme = responsiveFontSizes(defaultTheme);

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <main>
        <Nav />
        <Header />
        <ProjectCardList />
      </main>
      <Footer />
    </ThemeProvider>
  )
};