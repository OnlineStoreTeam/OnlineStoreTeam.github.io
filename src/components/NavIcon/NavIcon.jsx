import React from 'react';
import { NavLink } from 'react-router-dom';
import {Box} from '@mui/material';
import styled from 'styled-components';
import {AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi";

const NavIconContainer = styled(Box)`
  display: flex;
  width: 175px;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const IconLink = styled(NavLink)`
  text-decoration: none;
`;
const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAiOutlineSearch = styled(AiOutlineSearch)`
  font-size: 24px;
`;

const StyledAiOutlineUser = styled(AiOutlineUser)`
  font-size: 24px;
`;

const StyledFiShoppingBag = styled(FiShoppingBag)`
  font-size: 24px;
`;

function NavIcon() {
    return (
        <NavIconContainer>
            <IconLink to="/">
                <StyledIcon>
                    <StyledAiOutlineSearch />
                </StyledIcon>
            </IconLink>
            <IconLink to="/">
                <StyledIcon>
                    <StyledAiOutlineUser/>
                </StyledIcon>
            </IconLink>
            <IconLink to="/">
                <StyledIcon>
                    <StyledFiShoppingBag/>
                </StyledIcon>
            </IconLink>
        </NavIconContainer>
    );
}
export default NavIcon;