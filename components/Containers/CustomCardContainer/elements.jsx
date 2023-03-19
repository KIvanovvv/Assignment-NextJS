import styled from "styled-components";
import { SectionParagraph } from "../../Typography/SectionParagraph.jsx";

export const StyledCustomCardContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 42%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const StyledSectionParagraph = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
`;
