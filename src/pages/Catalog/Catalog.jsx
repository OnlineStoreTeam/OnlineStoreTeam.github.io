import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  Box,
  Button
} from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/system";
import { CategoryNameContext } from "../../components/Context";
import ProductCard from "../../components/ProductCard/ProductCard";
import ReactPaginate from 'react-paginate';

import { 
  useGetAllProductsQuery, useGetProductsByCategoryQuery,
} from '../../store/userProductApi';


const TextCategory = styled(Typography)`
  width: 572px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

const StyledPaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-bottom: 88px;
`;

const StyledSeoTypography = styled(Typography)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 119px;
  width: 100%;
  background: linear-gradient(360deg, #FDFDFD 0%, rgba(253, 253, 253, 0.00) 100%);
  opacity: 0;
  &.visible {
    opacity: 1;
    transition-delay: 0.3s; // Затримка 0.3 секунди
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
  // &:focus{
  //   color: #D15F31;
  // }
`

function Catalog() {
  const { categoryName, setCategoryName } = useContext(CategoryNameContext);
  const [ catalog, setCatalog ]= useState();
  const [ categoryDescription, setCategoryDescription ] = useState('');
  const initialCategoryName = useRef(categoryName);
  const [countResults, setCountResults] = useState();
  const [pageCount, setPageCount ] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [ categorySEOText, setCategorySeoText ] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga cumque placeat iusto sunt perferendis facere et minima sequi earum porro quod ratione, fugiat voluptatibus voluptates nulla aliquid sapiente corporis expedita eum necessitatibus voluptatem adipisci repellat. Cum autem numquam minima adipisci assumenda! Necessitatibus perspiciatis dignissimos possimus at atque dolor est aliquid aliquam labore assumenda ullam error dolore voluptate ex veritatis nisi in exercitationem, illo earum numquam facilis. Laudantium, quos. Reiciendis non, quaerat magnam asperiores voluptas modi iusto blanditiis inventore quos aperiam, architecto reprehenderit! Blanditiis, nostrum provident. Repellendus, quisquam? Maxime, nam voluptatum? Veniam illo distinctio deleniti omnis. Deleniti unde quasi molestiae voluptatum necessitatibus voluptas distinctio atque officia, libero enim nobis reprehenderit esse magnam impedit eaque accusantium reiciendis dolore. Sed, ullam! Fugiat dolor adipisci odit! Natus laborum voluptatem ducimus veritatis, perspiciatis aut unde necessitatibus qui delectus doloremque vel veniam illo esse voluptas pariatur et nobis illum? Molestias quo magni natus molestiae nulla?');
  const [ isMoreText, setIsMoreText ] = useState(false);
  const [ isMoreTextVisible, setIsMoreTextVisible ] = useState(false);


  const { data } = useGetAllProductsQuery({page: currentPage, limit: 12});
  // const { filteredByCategoryData } = useGetProductsByCategoryQuery({page: currentPage, limit: 12, category: categoryName});

  const changeCategoryDescription = ()=>{
    switch(categoryName.toLowerCase()){
      case 'all products':
        setCategoryDescription("Explore our wide range of dog products designed to cater to the needs of your furry friend. From premium dog food and stylish accessories to durable toys and cozy beds, our collection offers everything your dog needs for a happy and healthy life. ")
        break;
      case 'clothing':
        setCategoryDescription("Elevate your pup's style with our exquisite collection of dog clothing. From cozy sweaters and trendy jackets to adorable costumes for special occasions, we offer a wide range of options to keep your furry friend both comfortable and fashionable. Browse our selection and dress your dog in charming outfits that reflect their personality.")
        break;
      case 'leads&harnesses':
        setCategoryDescription("Discover our collection of premium dog leads and harnesses designed for both style and functionality. Whether you're looking for sturdy and reliable leads for walks or comfortable harnesses for added control, our selection offers a variety of options to suit your dog's needs.")
        break;
      case 'collars':
        setCategoryDescription("Explore our assortment of dog collars that blend style and functionality seamlessly. From elegant leather designs to adjustable nylon options, our collection offers a wide range of collars to suit your dog's personality and needs. Whether you're looking for everyday wear or a special occasion, keep your beloved pet both safe and stylish with our diverse selection of collars.")
        break;
      case 'toys':
        setCategoryDescription("Discover a world of fun and entertainment with our curated collection of dog toys. From interactive puzzle toys that engage your pet's mind to durable chew toys that satisfy their natural instincts, our range offers a diverse selection to keep your furry friend happily occupied. Explore our assortment and provide your canine companion with hours of joy and playtime.")
        break;
      case 'forniture':
        setCategoryDescription("Elevate your dog's comfort with our selection of stylish and functional dog furniture. From cozy beds and plush sofas to ergonomic feeding stations, our collection offers a range of furniture pieces designed to provide your canine companion with a comfortable and relaxing environment. Browse our assortment and create a cozy oasis for your furry friend.")
        break;
      case 'care':
        setCategoryDescription("Nurture your dog's well-being with our comprehensive range of dog care products. From grooming essentials like shampoos and brushes to health supplements and dental care items, our collection offers everything you need to ensure your furry friend's health and happiness. ")
        break;
        
    }
  }
  useEffect(()=>{
    // if(categoryName === "All products"){
      setCatalog(data?.content);
      setCountResults(data?.totalElements);
      setPageCount(data?.totalPages);
    // } else{
    //   setCatalog(filteredByCategoryData?.content);
    //   setCountResults(filteredByCategoryData?.totalElements);
    //   setPageCount(filteredByCategoryData?.totalPages);
    // }
    changeCategoryDescription();
  }, [data])

  const handlePageClick = (page)=>{
    setCurrentPage(page?.selected);    
  }

  useEffect(() => {
    if (categoryName !== initialCategoryName.current) {
      changeCategoryDescription();
      initialCategoryName.current = categoryName;
    }
  }, [categoryName]);


  const showMore = ()=>{
    setIsMoreText(!isMoreText);
    setTimeout(() => {
      setIsMoreTextVisible(!isMoreTextVisible);
    }, 50);
  }

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
        {categoryDescription} 
        </TextCategory>
      </Box>
      <Grid 
          container 
          columns={{ xs: 4}} 
          pt={2} 
          mb={11} 
          gap={4}
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
      <Box mb={7.5} sx={{position: 'relative'}}>
        {!isMoreText && <StyledSeoTypography className={!isMoreTextVisible ? 'visible' : ''}>
        </StyledSeoTypography>}
        <Typography 
          mb={2} 
          sx={{
            overflow:'hidden',
            maxHeight: isMoreText ? '200px' : '119px',
            transitionDuration: '0.5s',
           }}
          >{categorySEOText}</Typography>
        <StyledMoreButton
          onClick={showMore}
        >Show more</StyledMoreButton>
      </Box>
    </Container>
  );
}
export default Catalog;
