import { Box, Stack, Item, Link } from "@mui/material";
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

function Menu ({isMenuOpen}){
    return (
        <MenuContainer sx={{
            height: isMenuOpen ? '200px': 0
        }}>
            <Stack spacing={3}>
                <Link href="#" variant="h4" underline="hover" color='inherit'>Contacts</Link>
                <Link href="#" variant="h4" underline="hover" color='inherit'>Delivery & Returns</Link>
                <Link href="#" variant="h4" underline="hover" color='inherit'>Blog</Link>
            </Stack>
            <Stack spacing={2} direction='row'>
                <MenuLinkTab label='Clothing' path='clothing'></MenuLinkTab>
                <MenuLinkTab label='Leads&amp;Harnesses' path='leads&amp;harnesses'></MenuLinkTab>
                <MenuLinkTab label='Collars' path='collars'></MenuLinkTab>
                <MenuLinkTab label='Toys' path='toys'></MenuLinkTab>
                <MenuLinkTab label='Furniture' path='furniture'></MenuLinkTab>
                <MenuLinkTab label='Care' path='care'></MenuLinkTab>
            </Stack>

        </MenuContainer>
    )
}

export default Menu;