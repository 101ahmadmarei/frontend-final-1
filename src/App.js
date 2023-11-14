import { theme } from './theme/theme';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
