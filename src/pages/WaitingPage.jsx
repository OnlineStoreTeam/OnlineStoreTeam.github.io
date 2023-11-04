import { Box, Container, Typography, CardMedia } from "@mui/material";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const TextBox = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;


function WaitingPage (){
    const screen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const screenSm = useMediaQuery((theme) => theme.breakpoints.down('md'));
    return(
        <Container
            fixed
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: screenSm? 'column' : 'row',
                alignItems: 'center',
                padding: '0 20px'
                }} 
            disableGutters={true}
            maxWidth='lg'
        >
            <Box>
                <CardMedia 
                    component="img"
                    src='https://res.cloudinary.com/dhcuwijir/image/upload/v1695122774/waiting_Page_image_jgeryc.png'
                    title="photo"
                    sx={{
                        height: !screen? '500px' : "672px",
                        objectFit: "contain"
                    }}
                ></CardMedia>
            </Box>
            <TextBox 
                sx={{
                    textAlign: screenSm? 'center' : 'right'
                }}
            >
                <Typography 
                    color={'secondary.contrastText'} 
                    fontSize={{xs: '40px', sm:'60px', md:'70px', lg: '80px'}} 
                    lineHeight={1} 
                    fontWeight={'bold'}
                    width={'100%'}
                >Website is</Typography>
                <Typography 
                    color={'primary'} 
                    fontSize={{xs: '44px', sm:'64px', md:'74px', lg: '84px'}} 
                    fontWeight={'bold'} 
                    lineHeight={1}
                    width={'100%'}
                    mb={'21px'}
                >under construction</Typography>
                <Typography 
                    variant="h5" 
                    width={'373px'} 
                    textAlign={'justify'}
                    pb={screenSm ? '20px' : '0'}
                >Thank you for visiting this page and showing interest in our project. We are thrilled about what's to come, and we can't wait to share our progress with you!<br/>
<span style={{color: '#F39324'}}>Please check back soon.</span></Typography>
            </TextBox>
        </Container>
    )
}

export default WaitingPage;