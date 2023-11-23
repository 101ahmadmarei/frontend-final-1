import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import OrderTableRow from '../OrderTableRow/OrderTableRow';
import { useState } from 'react';
import { useOrderDetails } from '../../API/getOrderDetails';
import OrderTable from '../OrderTable/OrderTable';

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
  const [value, setValue] = useState(0);

  const prossecing = useOrderDetails('processing');
  const completed = useOrderDetails('completed');
  const canceled = useOrderDetails('cancelled');



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (prossecing.isLoading || completed.isLoading || canceled.isLoading) return <div></div>
  if (prossecing.error || completed.error || canceled.error) {
    return <div>{prossecing.error.message}</div>
  }

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

        {completed.data?.data != undefined ? <OrderTable orders={completed.data.data.orders}/> : <Typography>No Completed orders</Typography>}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {prossecing.data?.data != undefined ? <OrderTable orders={prossecing.data.data.orders}/> : <Typography>No prossecing orders</Typography>}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {canceled.data?.data != undefined ? <OrderTable orders={canceled.data.data.orders}/> : <Typography>No prossecing cancelled</Typography>}
      </CustomTabPanel>
    </Box>
  );
}

export default MyOrderNavigation