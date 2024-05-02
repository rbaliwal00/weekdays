import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Filter = ({name, options, value, setValue}) => {
    return (
        <Autocomplete
            disablePortal
            multiple={true}
            fullWidth={true}
            id="combo-box-demo"
            options={options}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={name} />}
        />
    );
};

export default Filter;