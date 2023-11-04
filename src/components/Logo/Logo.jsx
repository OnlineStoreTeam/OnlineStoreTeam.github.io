import { Typography, Box } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";

function Logo() {
    const screen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const screenLg = useMediaQuery((theme) => theme.breakpoints.only('lg'));
    return (
        <Link to="/waiting_page">
            <Box height={{xs: '42px', lg: '48px'}}>
                <img src="/logo.svg" alt="logo" 
                    style={{display: 'inline-block', height: '100%', margin: '0 12px 0 0 '}}/>
               {!screen && 
                    <img 
                        src="/logo_text.svg" 
                        alt="logo_text" 
                        style={{display: 'inline-block', height: screenLg? '38px': '32px'}}
                    />}
            </Box>
            
        </Link>
    );
}

export default Logo;