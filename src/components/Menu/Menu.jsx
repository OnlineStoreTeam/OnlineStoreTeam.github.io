import { Box, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import MenuLinkTab from "./MenuLinkTab";

const MenuContainer = styled(Box)`
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #FAFAFA;
    border-top: 1px solid #EEE;
    padding: 0 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
`;

function Menu ({isMenuOpen, closeMenu}){
    return (
        <MenuContainer sx={{
            height: isMenuOpen ? '200px': 0
        }}>
            <Stack spacing={3}>
                <Link to="/waiting_page" variant="h4" underline="hover" color='inherit' onClick={closeMenu}>Contacts</Link>
                <Link to="/waiting_page" variant="h4" underline="hover" color='inherit' onClick={closeMenu}>Delivery & Returns</Link>
                <Link to="/waiting_page" variant="h4" underline="hover" color='inherit' onClick={closeMenu}>Blog</Link>
            </Stack>
            <Stack spacing={2} direction='row'>
                <MenuLinkTab label='All products' path='products' closeMenu={closeMenu}></MenuLinkTab>
                <MenuLinkTab label='Clothing' path='clothing' closeMenu={closeMenu}></MenuLinkTab>
                <MenuLinkTab label='Leads&amp;Harnesses' path='leads&amp;harnesses' closeMenu={closeMenu}></MenuLinkTab>
                <MenuLinkTab label='Collars' path='collars' closeMenu={closeMenu}></MenuLinkTab>
                <MenuLinkTab label='Toys' path='toys' closeMenu={closeMenu}></MenuLinkTab>
                <MenuLinkTab label='Furniture' path='furniture' closeMenu={closeMenu}></MenuLinkTab>
                <MenuLinkTab label='Care' path='care' closeMenu={closeMenu}></MenuLinkTab>
            </Stack>

        </MenuContainer>
    )
}

export default Menu;