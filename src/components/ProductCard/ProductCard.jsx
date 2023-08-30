import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const StyledCardMedia = styled(CardMedia)`
  width: 315px;
  transition: all 0.2s ease-in-out;
`;

const StyledButton = muiStyled(Button)`
  font-size: 16px;
  font-weight: 700;
  font-family: 'Lato';
  padding: 12px 16px;
  border-radius: 0;
  text-transform: none;
  transition: all 0.2s ease-in-out;
  `;
const StyledCard = styled(Card)`
  padding: 28px;
  height: 473px;
  width: 373px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
  }
`;

function ProductCard({ product }) {
  const [isCardHover, setIsCardHover] = useState(false);
  const [ productName, setProductName ] = useState(product.name);

  useEffect(()=>{
    if(productName.length > 50){
      setProductName( productName.substring(0, 50) + '...');
    }
  }, [])

  return (
    <Grid item>
      <StyledCard
        variant="outlined"
        square
        onMouseEnter={() => setIsCardHover(true)}
        onMouseLeave={() => setIsCardHover(false)}
        sx={{
          filter: product.productStatus==="TEMPORARILY_ABSENT"? "grayscale(100%)" : "grayscale(0%)"
        }}
      >
      
        <StyledCardMedia
        // image="product.webp"
          image={product.imagePath}
          title="photo"
          sx={{
            transform: isCardHover ? "scale(0.95)" : "scale(1)",
            height: isCardHover ? "223px" : "287px",
            
          }}
        />
        <CardContent sx={{ padding: "20px 0" }}>
          <Typography
            variant="body2"
            component="p"
            fontSize={12}
            fontFamily="Lato"
            pb={1}
          >
            {product.article}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            fontFamily="Lato"
            fontWeight={700}
            height={60}
            pb={1.5}
            mb={0}
            lineHeight={1}
          >
            {
            productName
            }
          </Typography>
          <Typography variant="caption text">
            $ {product.price}
          </Typography>
        </CardContent>
        <StyledButton
          variant="contained"
          fullWidth={true}
          disableElevation
          color="primary"
          disabled = { product.productStatus === 'TEMPORARILY_ABSENT'? true : false }
          sx={{
            display: isCardHover ? "block" : "none"
          }}
        >
          {product.productStatus === 'TEMPORARILY_ABSENT'? 'Out of stock' : 'Add to card'}
        </StyledButton>
      </StyledCard>
    </Grid>
  );
}

export default ProductCard;
