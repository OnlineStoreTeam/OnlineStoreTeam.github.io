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
            <NavLinkTab label='All products'></NavLinkTab>
            <NavLinkTab label='Clothing'></NavLinkTab>
            <NavLinkTab label='Leads&amp;Harnesses'></NavLinkTab>
            <NavLinkTab label='Collars'></NavLinkTab>
            <NavLinkTab label='Toys'></NavLinkTab>
            <NavLinkTab label='Forniture'></NavLinkTab>
            <NavLinkTab label='Care'></NavLinkTab>
        </NavLinkContainer>

    );
}

export default NavLink;