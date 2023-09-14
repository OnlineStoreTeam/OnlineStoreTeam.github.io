
import React, { useState , useContext, useEffect} from "react";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import MenuLinkTab from "./MenuLinkTab";
import Modal from '@mui/material/Modal';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, NavLink } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { isModalMenuOpenContext } from "../../components/Context";


const MenuContainer = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-top: 1px solid #EEE;
    background-color: #FDFDFD;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
`;
const MenuHeader = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid #EEE;
    background-color: #FAFAFA;
`;
const MenuHeaderLogo = styled(Link)`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 42px;
`;
const StyledCloseOutlinedIcon = styled(CloseOutlinedIcon)`
    &:hover{
        cursor: pointer;
    }
`;
const StyledLink = styled(Link)`
    font-weight: 300;
    line-height: 150%;
`;

function ModalMenu (){
    const { isModalMenuOpen, setIsModalMenuOpen } = useContext(isModalMenuOpenContext);
    const [ open, setOpen] = useState(false);

    const handelClose = ()=>{
        setIsModalMenuOpen(false)
    };
    return (
        <Modal
            open={isModalMenuOpen}
            onClose={handelClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <MenuContainer width={{sx: 'fit content', sm: '358px', md: '495px'}}>
                <MenuHeader pl={{xs: 4, sm: 4, md: 9}} pr={{xs: 4, sm: 4, md: 9}} >
                   <MenuHeaderLogo to="/" 
                   style={{}}
                   onClick={()=>setIsModalMenuOpen(false)}
                   > 
                        <img src="/logo.svg" alt="logo" 
                            style={{ height: '100%', margin: '0 12px 0 0 '}}/>
                        <img 
                            src="/logo_text.svg" 
                            alt="logo_text" 
                            style={{display: 'inline-block', height: '32px'}}
                        />
                    </MenuHeaderLogo>
                    <StyledCloseOutlinedIcon onClick={()=>setIsModalMenuOpen(false)}/>
                </MenuHeader>
                
                <Stack direction='column' mb={8} pl={{xs: 4, sm: 4, md: 9}} 
                       divider={
                       <Divider orientation="horizontal" flexItem light/>
                        }>
                    <MenuLinkTab label='All products' path='products'></MenuLinkTab>
                    <MenuLinkTab label='Clothing' path='clothing'></MenuLinkTab>
                    <MenuLinkTab label='Leads&amp;Harnesses' path='leads&amp;harnesses'></MenuLinkTab>
                    <MenuLinkTab label='Collars' path='collars'></MenuLinkTab>
                    <MenuLinkTab label='Toys' path='toys'></MenuLinkTab>
                    <MenuLinkTab label='Furniture' path='furniture'></MenuLinkTab>
                    <MenuLinkTab label='Care' path='care'></MenuLinkTab>
                </Stack>
                <Stack spacing={4} pl={{xs: 4, sm: 4, md: 9}}>
                    <StyledLink href="#" variant="h4" underline="hover" color='inherit' onClick={()=>setIsModalMenuOpen(false)}>Log In</StyledLink>
                    <StyledLink href="#" variant="h4" underline="hover" color='inherit' onClick={()=>setIsModalMenuOpen(false)}>Contacts</StyledLink>
                    <StyledLink href="#" variant="h4" underline="hover" color='inherit' onClick={()=>setIsModalMenuOpen(false)}>Delivery & Returns</StyledLink>
                    <StyledLink href="#" variant="h4" underline="hover" color='inherit' onClick={()=>setIsModalMenuOpen(false)}>Blog</StyledLink>
                </Stack>
            </MenuContainer>
        </Modal>

    )
}

export default ModalMenu;