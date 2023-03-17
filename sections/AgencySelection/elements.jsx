import styled from "styled-components";
import bg from "../../resources/background.png";
import video from "../../resources/video.png";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import { CustomMainContainer } from "../../components/Containers";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <CustomMainContainer {...props} />
))`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  padding: 0;
  color: black;
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
  background-color: green;
  font-family: sans-serif;
`;

export const StyledImageContainer = styled(({ ...props }) => (
  <div {...props} />
))`
  width: 48%;
  height: 500px;
  background-color:orange
  display: flex;

  
`;

export const StyledVideo = styled(({ ...props }) => <div {...props} />)`
  width: 300px;
  height: 100%;
  background-image: url(${video.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-left: 45%;
`;

export const StyledBackground = styled(({ ...props }) => <div {...props} />)`
  width: 200px;
  height: 100%;
  background-image: url(${bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;
