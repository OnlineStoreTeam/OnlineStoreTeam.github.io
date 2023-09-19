import React from "react";
import styled from "styled-components";
import { Box, Typography, Link, useMediaQuery } from "@mui/material";
import FooterTab from "./FooterTab";
import { Link as LinkTo } from "react-router-dom";
// import Link from '@mui/material/Link';

const FooterContainer = styled(Box)`
  background-color: #161616;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
`;
const BodyGroup = styled(Box)`
  display: flex;
  align-self: stretch;
  alignItems: flex-start;
`;
const TextContainer = styled(Box)`
  color: #fdfdfd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
const Tabs = styled(Box)`
  display: flex;
  padding: 24px 0;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-top: 1px solid #5a5a5a;
  border-bottom: 1px solid #5a5a5a;
`;
const Additional = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;
const AdditionalLeft = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;
function Footer() {
  const screen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const screenLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
  return (
    <FooterContainer padding={{xs: '24px 16px', sm: '24px 16px', md: '36px', lg: '36px 56px'}} gap={{xs: 6, sm: 6, md: 9, lg: 9}}>
      <BodyGroup 
        sx={{
          flexDirection: screen? 'column': 'row',
          justifyContent: screen? 'flex-start': 'space-between',
        }}>
         <Box width={{xs: '190px', sm: '190px', md:'190px', lg:'230px'}} height={{md: '34px', lg:'48px'}} mb={{xs: 6, sm: 6}}>
          <LinkTo to="/waiting_page">
            <img src="/logo_footer.png" alt="logo_footer" width={'100%'} height={'100%'}/>
          </LinkTo>
        </Box>
        <TextContainer width={{xs:'100%', md: '324px', lg: '466px'}} >
          <Typography variant="h3" textTransform="uppercase">
            Contact us
          </Typography>
          <Typography fontSize={{sx: '12px', lg: '16px'}} color="#fdfdfd">
            We value your queries and feedback. If you have any further
            questions or need assistance, please feel free to reach out to us.
            Don't hesitate to get in touch with us, and we'll be glad to assist
            you!
          </Typography>
          <Link
            href="mailto:onlinestore.teamch2023@gmail.com"
            underline="hover"
            sx={{ fontSize: screenLg? '12px': '16px' }}
            color="#FDFDFD"
          >
            onlinestore.teamch2023@gmail.com
          </Link>
        </TextContainer>
      </BodyGroup>
      <Tabs>
        <FooterTab label="Contacts"></FooterTab>
        <FooterTab label="Delivery &amp; Returns"></FooterTab>
        <FooterTab label="Blog" isLast={true}></FooterTab>
      </Tabs>
      <Additional>
        <AdditionalLeft>
          <Typography variant="h5" color="#FDFDFD">
            &copy; 2023
          </Typography>
          <Typography variant="h5" color="#FDFDFD">
            Happy Tails
          </Typography>
        </AdditionalLeft>
        <Typography variant="h3" color="#FDFDFD">
          Website by {" "}
          <LinkTo to="/waiting_page" style={{textDecoration: 'underline'}}>
            Team
          </LinkTo>
        </Typography>
      </Additional>
    </FooterContainer>
  );
}
export default Footer;
