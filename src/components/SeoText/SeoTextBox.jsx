import React, { useContext, useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import styled from "styled-components";
import SeoClothing from "../../components/SeoText/SeoClothing";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { CategoryNameContext } from "../../components/Context";
import SeoAllProducts from "./SeoAllProducts";
import SeoCollars from "./SeoCollars";
import SeoLeads from "./SeoLeads";
import SeoToys from "./SeoToys";
import SeoFurniture from "./SeoFurniture";
import SeoCare from "./SeoCare";

const StyledSeoTypography = styled(Typography)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background: linear-gradient(360deg, #fdfdfd 0%, rgba(253, 253, 253, 0) 70%);
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
      case "all products":
        return <SeoAllProducts />;
      case "leads&harnesses":
        return <SeoLeads />;
      case "collars":
        return <SeoCollars />;
      case "toys":
        return <SeoToys />;
      case "furniture":
        return <SeoFurniture />;
      case "care":
        return <SeoCare />;
    }
  };
  return (
    <Box mb={7.5} sx={{ position: "relative" }}>
      {!isMoreText && (
        <StyledSeoTypography
          className={!isMoreTextVisible ? "visible" : ""}
          height={{ sm: '384px', md: '354px', lg: '210px'}}
        ></StyledSeoTypography>
      )}
      <Box
        maxHeight={!isMoreText? { sm: '384px', md: '354px', lg: '210px'} : '2000px'}
        sx={{
          overflow: "hidden",
          transitionDuration: "0.5s",
        }}
      >
        {getCategoryComponent()}
        {/* <SeoClothing /> */}
        {/* <SeoAllProducts/> */}
        {/* <SeoCollars/> */}
        {/* <SeoLeads/> */}
        {/* <SeoToys/> */}
        {/* <SeoFurniture/> */}
        {/* <SeoCare/> */}
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
