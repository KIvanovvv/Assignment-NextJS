import { Card } from "../../../collections/Card/Card.jsx";
import { StyledCustomCardContainer } from "./elements.jsx";

export const CustomCardContainer = (props) => {
  return (
    <StyledCustomCardContainer {...props}>
      <Card />
      <Card />
      <Card />
    </StyledCustomCardContainer>
  );
};
