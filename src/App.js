import { theme } from './theme/theme';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material';
import DetailsDescription from './Component/DetailsDescription/DetailsDescription';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import BasicTab from './Component/BasicTab/BasicTab';
import Brand from './Component/Brand/Brand';
import Makeup from './Component/Makeup/Makeup';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Makeup />
    </ThemeProvider>
  );






}

export default App;
