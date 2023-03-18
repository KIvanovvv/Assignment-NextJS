import styled from "styled-components";

export const StyledCustomCardContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: auto;
  dispay: flex;
  flex-direction: column;
  border: 5px black solid;
  justify-content: center;
  align-items: center;
`;
