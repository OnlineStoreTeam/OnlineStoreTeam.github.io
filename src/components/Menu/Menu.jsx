import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuLinkTab from './MenuLinkTab';

const MenuContainer = styled(Box)`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #fafafa;
  padding: 0 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
`;

function Menu({ isMenuOpen, closeMenu, categories }) {
  return (
    <MenuContainer
      sx={{
        height: isMenuOpen ? '200px' : 0,
      }}
    >
      <Stack spacing={3}>
        <Link
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Contacts
        </Link>
        <Link
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Delivery & Returns
        </Link>
        <Link
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Blog
        </Link>
      </Stack>
      <Stack spacing={2} direction="row">
        <MenuLinkTab label='All products' path='products' id={0} closeMenu={closeMenu}/>
        {categories?.map((category) => (
          <MenuLinkTab
            label={category.name}
            path={category.path}
            closeMenu={closeMenu}
            key={category.id}
            id={category.id}
          />
        ))}
      </Stack>
    </MenuContainer>
  );
}

export default Menu;
