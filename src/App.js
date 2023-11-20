import './App.css';
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
<<<<<<< HEAD
=======
import DetailsPage from './pages/DetailsPage/DetailsPage';
import LoginPage from './pages/loginPage/LoginPage';
import { CookiesProvider } from 'react-cookie';

>>>>>>> c0b3de6d0b329748c4fa2c2250f374b5e04d19bd


function App() {
  
  return (
    <CookiesProvider>

      <ThemeProvider theme={theme}>
        <CssBaseline/>
      <RouterProvider router={router}/>
        {/* <LoginPage /> */}
      </ThemeProvider>
    </CookiesProvider>

<<<<<<< HEAD
      <div style={{ display: 'flex', marginBottom: 55, width: '100%', paddingTop: 65, paddingLeft: 20, paddingRight: 20 }}>
        <div style={{ width: '50%' }}><DetailsCarosel></DetailsCarosel></div>
        <div><DetailsDescription></DetailsDescription></div>

      </div>

      <div style={{ position: 'absolute' }}><BasicTab /></div>
    </ThemeProvider>
=======
>>>>>>> c0b3de6d0b329748c4fa2c2250f374b5e04d19bd
  );
}







export default App;
