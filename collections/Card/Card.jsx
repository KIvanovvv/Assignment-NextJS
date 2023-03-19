import { useState } from "react";
import {
  StyledCard,
  StyledContentContainer,
  StyledSectionHeading,
  StyledSectionPragraph,
} from "./elements.jsx";

const activeStyle = {
  textDecoration: "underline 2px #2a77de",
  color: " #2a77de",
};
export const Card = ({
  title,
  icon,
  content,
  cardStyles,
  cardStylesActive,
}) => {
  const [active, setActive] = useState(false);
  const onCardClickHandler = () => {
    setActive((curr) => !curr);
  };
  return (
    <StyledCard
      style={active ? { ...cardStylesActive } : { ...cardStyles }}
      onClick={onCardClickHandler}
    >
      {icon}
      <StyledContentContainer>
        <StyledSectionHeading style={active ? activeStyle : {}}>
          {title}
        </StyledSectionHeading>
        <StyledSectionPragraph>{content}</StyledSectionPragraph>
      </StyledContentContainer>
    </StyledCard>
  );
};
