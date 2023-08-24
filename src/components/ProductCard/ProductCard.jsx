import React, { useState } from 'react';
import styled from "styled-components";
import { styled as muiStyled } from '@mui/system';
import {
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Button 
  } from "@mui/material";

  const StyledCardMedia= styled(CardMedia)`
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
  }
`;

function ProductCard (){

  const [isCardHover, setIsCardHover] = useState(false);

    return(
        <Grid item >
            <StyledCard 
            variant="outlined" 
            square 
            onMouseEnter={()=>setIsCardHover(true)}
            onMouseLeave={()=>setIsCardHover(false)}
            >
              <StyledCardMedia
                image="product.webp"
                title="photo"  
                sx={isCardHover? 'scale: 0.9; height: 223px;' : 'scale: 1; height: 287px;'}
              />
              <CardContent sx={{padding: '20px 0'}}>
                <Typography variant="body2" component="p" fontSize={12} fontFamily='Lato' pb={1} >RE3928</Typography>
                <Typography gutterBottom variant="h6" component="h2" fontFamily='Lato' pb={1.5}>
                  Lizard
                </Typography>
                <Typography variant="caption text" color="text.secondary">
                  $ 134
                </Typography>
              </CardContent>
              {/* <CardActions> */}
                <StyledButton  
                  variant="contained" 
                  fullWidth="true"
                  disableElevation
                  color="primary"
                  sx={isCardHover? 'display: block' : 'display: none'}
                  >Add to cart</StyledButton>
              {/* </CardActions> */}
            </StyledCard>
        </Grid>
    )
}

export default ProductCard;