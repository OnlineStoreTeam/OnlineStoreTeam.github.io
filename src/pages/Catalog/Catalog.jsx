import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import {
  Container,
  Breadcrumbs,
  Typography,
  Box
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SeoTextBox from "../../components/SeoText/SeoTextBox";
import AllProducts from "../../components/CatalogPages/AllProducts";
import { selectCategoryId } from "../../redux/categories/categorySlice";
import theme from "../../theme";
import { useEffect } from "react";
import ProductsByCategory from "../../components/CatalogPages/ProductsByCategory";
import { useGetAllCategoriesQuery } from "../../redux/categories/categoryApi";
import CategoryDescription from "../../components/CategoryDescription/CategoryDescription";

const StyledPaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  &:hover{
    text-decoration: underline;
  };
  color: #161616;
  font-size: ${props => (props.screen === 'true' ? '14px' : '12px')}; ;
`;

function Catalog() {
  const [ categoryName, setCategoryName ] = useState();
  const [ countResults, setCountResults ] = useState();
  const [ pageCount, setPageCount ] = useState();
  const [ currentPage, setCurrentPage ] = useState(0);
  const screen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const categoryId = useSelector(selectCategoryId);
  const { data } = useGetAllCategoriesQuery({page:0, limit:10});

  useEffect(()=>{
    if(categoryId === 0){
      setCategoryName('All products')
    } else{
      if(data){
        const category = data?.content.find(category=>category.id === categoryId)
        setCategoryName(category.name)
      }
    }
    
    
  }, [data, categoryId, setCategoryName])

  const filterCatalogByCategory = (countOfPage, countOfResults)=>{
    setPageCount(countOfPage);
    setCountResults(countOfResults);
  }
     
  const handlePageClick = (page)=>{
    setCurrentPage(page?.selected);    
  }

  return (
    <Container fixed sx={{ paddingX: theme.paddingX, position: 'relative' }} disableGutters={true}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledLink to="/waiting_page" screen={screen.toString()}>Home</StyledLink>
        <Typography color="#A0A0A0" fontSize={{ sm: '12px', md: '12px', lg: '14px'}}>{categoryName}</Typography>
      </Breadcrumbs>
      <CategoryDescription categoryName={categoryName}/>
      {categoryId === 0? (
        <AllProducts currentPage={currentPage} filterCatalog={filterCatalogByCategory} />
      ):(
        <ProductsByCategory currentPage={currentPage} filterCatalog={filterCatalogByCategory}/>
      ) }
      <StyledPaginationBox mb={countResults>12? {sm: 12, md: 16, lg: 18} : 0}>
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
      <SeoTextBox categoryName={categoryName}/>
    </Container>
  );
}
export default Catalog;
