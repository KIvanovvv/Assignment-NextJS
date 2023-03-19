import styled from "styled-components";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: auto;
  padding: 3rem;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;
