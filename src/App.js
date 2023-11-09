


import { Button, ThemeProvider } from '@mui/material';
import Header from './Component/Header/Header';

import Handpicked from './Component/Handpicked/Handpicked';
import Footer from './Component/Footer/Footer';
import { theme } from './theme/theme';
import PageHeader from './Component/pageHeader/PageHeader';
import ProfileListItem from './Component/ProfileListItem/ProfileListItem';
import PersonalPage from './pages/PersonalPage/PersonalPage';


import Bran from './Component/Brand/Brand';
import NewArr from './Component/NewArrivals/NewArr';




import Productlist from './Component/Productlist/Productlist';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Productlist />
      </div>
    </ThemeProvider>
  );
}

export default App;
