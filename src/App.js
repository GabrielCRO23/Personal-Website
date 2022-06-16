import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ButtonGroup from '@mui/material/ButtonGroup';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';




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









function App() {
  return (
    <Container maxWidth="lg">
    <ThemeProvider theme={theme}>
    <div className="App">
      
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
      <Typography variant="h3" color="secondary" align="left">Software Developer</Typography>
      <ArticleIcon color="secondary" fontSize="large" label="hi"sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'relative',

      }}></ArticleIcon>
      
      </Box>
      
      
      <Box sx={{
        display: 'flex',
      }}>
      <Button color="primary" >About</Button>
      <Button color="primary" >Projects</Button>
      <Button color="primary" >Contact</Button>
      </Box>
      
      </Box>
      
      
      <hr></hr>
      
      <Typography variant="body1" color="primary" paragraph={true} align="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, fugiat omnis enim tempora necessitatibus sapiente iste non corporis temporibus, earum esse optio ullam obcaecati quam, mollitia minus suscipit. Quidem facilis perferendis vel eaque, nostrum illo, nulla distinctio iusto cupiditate maxime molestiae debitis dignissimos numquam. Pariatur, reiciendis fugiat sed quidem vitae laudantium tenetur nobis commodi est, voluptas autem eum distinctio? Obcaecati sit labore perspiciatis deserunt. Molestias, omnis quo. Quo quasi placeat iure. Quam, qui. Nobis sapiente odit neque atque. Dolorem, quia numquam exercitationem, tenetur recusandae repellat autem in fugit vero id, consequuntur consequatur sequi dolores. Assumenda sed fuga nostrum in laborum!
      </Typography>
      <Typography variant="body1" color="primary" paragraph={true} align="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, fugiat omnis enim tempora necessitatibus sapiente iste non corporis temporibus, earum esse optio ullam obcaecati quam, mollitia minus suscipit. Quidem facilis perferendis vel eaque, nostrum illo, nulla distinctio iusto cupiditate maxime molestiae debitis dignissimos numquam. Pariatur, reiciendis fugiat sed quidem vitae laudantium tenetur nobis commodi est, voluptas autem eum distinctio? Obcaecati sit labore perspiciatis deserunt. Molestias, omnis quo. Quo quasi placeat iure. Quam, qui. Nobis sapiente odit neque atque. Dolorem, quia numquam exercitationem, tenetur recusandae repellat autem in fugit vero id, consequuntur consequatur sequi dolores. Assumenda sed fuga nostrum in laborum!
      </Typography>
        
      </header>
    </div>
    </ThemeProvider>
    </Container>
  );
}

export default App;
