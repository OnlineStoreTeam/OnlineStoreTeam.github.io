import { Container, Typography } from "@mui/material";
import styled from "styled-components";

const Wrapper = styled(Container)`
    
`

function SearchResults (){
    return(
        <Wrapper maxWidth='lg'>
            <Typography>Search Results</Typography>
        </Wrapper>
    )
}
export default SearchResults;