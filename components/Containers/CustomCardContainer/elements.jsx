import styled from "styled-components";

export const StyledCustomCardContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 48%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
`;
