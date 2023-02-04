import React, {useMemo, useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import SearchBar from 'material-ui-search-bar'
import TypeDropdown from './TypeDropdown';
import Select from '@mui/material/Select';
import communes from '../../Data/communes.json'; 
import wilayas from '../../Data/wilayas.json';
import { Grid, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/system';

export default function FiltersSelect({ searchStr, handleSearch }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [co, setcommune] = React.useState('');
  const [wi, setwilaya] = React.useState({});
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);}
    
    const handleChangeCommune = (event) => {
      setcommune(event.target.value);
  };
  const handleChangeWilaya = (event) => {
    setwilaya(event.target.value);
    setIsDisabled(false)
  };

  const communeList = useMemo(() => communes.filter(c => c.wilaya_id === wi.id).map(c => c.nom), [wi]);
  
  return (
    <Box>
      <Box sx={{mb:2}}>
      <SearchBar
              onChange={(newValue) => { handleSearch(newValue) }}
              value={searchStr}
              style={{
                width: '100%',

                }}
              />
      </Box>
      <Box >
        <Grid container spacing={1}  direction="row" justifyContent="space-evenly" alignItems="center" >
          
          <Grid item xs={2} >
          <TypeDropdown />
          </Grid>
          
          <Grid item xs={2} >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id="demo-simple-select-label">Wilaya</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id= "demo-simple-select"
                value={wi}
                label="Wilaya"
                onChange={handleChangeWilaya}
                >
                <MenuItem value={{}}>
                  <em>None</em>
                </MenuItem>
                {
                  wilayas.map(wilaya =>(
                    <MenuItem key={wilaya.id} value={wilaya}>{wilaya.nom}</MenuItem>
                    ))
                  }
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={2} >
            <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }} disabled={isDisabled}>
              <InputLabel id="demo-simple-select-commun-label">Commune</InputLabel>
              <Select
                  labelId="demo-simple-select-commun-label"
                  id="demo-simple-select-disabled"
                  value={co}
                  label="Commune"
                  onChange={handleChangeCommune}
              >
                <MenuItem value="Commune">
                  <em>None</em>
                </MenuItem>
                {
                  communeList.map(commune =>(
                    <MenuItem key={commune} value={commune}>{commune}</MenuItem>
                    ))
                }
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Starting Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
          </Grid>
          
          <Grid item xs={3} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Ending Date"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}