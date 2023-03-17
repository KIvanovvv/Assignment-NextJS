// Styled elements for the Card go here
import styled from "styled-components";

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url("../../resources/video.png");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
