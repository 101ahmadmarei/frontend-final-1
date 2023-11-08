


import { Button, ThemeProvider } from '@mui/material';


import { theme } from './theme/theme';



function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>Test</Button>
        {<>


        </>
        }
      </div>
    </ThemeProvider>

  );
}

export default App;
