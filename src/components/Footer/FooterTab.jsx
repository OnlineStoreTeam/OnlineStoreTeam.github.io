import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";

const TabLink=styled(Typography)`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: #FDFDFD;
  line-height: normal;
  text-transform: uppercase;
  &:hover{
    text-decoration: underline;
  }
`;
const Circle = styled.svg`
  width: 4px;
  height: 4px;
  background-color: #FDFDFD;
  border-radius: 50%;
`;

const FooterTab = ({ label, isLast }) => (
    <>
        <Link to='/'>
            <TabLink>{label}</TabLink>
        </Link>
        {!isLast && <Circle />}
    </>
);
export default FooterTab;
