import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid
} from "@mui/material";
import styled from "styled-components";
import { CategoryNameContext } from "../../components/Context";
import { Box } from "@mui/system";
import ProductCard from "../../components/ProductCard/ProductCard";

import { 
  useGetAllProductsQuery,
} from '../../store/productApi';


const TextCategory = styled(Typography)`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

function Catalog() {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [ catalog, setCatalog ]= useState();

  const { data } = useGetAllProductsQuery({page: currentPage, limit: 12});

  useEffect(()=>{
    setCatalog(data?.content);
  }, [data])

  console.log(catalog)
  return (
    <Container maxWidth="lg"  disableGutters={true}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="text.primary" href="/">
          Home
        </Link>
        <Typography color="#A0A0A0">{categoryName}</Typography>
      </Breadcrumbs>
      <Box
        component="div"
        pb={4.5}
        sx={{ width: "45%", height: "auto", margin: "0 auto" }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontSize: "32px" }}
          fontFamily='Lato'
        >
          {categoryName}
        </Typography>
        <TextCategory component="p" fontFamily='Lato'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nemo
          fuga placeat. Vero nemo soluta illo, at et repellat nulla?
          Necessitatibus, harum commo
        </TextCategory>
      </Box>
      <Grid 
          container 
          columns={{ xs: 4}} 
          pt={2} 
          pb={5} 
          gap={4}
          justifyContent="start"
          >
         {catalog?.map(product => <ProductCard key={product.id} product={product} />)}           
      </Grid>
    </Container>
  );
}
export default Catalog;
