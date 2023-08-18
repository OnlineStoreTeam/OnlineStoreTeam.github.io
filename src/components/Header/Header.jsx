// import React from 'react';
// import { NavLink, Link, Routes, Route} from 'react-router-dom';
// import { Home } from '../pages/Home';
// import { AdminProduct } from '../admin/admin-product/AdminProduct';
// import {
//   LuSearch,
//   LuHeart,
//   LuUser,
//   LuShoppingCart,
//   LuChevronDown
// } from "react-icons/lu";
//
// function Header() {
//   const setActiveLink = ({ isActive }) =>
//     'mx-5 p-3 rounded-md ' + (isActive ? 'text-white' : 'text-white');
//
//   return (
//     <header className=''>
//       <div className='py-2 px-9 bg-[#808080] flex items-center justify-between text-base'>
//         <nav>
//           <NavLink to='/' className={setActiveLink}>About us</NavLink>
//           <NavLink to='/' className={setActiveLink}>Custumer service</NavLink>
//           <NavLink to='/' className={setActiveLink}>Contacts</NavLink>
//           <NavLink to='/' className={setActiveLink}>Blog</NavLink>
//           <NavLink to='/admin/product' className={setActiveLink}>Admin</NavLink>
//         </nav>
//         <button className='justify-self-end flex items-center text-white' >
//             En
//             <LuChevronDown />
//         </button>
//       </div>
//       <div className='py-6 px-14' >
//         <div className='flex justify-between items-center'>
//           <Link to={'/'} className='inline-block w-52 p-4 bg-[#808080] text-white text-2xl text-center'>LOGO</Link>
//           <fieldset className=' w-[422px] border-b flex justify-center' >
//             <input
//               type="search"
//               name="search-field"
//               className=' px-4 py-2 grow focus:outline-neutral-900 placeholder:text-black  placeholder:text-bold placeholder:text-xl'
//               placeholder='Search'
//             />
//             <button type='button' name='search-button' className=''>
//               <LuSearch className='h-6 w-6 font-light'/>
//             </button>
//           </fieldset>
//           <div className='flex justify-center items-center w-[200px] gap-8'>
//             <Link to='/' className=''><LuHeart className='h-6 w-6' /></Link>
//             <Link to='/' className=''><LuUser className='h-6 w-6' /></Link>
//             <Link to='/' className=''><LuShoppingCart className='h-6 w-6' /></Link>
//           </div>
//         </div>
//         <div className='py-6 flex justify-between flex-wrap items-center text-xl'>
//           <Link to='/' className=''>Clothing</Link>
//           <Link to='/' className=''>LEADS & HARNESSES</Link>
//           <Link to='/' className=''>Collars</Link>
//           <Link to='/' className=''>Toys</Link>
//           <Link to='/' className=''>Forniture</Link>
//           <Link to='/' className=''>Care</Link>
//           <Link to='/' className=''>Sale</Link>
//         </div>
//       </div>
//
//     </header>
//   );
// }
//
// export default Header;

import React from 'react';
import styled from "styled-components";
import {Box, Typography} from "@mui/material";
import Logo from "../Logo/Logo";
import NavLink from "../NavLink/NavLink";
import NavIcon from "../NavIcon/NavIcon";
import {HiMenuAlt1} from "react-icons/hi";
import { styled as muiStyled } from '@mui/system';

const HeaderContainer = styled(Box)`
  display: flex;
  width: 100%;
  padding-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background: #FDFDFD;
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
  font-family: 'lato', sans-serif;
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
  return (
      <HeaderContainer>
          <NavBar>
              <MenuContainer>
                  <StyledIcon>
                      <StyledHiMenuAlt1 />
                  </StyledIcon>
                  <MenuTitle>Menu</MenuTitle>
              </MenuContainer>
              <Logo />
              <NavIcon />
          </NavBar>
        <NavLink/>
      </HeaderContainer>
  );
}

export default Header;
