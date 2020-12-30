import React from 'react';
import Nav from './Nav';
import Header from './Header';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import ProjectCard from './ProjectCard'

const font = "'Fira Sans', sans-serif";
const h123 = "'Noto Sans', sans-serif";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#303e69'
    },
    secondary: {
      main: '#Ff5f66',
    },
  },
  typography: {
    fontFamily: font,
    h1: {
      fontFamily: h123
    },
    h2: {
      fontFamily: h123
    },
    h3: {
      fontFamily: h123
    }
  }
});

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <main>
        <Nav />
        <Header />
        <ProjectCard />
      </main>
    </ThemeProvider>
  )
};