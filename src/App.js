


import { Button, ThemeProvider } from '@mui/material';
import Header from './Component/Header/Header';

import Handpicked from './Component/Handpicked/Handpicked';
import Footer from './Component/Footer/Footer';
import { theme } from './theme/theme';
import PageHeader from './Component/pageHeader/PageHeader';
import ProfileListItem from './Component/ProfileListItem/ProfileListItem';
import PersonalPage from './pages/PersonalPage/PersonalPage';


import Bran from './Component/Brand/Bran';
import Header from './Component/Header/Header';
import NewArr from './Component/NewArrivals/NewArr';



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
