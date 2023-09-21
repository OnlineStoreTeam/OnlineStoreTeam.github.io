import { Container, Typography, Breadcrumbs, TextField, InputAdornment, useMediaQuery, Box, Grid } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import {CatalogContext} from '../../components/Context';
import theme from "../../theme";
import { useGetAllProductsQuery} from '../../store/userProductApi';
import SearchOffSharpIcon from '@mui/icons-material/SearchOffSharp';
import ProductCard from "../../components/ProductCard/ProductCard";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

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

function SearchResults (){
    const { searchCatalog }= useContext(CatalogContext);
    const screen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const [ inputValue, setInputValue ] = useState('');
    const [ filteringCatalog, setFilteringCatalog ]= useState();
    const [ isSearchTouched,  setIsSearchTouched ] = useState(false);
    const [ catalog, setCatalog] = useState();
    const { data } = useGetAllProductsQuery({page: 0, limit: 12});

    useEffect(()=>{
        if(data){
            setCatalog(data.content);
        }
      }, [data])

    useEffect(()=>{
        if(searchCatalog){
            setFilteringCatalog(searchCatalog);
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
            <Box mb={48}>
                <FlexBox sx={{justifyContent: 'space-between'}}>
                    <Typography fontSize={28} fontWeight={700}>Explore new arrivals</Typography>
                    <ViewAllLink to='/products'>
                        <Typography fontSize={16} fontWeight={700}>View all </Typography>
                        <ArrowForwardOutlinedIcon color="secondary.contrastText" sx={{fontSize: 20,}}/>
                    </ViewAllLink>
                </FlexBox>
            </Box>
            
        </Container>
    )
}
export default SearchResults;