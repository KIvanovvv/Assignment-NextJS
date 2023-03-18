import styled from "styled-components";
import bg from "../../../resources/background.png";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 100%;
  height: auto;

  padding: 3rem;
`;
// background-size: 850px;
// background-repeat: no-repeat;
// background-position: 20% 170px;
// background-image: url(${bg.src});
// background: center center cover no-repeat;
