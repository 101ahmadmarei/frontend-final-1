


import { Button, ThemeProvider } from '@mui/material';

import './App.css';
import CheckOutPage from './pages/checkOutPage/checkOutPage';
import { theme } from './theme/theme';


import Bran from './Component/Brand/Bran';
import Header from './Component/Header/Header';
import NewArr from './Component/NewArrivals/NewArr';



function App() {
  return (

    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant='contained'>Test</Button>
        {/* <CheckOutPage /> */}
      </div>
    </ThemeProvider>

  );
}

export default App;
