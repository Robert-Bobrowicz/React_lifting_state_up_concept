import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GetWeather } from './GetWeather';

export default function CitySelect() {
    const [city, setCity] = React.useState('New York');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <Box sx={{ width: 250 }}>
            <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Select
                    value={city}
                    label="City"
                    onChange={handleChange}
                >
                    <MenuItem value="New York">New York</MenuItem>
                    <MenuItem value="Toronto">Toronto</MenuItem>
                    <MenuItem value="London">London</MenuItem>
                    <MenuItem value="Paris">Paris</MenuItem>
                    <MenuItem value="Madrid">Madrid</MenuItem>
                    <MenuItem value="Berlin">Berlin</MenuItem>
                    <MenuItem value="Warsaw">Warsaw</MenuItem>
                    <MenuItem value="Oslo">Oslo</MenuItem>
                    <MenuItem value="Rome">Rome</MenuItem>
                    <MenuItem value="Athens">Athens</MenuItem>
                    <MenuItem value="Ankara">Ankara</MenuItem>
                    <MenuItem value="Seoul">Seul</MenuItem>
                </Select>
            </FormControl>
            <GetWeather city={city} />
        </Box>
    );
}
