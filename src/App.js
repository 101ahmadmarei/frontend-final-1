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
import DetailsPage from './pages/DetailsPage/DetailsPage';
import LoginPage from './pages/loginPage/LoginPage';
import { CookiesProvider } from 'react-cookie';



function App() {

  return (
    <CookiesProvider>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <LoginPage /> */}
      </ThemeProvider>
    </CookiesProvider>

  );
}







export default App;
