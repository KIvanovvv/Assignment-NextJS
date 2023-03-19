import styled from "styled-components";
import video from "../../resources/video.png";
import bg from "../../resources/background.png";

import { CustomMainContainer } from "../../components/Containers";
import { SectionHeading, SectionSubheading } from "../../components/Typography";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <CustomMainContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  padding: 0;
  color: black;
  line-height: 3rem;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  margin: 0;
`;

export const StyledTextContainer = styled(({ ...props }) => <div {...props} />)`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 48%;
  height: 500px;
  display: flex;

  justify-content: flex-end;
  padding: 0 60px;
  box-sizing: border-box;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  width: 48%;
  height: 500px;
  display: flex;
`;

export const StyledInfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;

  background-image: url(${bg.src});
  background-repeat: no-repeat;
  max-width: 1200px;
  background-size: 70%;
  margin: auto;
`;

export const StyledVideo = styled(({ ...props }) => <div {...props} />)`
  width: 306px;
  height: 100%;
  background-image: url(${video.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;
