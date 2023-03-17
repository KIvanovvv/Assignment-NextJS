import Image from "next/image";
import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledTextContainer,
  StyledImageContainer,
  StyledCustomMainContainer,
} from "./elements.jsx";

export const AgencySelection = ({ title, subTitle, image }) => {
  console.log(image);
  return (
    <StyledCustomMainContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{subTitle}</StyledDescription>
      </StyledTextContainer>
    </StyledCustomMainContainer>
  );
};
