import { Box, Stack } from '@mui/material';
import styled from 'styled-components';
import MenuLinkTab from './MenuLinkTab';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const MenuContainer = styled(Box)`
  height: 100%;
  border-top: 1px solid #eee;
  background-color: #fdfdfd;
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
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
`;
const MenuHeaderLogo = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 42px;
`;
const StyledCloseOutlinedIcon = styled(CloseOutlinedIcon)`
  &:hover {
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  font-weight: 300;
  line-height: 150%;
`;

function ModalMenu({ closeMenu, categories }) {
  return (
    <MenuContainer width={{ sx: 'fit content', sm: '358px', md: '495px' }}>
      <MenuHeader pl={{ xs: 4, sm: 4, md: 9 }} pr={{ xs: 4, sm: 4, md: 9 }}>
        <MenuHeaderLogo to="/waiting_page" onClick={closeMenu}>
          <img
            src="/logo.svg"
            alt="logo"
            style={{ height: '100%', margin: '0 12px 0 0 ' }}
          />
          <img
            src="/logo_text.svg"
            alt="logo_text"
            style={{ display: 'inline-block', height: '32px' }}
          />
        </MenuHeaderLogo>
        <StyledCloseOutlinedIcon onClick={closeMenu} />
      </MenuHeader>

      <Stack
        direction="column"
        mb={8}
        pl={{ xs: 4, sm: 4, md: 9 }}
        divider={<Divider orientation="horizontal" flexItem light />}
      >
        <MenuLinkTab
          label="All products"
          path="products"
          id={0}
          closeMenu={closeMenu}
        ></MenuLinkTab>
        {categories?.map((category) => (
          <MenuLinkTab
            label={category.name}
            path={category.path}
            id={category.id}
            closeMenu={closeMenu}
            key={category.id}
          ></MenuLinkTab>
        ))}
      </Stack>
      <Stack spacing={4} pl={{ xs: 4, sm: 4, md: 9 }}>
        <StyledLink
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Log In
        </StyledLink>
        <StyledLink
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Contacts
        </StyledLink>
        <StyledLink
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Delivery & Returns
        </StyledLink>
        <StyledLink
          to="/waiting_page"
          variant="h4"
          underline="hover"
          color="inherit"
          onClick={closeMenu}
        >
          Blog
        </StyledLink>
      </Stack>
    </MenuContainer>
  );
}

export default ModalMenu;
