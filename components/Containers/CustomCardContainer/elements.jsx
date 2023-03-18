import styled from "styled-components";
import { SectionParagraph } from "../../Typography/SectionParagraph.jsx";

export const StyledCustomCardContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 48%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px 20px;
`;
// justify-content: space-between;

export const StyledSectionParagraph = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
`;
