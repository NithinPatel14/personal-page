import React from "react";
import { UiPara } from "../../utils/uiMaterials";
import { FooterContainer } from "./style";
import { PROFILE_DATA } from "../../constants/profileData";

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <UiPara>Developed by {PROFILE_DATA.name} | Last updated on 10-12-2025</UiPara>
    </FooterContainer>
  );
};

export default Footer;
