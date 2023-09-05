import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import styled from "styled-components";
import SeoClothing from "../../components/SeoText/SeoClothing";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { CategoryNameContext } from "../../components/Context";

const StyledSeoTypography = styled(Typography)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 119px;
  width: 100%;
  background: linear-gradient(360deg, #fdfdfd 0%, rgba(253, 253, 253, 0) 100%);
  opacity: 0;
  &.visible {
    opacity: 1;
    transition-delay: 0.3s;
  }
`;
const StyledMoreButton = muiStyled(Button)`
  padding: 12px 16px;
  margin-left: -16px;
  color: #161616;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  text-transform: none;
  font-weight: 700;
  line-height: normal;
  &:hover{
    color: #E86936;
    background-color: none;
  }
`;

function SeoTextBox() {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);
  const [isMoreText, setIsMoreText] = useState(false);
  const [isMoreTextVisible, setIsMoreTextVisible] = useState(false);

  const showMore = () => {
    setIsMoreText(!isMoreText);
    setTimeout(() => {
      setIsMoreTextVisible(!isMoreTextVisible);
    }, 50);
  };

  const getCategoryComponent = () => {
    switch (categoryName.toLowerCase()) {
      case "clothing":
        return <SeoClothing />;
    }
  };
  return (
    <Box mb={7.5} sx={{ position: "relative" }}>
      {!isMoreText && (
        <StyledSeoTypography
          className={!isMoreTextVisible ? "visible" : ""}
        ></StyledSeoTypography>
      )}
      <Box
        mb={2}
        sx={{
          overflow: "hidden",
          maxHeight: isMoreText ? "10000px" : "119px",
          transitionDuration: "0.5s",
        }}
      >
        {/* {getCategoryComponent()} */}
        <SeoClothing />
      </Box>
      <StyledMoreButton
        disableRipple={true}
        onClick={showMore}
        endIcon={isMoreText && <ExpandLessOutlinedIcon fontSize="large" />}
      >
        Show more
      </StyledMoreButton>
    </Box>
  );
}

export default SeoTextBox;
