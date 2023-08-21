import React from 'react';
import styled from "styled-components";
import {Box} from "@mui/material";
import NavLinkTab from "./NavLinkTab";


const NavLinkContainer = styled(Box)`
  display: flex;
  height: 46px;
  padding: 0 56px;
  background: #EEE;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
function NavLink() {
    
    return (
        <NavLinkContainer>
            <NavLinkTab label='All products' path='products'></NavLinkTab>
            <NavLinkTab label='Clothing' path='clothing'></NavLinkTab>
            <NavLinkTab label='Leads&amp;Harnesses' path='leads&amp;harnesses'></NavLinkTab>
            <NavLinkTab label='Collars' path='collars'></NavLinkTab>
            <NavLinkTab label='Toys' path='toys'></NavLinkTab>
            <NavLinkTab label='Forniture' path='forniture'></NavLinkTab>
            <NavLinkTab label='Care' path='care'></NavLinkTab>
        </NavLinkContainer>

    );
}

export default NavLink;