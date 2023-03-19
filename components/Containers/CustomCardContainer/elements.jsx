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
  box-sizing: border-box;
  @media (max-width: 1350px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    gap: 20px;
  }
  @media (max-width: 420px) {
    width: 370px;
    padding: 0;
  }
`;

export const StyledSectionParagraph = styled(({ ...props }) => (
  <SectionParagraph {...props} />
))`
  margin: 0;
`;
