// Styled elements for the Card go here
import styled from "styled-components";

import { CustomCardContainer } from "../../components/Containers/CustomCardContainer/CustomCardContainer.jsx";
import { SectionInnerHeading } from "../../components/Typography/SectionInnerHeading.jsx";
import { SectionParagraph } from "../../components/Typography/SectionParagraph.jsx";

export const StyledCustomCardComponent = styled((props) => (
  <CustomCardContainer {...props} />
))``;

export const StyledCard = styled((props) => (
  <div {...props} style={props.style} />
))`
display:flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
padding 30px 40px;
background-color: #f4f4f4 ;
border-radius: 5px;
box-sizing: border-box;
gap: 30px;
`;

export const StyledSectionHeading = styled((props) => (
  <SectionInnerHeading {...props} />
))`
  font-weight: 600;
  margin: 0;
`;

export const StyledSectionPragraph = styled((props) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
`;

export const StyledContentContainer = styled((props) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  aling-items: center;
  justify-content: center;
  gap: 1px;
`;
