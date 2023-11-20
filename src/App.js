import { theme } from './theme/theme';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material';
import DetailsDescription from './Component/DetailsDescription/DetailsDescription';
import BasicTab from './Component/BasicTab/BasicTab';
import Brand from './Component/Brand/Brand';
import Makeup from './Component/Makeup/Makeup';
import DetailsCarosel from './Component/DetailsCarosel/DetailsCarosel';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{ display: 'flex', marginBottom: 55, width: '100%', paddingTop: 65, paddingLeft: 20, paddingRight: 20 }}>
        <div style={{ width: '50%' }}><DetailsCarosel></DetailsCarosel></div>
        <div><DetailsDescription></DetailsDescription></div>

      </div>

      <div style={{ position: 'absolute' }}><BasicTab /></div>
    </ThemeProvider>
  );
}







export default App;
