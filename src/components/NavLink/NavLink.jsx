import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';
import NavLinkTab from './NavLinkTab';

const NavLinkContainer = styled(Box)`
  display: flex;
  height: 46px;
  padding: 0 56px;
  background: #eee;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
function NavLink({ categories }) {
  return (
    <NavLinkContainer>
      <NavLinkTab label="All products" path="products" id={0}></NavLinkTab>
      {categories?.map((category) => (
        <NavLinkTab
          label={category.name}
          path={category.name}
          id={category.id}
          key={category.id}
        />
      ))}
    </NavLinkContainer>
  );
}

export default NavLink;
