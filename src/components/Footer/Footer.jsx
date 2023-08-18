import React from 'react';
import styled from 'styled-components';
import {Box} from "@mui/material";
import FooterTab from "./FooterTab";
import {Link} from "react-router-dom";


const FooterContainer = styled(Box)`
  background-color: #161616;
  display: flex;
  position: relative;
  padding: 36px 56px;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
`;
const BodyGroup = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch; 
`;
const TextContainer = styled(Box)`
  font-family: 'lato', sans-serif;
  color: #FDFDFD;
  width: 466px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  h6{
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  p, a{
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
const Tabs = styled(Box)`
  display: flex;
  padding: 24px 0;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-top: 1px solid #5A5A5A;
  border-bottom: 1px solid #5A5A5A;
  h6{
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: #FDFDFD;
    line-height: normal;
    text-transform: uppercase;
  }
`;
const Additional = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`
const AdditionalLeft = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  p{
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #FDFDFD;
  }
`;
const AdditionalRight = styled(Box)`
  color: #FDFDFD;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal; 
  a{
    text-decoration: underline;
  }
`;
function Footer() {
  return (
    <FooterContainer>
        <BodyGroup>
            <img src="/logo_footer.png" alt="logo_footer"/>
        <TextContainer>
            <h6>Contact us</h6>
            <p>
                We value your queries and feedback. If you have any further questions or need assistance, please feel free to reach out to us.
                Don't hesitate to get in touch with us, and we'll be glad to assist you!
            </p>
            <a href="mailto:onlinestore.teamch2023@gmail.com">onlinestore.teamch2023@gmail.com</a>
        </TextContainer>
        </BodyGroup>
        <Tabs>
            <FooterTab label='Contacts'></FooterTab>
            <FooterTab label='Delivery &amp; Returns'></FooterTab>
            <FooterTab label='About us'></FooterTab>
            <FooterTab label='Blog' isLast={true}></FooterTab>
        </Tabs>
        <Additional>
            <AdditionalLeft>
                <p>&copy; 2023</p>
                <p>Happy Tails</p>
            </AdditionalLeft>
            <AdditionalRight>
                <p>Website by <Link to='/'>Team</Link></p>
            </AdditionalRight>
        </Additional>
      </FooterContainer>

  );
}
export default Footer;
