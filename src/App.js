


import { Button, ThemeProvider } from '@mui/material';
import Header from './Component/Header/Header';

import Handpicked from './Component/Handpicked/Handpicked';
import Footer from './Component/Footer/Footer';
import { theme } from './theme/theme';



function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Button>Test</Button>
        {<>


          <Footer />
        </>
        }
      </div>
    </ThemeProvider>

  );
}

export default App;
