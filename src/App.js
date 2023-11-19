import { theme } from './theme/theme';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from '@mui/material';
import DetailsCarosel from './Component/DetailsCarosel/DetailsCarosel';
import DetailsPage from './pages/DetailsPage/DetailsPage';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <DetailsPage />
    </ThemeProvider>
  );
}







export default App;
