import * as React from 'react';

import { IconButton } from '@mui/material';


export default function IconBtn({ icon , click}) {
  return (

    <IconButton color={'primary'} onClick={click}>
      {icon}
    </IconButton>

  );
}
