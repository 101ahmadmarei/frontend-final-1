


import { Button, ThemeProvider } from '@mui/material';

import './App.css';
import Header from './Component/Header/Header'
import { theme } from './theme/theme';






function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>Test</Button>
        {<>

          <Header />


        </>
        }
      </div>
    </ThemeProvider>

  );
}

export default App;
