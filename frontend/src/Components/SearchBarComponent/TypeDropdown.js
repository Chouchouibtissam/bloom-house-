import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import types from '../../Data/types.json'; 

export default function BasicSelect() {
  const [ty, settype] = React.useState('');
  const handleChange = (event) => {
    settype(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ty}
          label="Type"
          onChange={handleChange}
        >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          {
            types.map(type =>(
              <MenuItem key={type.id} value={type.type}>{type.type}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}