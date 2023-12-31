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
import theme from "../../theme";
import { useMediaQuery } from "@mui/material";

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
  border-radius: 2px;
  &.Mui-focusVisible{
    background-color: black;
  }
  `;
const StyledCard = styled(Card)`
  padding: 28px;
  height: 473px;
  width: 100%;
  transition: all 0.2s ease-in-out;
  border-radius: 2px;
`;

function ProductCard({ product }) {
  const [isCardHover, setIsCardHover] = useState(false);
  const [ productName, setProductName ] = useState(product.name);
  // const [ isButtonPressed, setIsButtonPressed ] = useState(false);

  const screen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(()=>{
    if(productName?.length > 50){
      setProductName( productName?.substring(0, 50) + '...');
    }
  }, [productName])

  const cardHover = ()=>{
    if(screen){
      setIsCardHover(!isCardHover);
    }
  }

  return (
    <Grid item 
          width={{xs: '100%', sm: '100%', md: '50%', lg:'33%'}}  
          maxWidth={{xs:'100%', sm: '382px', md: '340px', lg: '373px'}} 
          >
      <StyledCard
        variant="outlined"
        square
        onMouseEnter={()=> cardHover()}
        onMouseLeave={() => cardHover()}
        sx={{
          filter: product.productStatus==="TEMPORARILY_ABSENT"? "grayscale(100%)" : "grayscale(0%)",
          '&:hover': screen? {
            cursor: 'pointer',
            boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
          } : null
        }}
      >
        <StyledCardMedia
          component="img"
          src={product.imagePath}
          title="photo"
          sx={{
            height: !screen? '233px' : isCardHover ? "223px" : "287px",
            objectFit: "contain"
          }}
        />
        <CardContent sx={{ padding: "20px 0" }}>
          <Typography
            variant="body1"
            component="p"
            fontSize={12}
            fontFamily="Lato"
            pb={1}
          >
            {product.article}
          </Typography>
          <Typography
            gutterBottom
            variant="h3"
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
          <Typography variant="h5">
            $ {product.price}
          </Typography>
        </CardContent>
        <StyledButton
          variant="contained"
          fullWidth={true}
          disableElevation
          disabled = { product.productStatus === 'TEMPORARILY_ABSENT'? true : false }
          sx={{
            display: !screen? theme.displayButton : isCardHover ? "block" : "none" ,
          }}
        >
          {product.productStatus === 'TEMPORARILY_ABSENT'? 'Out of stock' : 'Add to card'}
        </StyledButton>
      </StyledCard>
    </Grid>
  );
}
export default ProductCard;
