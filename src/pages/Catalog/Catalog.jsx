import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Box
} from "@mui/material";
import styled from "styled-components";
import { CategoryNameContext } from "../../components/Context";
import ProductCard from "../../components/ProductCard/ProductCard";
import ReactPaginate from 'react-paginate';
import CircularProgress from '@mui/material/CircularProgress';
import { 
  useGetAllProductsQuery, 
} from '../../store/userProductApi';
import CategoryDescription from "../../components/CategoryDescription/CategoryDescription";
import SeoTextBox from "../../components/SeoText/SeoTextBox";

const StyledPaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 88px;
`;

function Catalog() {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);
  const [ catalog, setCatalog ]= useState();
  const [ countResults, setCountResults ] = useState();
  const [ pageCount, setPageCount ] = useState();
  const [ currentPage, setCurrentPage ] = useState(0);
  const { data, isLoading, isError } = useGetAllProductsQuery({page: currentPage, limit: 12});
  
  const filteringProducts = (category)=>{
    if(category === "All products"){
      setCatalog(data?.content);
      setCountResults(data?.totalElements);
      setPageCount(data?.totalPages);
    } else {
      const productsByCategory = data?.content.filter(product=> product.category.toLowerCase() === categoryName.toLowerCase());
      setCatalog(productsByCategory);
      setCountResults(productsByCategory?.length);
      setPageCount(1)
    }
  }

  useEffect(() => {
    if (!isLoading && !isError && data) {
      filteringProducts(categoryName);
    }
  }, [data, isLoading, isError, categoryName]);
     
  const handlePageClick = (page)=>{
    setCurrentPage(page?.selected);    
  }

  return (
    <Container maxWidth="lg"  disableGutters={true}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="text.primary" href="/">
          Home
        </Link>
        <Typography color="#A0A0A0">{categoryName}</Typography>
      </Breadcrumbs>
      <CategoryDescription/>
      { isLoading && <CircularProgress sx={{display: 'block', margin: '0 auto'}}/>}
      { isError  && (
        <Typography 
          align="center" 
          variant="h2"
          color="secondary.dark"
          mt={4.5}
        >
          Error: Unable to load data
        </Typography>
      )}
      { !isLoading && !isError && !countResults && 
        <Typography 
          align="center" 
          variant="h2"
          color="secondary.dark"
          mt={4.5}
          >There are no products in this category yet</Typography>}
      <Grid 
          container 
          columns={{ xs: 4}} 
          pt={2} 
          mb={11} 
          rowSpacing={6} 
          columnSpacing={3}
          justifyContent="start"
          >
         {catalog?.map(product => <ProductCard key={product.id} product={product} />)}           
      </Grid>
      <StyledPaginationBox >
       {countResults>12 && <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          containerClassName='pagination flex'
          previousLabel='Previous'
          // previousClassName='page-item'
          previousLinkClassName='inline-block h-10 py-1.5 px-2.5 border text-center'
          nextLabel='Next'
          // nextClassName='page-item'
          nextLinkClassName='inline-block h-10 py-1.5 px-2.5 border text-center'
          // pageClassName='page-item'
          pageLinkClassName='inline-block w-10 h-10 p-2 border text-center'
          activeLinkClassName='bg-black border-black text-white'
          disabledClassName='opacity-50 cursor-default'
          breakLabel='...'
          // breakClassName='page-item'
          breakLinkClassName='inline-block w-10 h-10 p-2 border text-center'
          renderOnZeroPageCount={null}
        />}
      </StyledPaginationBox>
      <SeoTextBox/>
    </Container>
  );
}
export default Catalog;
