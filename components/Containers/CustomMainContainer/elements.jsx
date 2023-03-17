import styled from "styled-components";
import bg from "../../../resources/background.png";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: auto;
  background-image: url(${bg.src});
  background-size: 900px;
  background-position: 21% 200px;
  background-repeat: no-repeat;
  padding: 3rem;
`;
