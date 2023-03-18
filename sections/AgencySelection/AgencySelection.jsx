import Image from "next/image";
import { CustomCardContainer } from "../../components/Containers/CustomCardContainer/CustomCardContainer.jsx";
import {
  StyledInfoContainer,
  StyledTitle,
  StyledDescription,
  StyledTextContainer,
  StyledImageContainer,
  StyledVideo,
  StyledCustomMainContainer,
  StyledCardContainer,
} from "./elements.jsx";

export const AgencySelection = ({ title, subTitle }) => {
  return (
    <StyledCustomMainContainer>
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{subTitle}</StyledDescription>
      </StyledTextContainer>
      <StyledInfoContainer>
        <StyledImageContainer>
          <StyledVideo />
        </StyledImageContainer>
        <CustomCardContainer />
      </StyledInfoContainer>
    </StyledCustomMainContainer>
  );
};
