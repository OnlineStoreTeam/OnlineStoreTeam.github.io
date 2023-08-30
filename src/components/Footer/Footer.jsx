import React from "react";
import styled from "styled-components";
import { Box, Typography, Link } from "@mui/material";
import FooterTab from "./FooterTab";
// import { Link } from "react-router-dom";
// import Link from '@mui/material/Link';

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
  color: #fdfdfd;
  width: 466px;
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
  return (
    <FooterContainer>
      <BodyGroup>
        <img src="/logo_footer.png" alt="logo_footer" />
        <TextContainer>
          <Typography variant="h3" textTransform="uppercase">
            Contact us
          </Typography>
          <Typography variant="h6" color="#fdfdfd">
            We value your queries and feedback. If you have any further
            questions or need assistance, please feel free to reach out to us.
            Don't hesitate to get in touch with us, and we'll be glad to assist
            you!
          </Typography>
          <Link
            href="mailto:onlinestore.teamch2023@gmail.com"
            underline="hover"
            sx={{ fontSize: "14px" }}
            color="#FDFDFD"
          >
            onlinestore.teamch2023@gmail.com
          </Link>
        </TextContainer>
      </BodyGroup>
      <Tabs>
        <FooterTab label="Contacts"></FooterTab>
        <FooterTab label="Delivery &amp; Returns"></FooterTab>
        <FooterTab label="About us"></FooterTab>
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
          Website by{" "}
          <Link href="" color="#FDFDFD">
            Team
          </Link>
        </Typography>
      </Additional>
    </FooterContainer>
  );
}
export default Footer;
