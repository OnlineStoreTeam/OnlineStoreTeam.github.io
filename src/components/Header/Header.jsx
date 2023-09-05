
import React, { useState } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import NavIcon from "../NavIcon/NavIcon";
import { HiMenuAlt1 } from "react-icons/hi";
import { styled as muiStyled } from "@mui/system";
import Menu from "../Menu/Menu";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const HeaderContainer = styled(Box)`
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: #fdfdfd;
  position: relative;
  &:hover{
    cursor: pointer
  }
`;
const NavBar = styled(Box)`
  display: flex;
  padding: 0 56px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const MenuContainer = styled(Box)`
  display: flex;
  width: 175px;
  align-items: center;
  gap: 12px;
`;
const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuTitle = muiStyled(Typography)`
  font-size: 18px;
  color: #161616;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const StyledHiMenuAlt1 = styled(HiMenuAlt1)`
  font-size: 24px;
`;
function Header() {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  return (
    <HeaderContainer>
      <NavBar>
        <MenuContainer onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          <StyledIcon>
            {!isMenuOpen && <StyledHiMenuAlt1 />}
            {isMenuOpen && <CloseOutlinedIcon/>}
          </StyledIcon>
          <MenuTitle >Menu</MenuTitle>
        </MenuContainer>
        <Logo />
        <NavIcon />
      </NavBar>
      <NavLink/>
      <Menu isMenuOpen={isMenuOpen}/>
    </HeaderContainer>
  );
}

export default Header;
