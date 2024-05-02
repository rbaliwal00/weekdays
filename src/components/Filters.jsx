import React from 'react';
import Filter from './Filter';
import { TextField } from '@mui/material';

const Filters = ({role, setRole, location, setLocation, company, setCompany}) => {
    const rolesArray = [
        "Backend",
        "Frontend",
        "Full Stack",
        "IOS",
        "Flutter",
        "React Native",
        "Andriod",
        "Dev-Ops"
    ];

    const locationsArray = [
        "India",
        "Delhi",
        "Delhi Ncr",
        "Mumbai",
        "Remote",
        "Chennai",
        "Bangalore",
    ];

    return (
        <div className='flex gap-2'>
            <Filter name="Roles" options={rolesArray} value={role} setValue={setRole}/>
            <Filter name="Locations" options={locationsArray} value={location} setValue={setLocation}/>
            <TextField value={company} onChange={(e) => setCompany(e.target.value)} label='Search Company Name'/>
        </div>
        
        
    );
};

export default Filters;