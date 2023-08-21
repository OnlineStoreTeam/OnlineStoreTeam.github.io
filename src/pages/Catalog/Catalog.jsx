import React, { useContext } from "react";
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

const Wrapper = styled(Container)`
  padding: 0 56px;
`;
const TextCategory = styled(Typography)`
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

function Catalog() {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);

  return (
    <Wrapper maxWidth="false" disableGutters="true">
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
        >
          {categoryName}
        </Typography>
        <TextCategory component="p">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis nemo
          fuga placeat. Vero nemo soluta illo, at et repellat nulla?
          Necessitatibus, harum commo
        </TextCategory>
      </Box>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} pt={2} pb={5} gap={3} >
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Grid>
    </Wrapper>
  );
}
export default Catalog;
