import { Box, Stack, Typography, TextField, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/categories/categorySlice";
import { setSearchCatalog } from "../../redux/productApi/productsSlice";
import { useSearchProductsByNameQuery } from "../../redux/productApi/productApi";
import ProductItem from './ProductItem';
import styled from "styled-components";


const MenuContainer = styled(Box)`
    height: 100%;
    padding-top: 48px;
    background-color: #FDFDFD;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
`;
const MenuHeader = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;
const StyledCloseOutlinedIcon = styled(CloseOutlinedIcon)`
    &:hover{
        cursor: pointer;
    }
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

const StyledLink = styled(Link)`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    color: #161616;
    margin-top: 24px;
`;

function Search ({searchClose}){
    const [ inputValue, setInputValue ] = useState('');
    const [ catalog, setCatalog] = useState();
    const [ isSearchTouched,  setIsSearchTouched ] = useState(false);
    const { data } = useSearchProductsByNameQuery({page: 0, limit: 12, value: inputValue});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(data){
            setCatalog(data);
        }
      }, [data])

    const handelInputChange = (e)=>{
        setIsSearchTouched(true);
        setInputValue(e.target.value);
    }
    const closeSearch = ()=>{
        searchClose();
        setIsSearchTouched(false);
        
    }
    const backToCatalog = ()=>{
        dispatch(setCategoryId(0))
        closeSearch();
    }
    const showResults = (e)=>{
        if(e.key === 'Enter'){
            console.log(catalog)
            dispatch(setSearchCatalog(catalog));
            closeSearch();
            navigate('/search_results');
            
        }
        if(e.target.id === 'results' || e.target.id === 'results_icon'){
            dispatch(setSearchCatalog(catalog));
            closeSearch();
        }  
    }

    return (
            <MenuContainer 
                width={{xs: '100vw', sm: '414px', md: '495px', lg: '453px'}}
                px={{xs: 4, sm: 4, md: 9, lg: 9 }}
                sx={{
                    overflow: 'scroll'
                }}    
            >
                <MenuHeader >
                    <Typography component='h1' fontSize={'28px'} fontWeight={'bold'}>Search</Typography>
                    <StyledCloseOutlinedIcon onClick={closeSearch}/>
                </MenuHeader>
                <SearchField 
                    id="outlined-basic"
                    type="search" 
                    placeholder="What are you looking for?" 
                    variant="outlined"
                    autoFocus
                    color="secondary" 
                    fullWidth
                    value={inputValue}
                    onChange={handelInputChange}
                    onKeyDown={showResults}
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                           <AiOutlineSearch fontSize={24}/>
                          </InputAdornment>
                        ),
                      }}                   
                />
                {isSearchTouched && <Box>
                    <Box 
                        borderBottom='1px solid #A0A0A0' 
                        height='50px' 
                        mt='64px' 
                        py='12px' 
                        fontSize='16px' 
                        color='secondary.contrastText'
                    >
                        {catalog?.length>0 && `${catalog?.length} Product Results for `}
                        {!catalog?.length && ` Sorry, nothing found for `}
                        "{inputValue}"
                    </Box>
                    <Stack direction='column' mb={0}>
                        { catalog?.slice(0,5).map(product=><ProductItem product={product} key={product.id}/>)}  
                    </Stack>
                    {catalog?.length>0 &&<StyledLink to='/search_results' onClick={showResults}>
                        <Typography id='results' variant="h6" color='secondary.contrastText' mr={1}>Show all results</Typography>
                        <ArrowForwardOutlinedIcon id='results_icon' color="secondary.contrastText" sx={{fontSize: 16, margin: 'auto 0'}}/>
                     </StyledLink>}
                    {!catalog?.length && <StyledLink to={'/products'} onClick={backToCatalog}>
                        <Typography variant="h6" color='secondary.contrastText' mr={1}>See all products</Typography>
                        <ArrowForwardOutlinedIcon color="secondary.contrastText" sx={{fontSize: 16, margin: 'auto 0'}}/>
                    </StyledLink>}
                </Box>}
                
            </MenuContainer>
    )
}

export default Search;