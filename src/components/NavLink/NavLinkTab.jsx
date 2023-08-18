import React from 'react';
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import { styled as muiStyled } from '@mui/system';


const NavLinkTabList = muiStyled(Typography)`
  color: #161616;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NavLinkTab = ({ label }) => (
    <>
        <Link to='/'>
            <NavLinkTabList>{label}</NavLinkTabList>
        </Link>
    </>
);
export default NavLinkTab;