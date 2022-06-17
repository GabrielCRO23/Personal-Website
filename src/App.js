import { useState } from 'react'

import './App.css';
import { ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';



const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);


const theme = createTheme({
  palette: {
    primary: {
      main: '#35342f',
    },
    secondary: {
      main: '#37bbe4',
    },
  },
});

let theme2 = createTheme();
theme2 = responsiveFontSizes(theme2);





function App() {
  const [chosen, setChosen] = useState();
  //const [selectedButton, setSelectedButton] = useState();
  const buttons = [
    { text: 'About', id: 'abc123' },
    { text: 'Projects', id: 'def456' },
    { text: 'Contact', id: 'ghi789' },
  ];

  return (
   

    
    <Container maxWidth="lg">
    <ThemeProvider theme={theme2}>
    <ThemeProvider theme={theme}>
    
    <div className="App">

    <AppBar position="fixed" sx={{backgroundColor: "#e1e0dd", display: 'flex', flexDirection: 'row', justifyContent: { md: "flex-end", xs: "center"} }}>
        <Toolbar variant="dense">

      {
                  buttons.map(button => (
                    <Button
                      href={"#" + button.text.toLowerCase()}
                      onClick={() => setChosen(button.id)}
                      sx= {{ backgroundColor: button.id === chosen? 'white' : 'primary', color: button.id === chosen? 'primary' : 'primary', cursor: 'pinter',}}
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
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      
      <Typography variant="h2" color="primary" align="left">Gabriel Hrastovic</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <Typography variant="h3" color="secondary" align="left">Programmer</Typography>
      
      </Box>
      
      
      <Box sx={{
        display: 'flex',
      }}>
                








      </Box>
      
      </Box>
      
      
      <hr></hr>
      
      <Box>
      <Typography sx={{}}variant="body1" color="primary" paragraph={true} align="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, fugiat omnis enim tempora necessitatibus sapiente iste non corporis temporibus, earum esse optio ullam obcaecati quam, mollitia minus suscipit. Quidem facilis perferendis vel eaque, nostrum illo, nulla distinctio iusto cupiditate maxime molestiae debitis dignissimos numquam. Pariatur, reiciendis fugiat sed quidem vitae laudantium tenetur nobis commodi est, voluptas autem eum distinctio? Obcaecati sit labore perspiciatis deserunt. Molestias, omnis quo. Quo quasi placeat iure. Quam, qui. Nobis sapiente odit neque atque. Dolorem, quia numquam exercitationem, tenetur recusandae repellat autem in fugit vero id, consequuntur consequatur sequi dolores. Assumenda sed fuga nostrum in laborum!
      </Typography>
      <Typography variant="body1" color="primary" paragraph={true} align="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, fugiat omnis enim tempora necessitatibus sapiente iste non corporis temporibus, earum esse optio ullam obcaecati quam, mollitia minus suscipit. Quidem facilis perferendis vel eaque, nostrum illo, nulla distinctio iusto cupiditate maxime molestiae debitis dignissimos numquam. Pariatur, reiciendis fugiat sed quidem vitae laudantium tenetur nobis commodi est, voluptas autem eum distinctio? Obcaecati sit labore perspiciatis deserunt. Molestias, omnis quo. Quo quasi placeat iure. Quam, qui. Nobis sapiente odit neque atque. Dolorem, quia numquam exercitationem, tenetur recusandae repellat autem in fugit vero id, consequuntur consequatur sequi dolores. Assumenda sed fuga nostrum in laborum!
      </Typography>
      </Box>
      </header>
    </div>
    </ThemeProvider>
    </ThemeProvider>
    </Container>
  );
}

export default App;

