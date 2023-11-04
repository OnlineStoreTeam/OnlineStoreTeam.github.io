import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const TabLink = styled(Typography)`
  &:hover {
    text-decoration: underline;
  }
`;
const Circle = styled.svg`
  width: 4px;
  height: 4px;
  background-color: #fdfdfd;
  border-radius: 50%;
`;

const FooterTab = ({ label, isLast }) => (
  <>
    <Link to="/waiting_page">
      <TabLink
        variant="h3"
        color="#FDFDFD"
        fontWeight="bold"
        textTransform="uppercase"
      >
        {label}
      </TabLink>
    </Link>
    {!isLast && <Circle />}
  </>
);
export default FooterTab;
