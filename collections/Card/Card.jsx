// The Card to be exported goes here
import { SectionHeading, SectionParagraph } from "../../components/Typography";
import {
  StyledCard,
  StyledContentContainer,
  StyledSectionHeading,
  StyledSectionPragraph,
} from "./elements.jsx";
export const Card = () => {
  return (
    <StyledCard>
      <i class="fa-regular fa-building fa-3x" />
      <StyledContentContainer>
        <StyledSectionHeading>Brief</StyledSectionHeading>
        <StyledSectionPragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptates, qui incidunt recusandae .
        </StyledSectionPragraph>
      </StyledContentContainer>
    </StyledCard>
  );
};
