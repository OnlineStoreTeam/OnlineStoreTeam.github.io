import React, {useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import { useGetAllProductsQuery } from "../../redux/productApi/productApi";
const AllProducts = ({currentPage, filterCatalog}) => {

  const { data, isLoading, isError } = useGetAllProductsQuery({
      page: currentPage,
      limit: 12,
    })
  const [catalog, setCatalog] = useState();

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setCatalog(data?.content);
      filterCatalog(data?.totalPages, data?.totalElements )
    }
  }, [data, isLoading, isError, filterCatalog]);

  return (
    <>
      
      {isLoading && (
        <CircularProgress sx={{ display: 'block', margin: '0 auto' }} />
      )}
      {isError && (
        <Typography align="center" variant="h2" color="secondary.dark" mt={4.5}>
          Error: Unable to load data
        </Typography>
      )}
      {!isLoading && !isError && !data?.totalElements && (
        <Typography align="center" variant="h2" color="secondary.dark" mt={4.5}>
          There are no products in this category yet
        </Typography>
      )}
      <Grid
        container
        mb={{ sm: 12, md: 16, lg: 18 }}
        columnGap={{ sm: 0, md: 3, lg: 6 }}
        rowSpacing={{ xs: 4, sm: 4, md: 4, lg: 8 }}
        justifyContent="flex-start"
      >
        {catalog?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default AllProducts;
