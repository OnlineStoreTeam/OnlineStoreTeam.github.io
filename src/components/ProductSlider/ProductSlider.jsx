import { Box } from "@mui/material";
import { style, styled } from "@mui/system";
import { useGetAllProductsQuery } from "../../redux/productApi/productApi";
import { useContext, useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Wrapper = styled(Box)`
    // border: 1px solid red;
    height: 473px;
    margin: 0 0 48px 0;
    overflow: hidden;
    padding: 0;
    position: relative;
`;

const ProductContainer = styled(Box)`
    width: 2363px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    transition: 0.8s;
`;

const ShadowBox = styled(Box)`
// border: 1px solid green;
    width: 239px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
`;

const ImageBox = styled(Box)`
    width: 50px;
    height: 50px;
    border: 3px solid #5A5A5A;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
function ProductSlider (){

    const { data } = useGetAllProductsQuery({page: 0, limit: 6});
    const [ catalog, setCatalog] = useState();
    const [ click, setClick ] = useState(0);
    const [ slide, setSlide ] = useState(0);

    useEffect(()=>{
        if(data){
            setCatalog(data.content);
        }
    }, [data]);

    const changeSlide = (value)=>{
        if(value){
            setClick(click+1);
            setSlide(slide-397);
        } else{
            setClick(click-1);
            setSlide(slide+397);
        }
        console.log(click)
    }

    return(
        <Wrapper>
            {click >0 && <ShadowBox sx={{ 
                left: 0,
                background: 'linear-gradient(90deg, #FDFDFD 20.71%, rgba(253, 253, 253, 0.72) 57.47%, rgba(253, 253, 253, 0.00)  95%)', 
                justifyContent: 'flex-start',
            }}>
                <ImageBox onClick={()=>changeSlide(false)}>
                    <ArrowBackOutlinedIcon sx={{ fontSize: 32 }}/>
                </ImageBox>    
            </ShadowBox>}
            {click<3 && <ShadowBox sx={{ 
                right: 0, 
                background: 'linear-gradient(268deg, #FDFDFD 20.71%, rgba(253, 253, 253, 0.72) 57.47%, rgba(253, 253, 253, 0.00)  95%)', 
                justifyContent: 'flex-end',
            }}>
                <ImageBox onClick={()=>changeSlide(true)}>
                    <ArrowForwardOutlinedIcon sx={{ fontSize: 32 }}/>
                </ImageBox> 
            </ShadowBox>}
            <ProductContainer sx={{transform: `translateX(${slide}px)`}}>
                {catalog?.map(product => <ProductCard key={product.id} product={product} />)} 
            </ProductContainer>
        </Wrapper>
    )
}
export default ProductSlider;