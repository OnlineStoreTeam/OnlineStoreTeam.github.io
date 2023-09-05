import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Logo() {
    return (
        <Link to="/">
                <img src="/logo_header.png" alt="" />
        </Link>
    );
}

export default Logo;