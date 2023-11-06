import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import CheckOutPage from './pages/checkOutPage/checkOutPage';
import { theme } from './theme/theme';


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
