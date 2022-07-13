import { useState } from 'react'

import './App.css';
import gabriel from './scaledgabriel2.jpg'

import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';





const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

//let innerTheme = createTheme();
//

let theme = createTheme({
  
  palette: {
    primary: {
      main: '#35342f',
      dark: '#000000',
    },
    secondary: {
      main: '#37bbe4',
    },
  },
});
theme = responsiveFontSizes(theme);





function App() {
  const [chosen, setChosen] = useState();
  //const [selectedButton, setSelectedButton] = useState();
  const buttons = [
    { text: 'About', id: 'abc123' },
    { text: 'Projects', id: 'def456' },
    { text: 'Contact', id: 'ghi789' },
  ];

  return (
   

    
    
      
    
    <div className="App">
      
      
      
      <Container maxWidth="lg">
     
     <ThemeProvider theme={theme}>

    <AppBar position="fixed" sx={{  backgroundColor: "#e1e0dd", display: 'flex', flexDirection: 'row', justifyContent: { md: "flex-end", xs: "center"} }}>
  
        
        <Toolbar variant="dense">

      {
                  buttons.map(button => (
                    <Button
                      href={"#" + button.text.toLowerCase()}
                      
                      onClick={() => setChosen(button.id)}
                      sx= {{ backgroundColor: button.id === chosen ? 'white' : "null"}}
                      key={button.id}
                    >
                      {button.text}
                    </Button>
                  ))
                }


        </Toolbar>
      </AppBar>
      <Offset />
      <header className="App-header">

      

      


     
      
      
      <Typography variant="h2" color="primary" align="left" sx={{}}>Gabriel Hrastovic</Typography>
      <Typography variant="h3" color="primary.dark" align="left">Programmer</Typography>
      
      
      
      
      
      
      <hr></hr>
      
      <Box sx={{ marginTop: '15%'}}>
      <Typography variant="body1" color="primary" paragraph={true} align="left">I am Croatian-American and I have lived all around the world. I'm looking for a team or company to work with where I can continue learning the most modern web development practices, and where I can contribute my creativity and knowledge of European, American, and eastern Asian cultures and languages. I am particularly interested in contributing towards localization, frontend UI implementation, and with some more practice - the backend. I'm completely open to learning any language and technology, although up to this point my focus has been on vanilla JavaScript and React.
      </Typography>
      <Typography variant="body1" color="primary" paragraph={true} align="left">I've spent a great deal of my life on the computer, mainly creating comedic content with video games and also playing them professionally. I moved to Seoul, South Korea when I was 18 years old where I ran my own business with livestreaming and creating content for platforms like YouTube and Twitch. The past few years, my interests have changed and I began learning programming in order to do it as a career. Outside of programming, physical fitness has become my priority, weightlifting and endurance training. I'm also a big fan of punk rock and electronic music.
      </Typography>
      <Box sx={{position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
      <Button >View Resume</Button>
      </Box>
      </Box>
      </header>
    
    </ThemeProvider>
    </Container>
    </div>
  );
}

export default App;

