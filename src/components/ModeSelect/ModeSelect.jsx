import React from 'react';
import {useColorScheme} from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModeSelect() {
    const {mode, setMode} = useColorScheme();

    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode)
    };

    return (
        <FormControl sx={{m: 1, minWidth: '120px'}} size="small">
            <InputLabel
                id="label-select-dark-light-mode"
                sx={{
                    color: 'white',
                    '&.Mui-focused': { color: 'white'}
                }}
            >Mode</InputLabel>
            <Select
                labelId="label-select-dark-light-mode"
                id="select-dark-light-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
                sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline':{ borderColor: '#a4a3a3' },
                    '&:hover .MuiOutlinedInput-notchedOutline':{ borderColor: 'white'},
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline':{ borderColor: 'white'},
                    '&.MuiSvgIcon-root': {color: 'white'}
                }}
            >
                <MenuItem value="light">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <LightModeIcon fontSize="small"/>Light
                    </Box>
                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <DarkModeIcon fontSize="small"/>Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <SettingsBrightnessIcon fontSize="small"/>System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default ModeSelect;