import React from "react";
import { ProfileContentWrapper, ProfileImageWrapper } from "./style";
import { UiHeading, UiPara, UiSection } from "../../utils/uiMaterials";
import { PROFILE_DATA } from "../../constants/profileData";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";

const About = () => {
  return (
    <UiSection id="about">
      <UiHeading>
        <span>{SECTION_HEADINGS.about.split(".")[0]}.</span> About Me
      </UiHeading>
      <ProfileContentWrapper>
        <ProfileImageWrapper>
          <img alt="My Profile" src={PROFILE_DATA.about.profileUrl} title={PROFILE_DATA.name} loading="lazy" />
        </ProfileImageWrapper>
        <div>
          {PROFILE_DATA.about.profileDescription.map((paragraph, index) => (
            <UiPara key={index}>{paragraph}</UiPara>
          ))}
        </div>
      </ProfileContentWrapper>
    </UiSection>
  );
};

export default About;
