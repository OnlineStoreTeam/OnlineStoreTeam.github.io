
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import CloseOutlinedIcon  from '@mui/icons-material/CloseOutlined';
import { styled as muiStyled } from "@mui/system";
import { useMediaQuery, Drawer } from "@mui/material";
import { useGetAllCategoriesQuery } from "../../redux/categories/categoryApi";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import NavIcon from "../NavIcon/NavIcon";
import Menu from "../Menu/Menu";
import ModalMenu from "../Menu/ModalMenu";
import Search from "../Search/Search";


const HeaderContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  background: #fdfdfd;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &:hover{
    cursor: pointer
  }
`;
const NavBar = styled(Box)`
  display: flex;
  padding: 16px 56px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #EEE;
`;
const MenuContainer = styled(Box)`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12px;
`;
const MenuLink = styled(Box)`
  display: flex;
  // width: 175px;
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
const StyledAiOutlineSearch = styled(AiOutlineSearch)`
  font-size: 24px;
`;

function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const screen = useMediaQuery((theme) => theme.breakpoints.only('lg'));
  const screenSm = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [ modalMenuState, setModalMenuState ]= useState(false);
  const [ searchState, setSearchState ]= useState(false);

  const { data } =useGetAllCategoriesQuery({page:0, limit:10})

  const searchOpen = ()=>{
    setSearchState(true);
  }
  const searchClose = ()=>{
    setSearchState(false);
  }

  const drawerOpen = ()=>{
    setModalMenuState(true);
  }
  const drawerClose = ()=>{
    setModalMenuState(false);
  }
  const openMenu = ()=>{
    if(screen){
      setIsMenuOpen(!isMenuOpen)
    } else {
      drawerOpen();
    }
  }
  const closeMenu = ()=>{
    if(screen){
      setIsMenuOpen(!isMenuOpen)
    } else{
      drawerClose();
    }
  }
  useEffect(()=>{
    setModalMenuState(false);
    setIsMenuOpen(false);
  }, [screen])

  return (
      <HeaderContainer>
        <NavBar>
          <MenuLink>
            <MenuContainer onClick={()=>openMenu()}>
              <StyledIcon>
                {!isMenuOpen && <StyledHiMenuAlt1 />}
                {isMenuOpen && screen && <CloseOutlinedIcon/>}
              </StyledIcon>
              {!screenSm && <MenuTitle >Menu</MenuTitle>}
            </MenuContainer>
            {screenSm && <Box onClick={searchOpen}>
                  <StyledIcon>
                      <StyledAiOutlineSearch  />
                  </StyledIcon>
              </Box>}
          </MenuLink>
          <Logo/>
          <NavIcon searchOpen={searchOpen} />
        </NavBar>
        {screen && <NavLink categories={data?.content}/>}
        {screen && <Menu categories={data?.content} isMenuOpen={isMenuOpen} closeMenu={closeMenu}/>}
        <Drawer
          open={modalMenuState}
          anchor="left"
          onClose={drawerClose}
          transitionDuration={500}       >
          <ModalMenu categories={data?.content} closeMenu={closeMenu}/>
        </Drawer>
        <Drawer
          open={searchState}
          anchor="right"
          onClose={searchClose}
          transitionDuration={500}
        >
          <Search searchClose={searchClose}/>
        </Drawer>
      </HeaderContainer>
  );
}

export default Header;
