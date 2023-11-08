import { Button, ThemeProvider } from '@mui/material';
import './App.css';
import CheckOutPage from './pages/checkOutPage/checkOutPage';
import { theme } from './theme/theme';
import PageHeader from './Component/pageHeader/PageHeader';
import ProfileListItem from './Component/ProfileListItem/ProfileListItem';
import PersonalPage from './pages/PersonalPage/PersonalPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App">
      </div> */}
      {/* <PageHeader title={'Personal Information'}/> */}
      {/* <ProfileListItem/> */}
      <PersonalPage/>
    </ThemeProvider>
  );
}

export default App;
