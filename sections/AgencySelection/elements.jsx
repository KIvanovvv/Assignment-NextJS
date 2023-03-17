import styled from "styled-components";
import bg from "../../resources/background.png";
import {
  Button,
  SectionContainer,
  SectionBigHeading,
  SectionSubheading,
} from "~/components";
import { CustomMainContainer } from "../../components/Containers";

export const StyledCustomMainContainer = styled(({ ...props }) => (
  <CustomMainContainer {...props} />
))``;

export const StyledTitle = styled((props) => <SectionBigHeading {...props} />)`
  margin: 0;
  padding: 0;
  color: black;
`;

export const StyledDescription = styled((props) => (
  <SectionSubheading {...props} />
))`
  padding: 0;
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

// export const StyledImageContainer = styled(({ ...props }) => (
//   <div {...props} />
// ))`
//   width: 800px;
//   height: 400px;
//   positon: absolute;

//   background-image: url(${bg.src});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   margin-top: 10%;
//   margin-left: 20%;
//   z-index: -1;
// `;

// export const StyledImageContainer = styled.div`
//   width: 1000px;
//   height: 500px;
//   background-image: url(${bg.src});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;
