import './App.css';
import { theme } from './theme/theme';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material';
import LoginPage from './pages/loginPage/LoginPage';
import { CookiesProvider } from 'react-cookie';



function App() {
  
  return (
    <CookiesProvider>

      <ThemeProvider theme={theme}>
        {/* <CssBaseline/>
      <RouterProvider router={router}/> */}
        <LoginPage />
      </ThemeProvider>
    </CookiesProvider>

  );
}

export default App;
