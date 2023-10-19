import { Container, Typography, Breadcrumbs, TextField, InputAdornment, useMediaQuery, Box, Grid } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import {CatalogContext} from '../../components/Context';
import theme from "../../theme";
import { useGetAllProductsQuery } from "../../redux/productApi/productApi";
import SearchOffSharpIcon from '@mui/icons-material/SearchOffSharp';
import ProductCard from "../../components/ProductCard/ProductCard";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ReactPaginate from 'react-paginate';

const StyledLink = styled(Link)`
  &:hover{
    text-decoration: underline;
  };
  color: #161616;
  font-size: ${props => (props.screen === 'true' ? '14px' : '12px')}; ;
`;
const SearchField = styled(TextField)`
    & .css-aeeyth-MuiInputBase-input-MuiOutlinedInput-input{
        padding: 12px 16px 12px 8px;
        font-size: 16px;
    };
    & .css-tvhjaa-MuiInputBase-root-MuiOutlinedInput-root{
        padding-left: 12px;
    };
    
`;

const FlexBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ViewAllLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const StyledPaginationBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

function SearchResults (){
    const { searchCatalog }= useContext(CatalogContext);
    const screen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const [ inputValue, setInputValue ] = useState('');
    const [ filteringCatalog, setFilteringCatalog ]= useState();
    const [ isSearchTouched,  setIsSearchTouched ] = useState(false);
    const [ catalog, setCatalog] = useState();
    const { data } = useGetAllProductsQuery({page: 0, limit: 12});
    const [ countResults, setCountResults ] = useState();
    const [ pageCount, setPageCount ] = useState();

    useEffect(()=>{
        if(data){
            setCatalog(data.content);
        }
      }, [data])

    useEffect(()=>{
        if(searchCatalog){
            setFilteringCatalog(searchCatalog);
            setCountResults(searchCatalog.length);
            setPageCount(Math.ceil(searchCatalog.length/12))
        }
    }, [searchCatalog])

    const showResults = (e)=>{
        if(e.key === 'Enter' || e.target.id === 'results'){
            // setInputValue(e.target.value);
            let value = inputValue.toLowerCase().split(' ')[0];;
            const newCatalog = catalog.filter((product)=>product.name.toLowerCase().includes(value));
            value? setFilteringCatalog(newCatalog) : setFilteringCatalog(null);
            setIsSearchTouched(false);
        }
    }
    const handelInput = (e)=>{
        setInputValue(e.target.value);
        setIsSearchTouched(true);
    }
    const handlePageClick = (page)=>{
        console.log(page?.selected)
        // setCurrentPage(page?.selected);    
      }

    return(
        <Container fixed sx={{paddingX: theme.paddingX}} disableGutters={true}>
            <Breadcrumbs aria-label="breadcrumb">
                <StyledLink to="/waiting_page" screen={screen.toString()}>Home</StyledLink>
                <Typography color="#A0A0A0" fontSize={{ sm: '12px', md: '12px', lg: '14px'}}>SearchResults</Typography>
            </Breadcrumbs>
            <Typography fontSize={screen? '36px' : '28px'} textAlign={'center'}>Search results</Typography>
            <Box 
                width={{ xs: '100%', sm: '100%', md: '458px', lg: '476px'}} 
                mx={'auto'}
                mt={'16px'}
                mb={'64px'}
            >
                <SearchField 
                    id="outlined-basic"
                    type="search" 
                    placeholder="What are you looking for?" 
                    variant="outlined"
                    autoFocus
                    color="secondary"
                    fullWidth
                    value={inputValue}
                    onChange={handelInput}
                    onKeyDown={showResults}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AiOutlineSearch id = "results" fontSize={24} onClick={showResults}/>
                        </InputAdornment>
                        ),
                    }}                   
                />
            </Box>
            {!isSearchTouched && filteringCatalog?.length === 0 && <Box>
                <FlexBox color={'secondary.dark'} >
                    <SearchOffSharpIcon  sx={{ fontSize: 33 }}></SearchOffSharpIcon>
                    <Typography fontSize={{xs: '14px', sm: '16px', md: '24px', lg: '24px'}} fontWeight={300}>No results found for "{inputValue}"</Typography>
                </FlexBox>
                <Typography 
                    fontSize={{xs: '14px', sm: '16px', md: '24px', lg: '24px'}} 
                    fontWeight={300} 
                    color={'secondary.dark'}
                    textAlign={'center'}> Check the spelling or use a different word or phrase.</Typography>
            </Box>}
            
            <Grid 
                container
                mb={{sm: 10, md: 20, lg: 30}} 
                columnGap={{sm: 0, md: 3, lg: 6}}
                rowSpacing={{xs: 4, sm: 4, md: 4, lg: 8}} 
                justifyContent="flex-start"
                >
                {filteringCatalog?.map(product => <ProductCard key={product.id} product={product} />)}    
            </Grid>
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
            <Box mb={'48px'}>
                <FlexBox sx={{justifyContent: 'space-between'}}>
                    <Typography fontSize={28} fontWeight={700}>Explore new arrivals</Typography>
                    <ViewAllLink to='/products'>
                        <Typography fontSize={16} fontWeight={700}>View all </Typography>
                        <ArrowForwardOutlinedIcon color="secondary.contrastText" sx={{fontSize: 20,}}/>
                    </ViewAllLink>
                </FlexBox>
            </Box>
            <ProductSlider></ProductSlider>
            
        </Container>
    )
}
export default SearchResults;