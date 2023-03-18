// The Card to be exported goes here
import { SectionHeading, SectionParagraph } from "../../components/Typography";
import {
  StyledCard,
  StyledContentContainer,
  StyledSectionHeading,
  StyledSectionPragraph,
} from "./elements.jsx";
export const Card = ({ title, icon, content, cardStyles }) => {
  return (
    <StyledCard style={{ ...cardStyles }}>
      {icon}
      <StyledContentContainer>
        <StyledSectionHeading>{title}</StyledSectionHeading>
        <StyledSectionPragraph>{content}</StyledSectionPragraph>
      </StyledContentContainer>
    </StyledCard>
  );
};
