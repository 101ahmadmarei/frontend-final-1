import { theme } from './theme/theme';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material';
import ShowImage from './Component/ShowImage/ShowImage';
import ItemDetails from './Component/ItemDetails/ItemDetails';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ItemDetails />
      {/* <RouterProvider router={router} /> */}
    </ThemeProvider>
  );






}

export default App;
