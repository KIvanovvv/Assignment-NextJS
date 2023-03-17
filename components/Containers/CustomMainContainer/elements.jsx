import styled from "styled-components";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: auto;
  background-color: red;
  margin: 60px;
`;
