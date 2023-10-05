import React from 'react';
import { Link } from 'react-router-dom';
import {Box} from '@mui/material';
import styled from 'styled-components';
import {AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import {FiShoppingBag} from "react-icons/fi";
import { useMediaQuery } from "@mui/material";

const NavIconContainer = styled(Box)`
  display: flex;
  width: fit-content;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const IconLink = styled(Link)`
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

function NavIcon({searchOpen}) {
  const screen = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return (
        <NavIconContainer>
            {!screen && <Box onClick={ searchOpen }>
                <StyledIcon>
                    <StyledAiOutlineSearch  />
                </StyledIcon>
            </Box>}
            <IconLink to="/waiting_page">
                <StyledIcon>
                    <StyledAiOutlineUser/>
                </StyledIcon>
            </IconLink>
            <IconLink to="/waiting_page">
                <StyledIcon>
                    <StyledFiShoppingBag/>
                </StyledIcon>
            </IconLink>
        </NavIconContainer>
    );
}
export default NavIcon;