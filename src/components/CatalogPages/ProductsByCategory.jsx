import React, {useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Grid } from '@mui/material';
import { useSelector } from "react-redux";
import ProductCard from '../ProductCard/ProductCard';
import { useGetProductsByCategoryQuery } from "../../redux/productApi/productApi";
import { selectCategoryId } from "../../redux/categories/categorySlice";

const ProductsByCategory = ({currentPage, filterCatalog}) => {
  const categoryId = useSelector(selectCategoryId)
  const { data, isLoading, isError } = useGetProductsByCategoryQuery({
      page: currentPage,
      limit: 12,
      id: (categoryId!== 0 ? categoryId : null)
    })
    
  const [catalog, setCatalog] = useState();

  useEffect(() => { 
    if (!isLoading && !isError && data) {
        setCatalog(data);
        filterCatalog(data?.totalPages, data?.totalElements )  }
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
      {!isLoading && !isError && !data && (
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

export default ProductsByCategory;
