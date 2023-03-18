import styled from "styled-components";
import classes from "../../styles/AgencySelection.module.css";
import bg from "../../resources/background.png";
import video from "../../resources/video.png";
import {
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import { CustomMainContainer } from "../../components/Containers";
import { CustomCardContainer } from "../../components/Containers/CustomCardContainer/CustomCardContainer.jsx";

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
  display: flex;
`;

export const StyledCardContainer = styled(({ ...props }) => <div {...props} />)`
  width: 48%;
  height: 500px;
  display: flex;
`;

export const StyledInfoContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
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
