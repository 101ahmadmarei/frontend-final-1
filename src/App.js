 



import Footer from './Component/Footer/Footer';
import { theme } from './theme/theme';
import PageHeader from './Component/pageHeader/PageHeader';
import ProfileListItem from './Component/ProfileListItem/ProfileListItem';
import PersonalPage from './pages/PersonalPage/PersonalPage';


import Bran from './Component/Brand/Brand';
import NewArr from './Component/NewArrivals/NewArr';
import Header from './Component/Header/Header';
import Productlist from './Component/Productlist/Productlist';



import './App.css';



import Productlist from './Component/Productlist/Productlist';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
