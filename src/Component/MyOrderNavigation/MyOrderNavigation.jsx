import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import CoralBtn from '../CoralBtn/CoralBtn';
import OrderTable from '../OrderTable/OrderTable';
import OrderTableRow from '../OrderTableRow/OrderTableRow';

const Container = styled.div`
// width: 100%;
display:flex;
background-color:#F4F4F4;
border-radius: 15px;
padding: 10px 10px;
// gap: 20px;
`;
const Container1 = styled.div`
width: 100%;
margin-top: 20px;
`;

const TableHeader = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid #0000001F;
padding: 5px 50px 5px 10px;
`;
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function MyOrderNavigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Completed" {...a11yProps(0)} />
          <Tab label="Processing" {...a11yProps(1)} />
          <Tab label="Cancelled" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Container1>
          <TableHeader>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Order ID</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Date</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Price</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Status</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}> </Typography>
          </TableHeader>
          <OrderTableRow />
          <OrderTableRow />
          <OrderTableRow />
          <OrderTableRow />
        </Container1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Container1>
          <TableHeader>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Order ID</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Date</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Price</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Status</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}> </Typography>
          </TableHeader>
          <OrderTableRow />
          <OrderTableRow />
          <OrderTableRow />
          <OrderTableRow />
        </Container1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Container1>
          <TableHeader>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Order ID</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Date</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Price</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}>Status</Typography>
            <Typography component={'p'} color={'textGray.main'} sx={{ width: '80px' }}> </Typography>
          </TableHeader>
          <OrderTableRow />
          <OrderTableRow />
          <OrderTableRow />
          <OrderTableRow />
        </Container1>
      </CustomTabPanel>
    </Box>
  );
}

export default MyOrderNavigation