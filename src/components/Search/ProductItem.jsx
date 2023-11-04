import { CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

function ProductItem ({product}){
    return(
        <Link 
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
                gap: '24px',
                borderBottom: '1px solid #EEE'
            }}>
            <CardMedia 
                component="img"
                sx={{ 
                    width: 64, 
                    height: 60,
                    objectFit: "contain"
                }}
                src={product.imagePath}
                alt="Product image">
            </CardMedia>
            <CardContent sx={{
                padding: '0 0 0 0',
                '&:last-child':{
                    paddingBottom: 0
                }
            }} >
                <Typography fontSize={'16px'} fontWeight={'bold'}>{product.name}</Typography>
                <Typography fontSize={'14px'}>{product.price}$</Typography>
            </CardContent>
        </Link>
    )
}
export default ProductItem;