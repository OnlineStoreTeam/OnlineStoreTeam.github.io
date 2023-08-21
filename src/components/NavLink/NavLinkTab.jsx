import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";
import { styled as muiStyled } from '@mui/system';
import { CategoryNameContext } from '../Context';


const NavLinkTabList = muiStyled(Typography)`
  color: #161616;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

function NavLinkTab ({ label, path }) {
    const { categoryName, setCategoryName} = useContext(CategoryNameContext);

    const choseCategory = ()=>{
        setCategoryName(label);
    }

    return(
        <>
            <Link to={path} onClick={choseCategory}>
                <NavLinkTabList>{label}</NavLinkTabList>
            </Link>
        </>
    )
        
    
};
export default NavLinkTab;