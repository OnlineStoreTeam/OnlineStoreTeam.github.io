import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <NavLink to="/">
                <img src="/logo_header.png" alt="" />
        </NavLink>
    );
}

export default Logo;