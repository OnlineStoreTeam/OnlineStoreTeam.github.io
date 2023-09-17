import { Box, Stack, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Divider from '@mui/material/Divider';
import { AiOutlineSearch } from "react-icons/ai";
import InputAdornment from '@mui/material/InputAdornment';
import { useContext, useEffect, useState } from "react";
import { CatalogContext, CategoryNameContext } from "../Context";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useGetAllProductsQuery} from '../../store/userProductApi';
import ProductItem from './ProductItem';


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

function Search ({searchClose}){
    const [ inputValue, setInputValue ] = useState('');
    const [ catalog, setCatalog] = useState();
    const [ filteringCatalog, setFilteringCatalog ]= useState();
    const [ isSearchTouched,  setIsSearchTouched ] = useState(false);
    const { setSearchCatalog } = useContext(CatalogContext);
    const { setCategoryName } = useContext(CategoryNameContext);
    const { data } = useGetAllProductsQuery({page: 0, limit: 12});

    useEffect(()=>{
        if(data){
            setCatalog(data.content);
        }
      }, [data])

    const handelInputChange = (e)=>{
        setIsSearchTouched(true);
        setInputValue(e.target.value);
        let value = e.target.value.toLowerCase().split(' ')[0];;
        const newCatalog = catalog.filter((product)=>product.name.toLowerCase().includes(value));
        value? setFilteringCatalog(newCatalog) : setFilteringCatalog(null);
    }
    const closeSearch = ()=>{
        searchClose();
        setIsSearchTouched(false);
        setSearchCatalog(filteringCatalog);
    }
    const backToCatalog = ()=>{
        setCategoryName('All products')
        closeSearch();
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
                        {filteringCatalog?.length>0 && `${filteringCatalog?.length} Product Results for `}
                        {!filteringCatalog?.length && ` Sorry, nothing found for `}
                        "{inputValue}"
                    </Box>
                    <Stack direction='column' mb={0}>
                        { filteringCatalog?.slice(0,5).map(product=><ProductItem product={product} key={product.id}/>)}
                        { filteringCatalog?.length>5 && <Typography fontSize={20} letterSpacing={10} px={10} color={'secondary.contrastText'} >...</Typography>}
                    </Stack>
                    {filteringCatalog?.length>0 &&<Link 
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            cursor: 'pointer',
                            color: '#161616',
                            marginTop: '24px'
                        }}
                        >
                        <Typography variant="h6" color='secondary.contrastText' mr={1}>Show all results</Typography>
                        <ArrowForwardOutlinedIcon 
                            color="secondary.contrastText" 
                            fontSize="small"
                            sx={{
                                width: '16px',
                                height: '16px',
                                margin: 'auto 0'
                            }}
                            />
                    </Link>}
                    {!filteringCatalog?.length>0 && <Link to={'/products'} onClick={backToCatalog}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            cursor: 'pointer',
                            color: '#161616',
                            marginTop: '24px'
                        }}
                        >
                        <Typography variant="h6" color='secondary.contrastText' mr={1}>See all products</Typography>
                        <ArrowForwardOutlinedIcon 
                            color="secondary.contrastText" 
                            fontSize="small"
                            sx={{
                                width: '16px',
                                height: '16px',
                                margin: 'auto 0'
                            }}
                            />
                    </Link>}
                </Box>}
                
            </MenuContainer>
    )
}

export default Search;