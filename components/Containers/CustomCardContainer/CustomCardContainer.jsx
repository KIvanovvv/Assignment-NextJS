import { Card } from "../../../collections/Card/Card.jsx";
import {
  StyledCustomCardContainer,
  StyledSectionParagraph,
} from "./elements.jsx";

const cardProps = [
  {
    icon: <i class="fa-regular fa-building fa-3x" />,
    title: "Brief",
    content: (
      <StyledSectionParagraph>
        Complete <strong>brief writing or simple guidance</strong> on what to
        include, we've got you covered.
      </StyledSectionParagraph>
    ),
    cardStyles: {
      width: "90%",
      backgroundColor: "#f4f4f4",
    },
  },
  {
    icon: <i class="fa-regular fa-building fa-3x" />,
    title: "Second",
    content: (
      <StyledSectionParagraph>
        In-depth agency search covering; <strong>criteria matching, </strong>
        door knocking and due-dilligence vetting.
      </StyledSectionParagraph>
    ),
    cardStyles: {
      width: "95%",
      backgroundColor: "#f4f4f4",
    },
  },
  {
    icon: <i class="fa-regular fa-building fa-3x" />,
    title: "Third",
    content: (
      <StyledSectionParagraph>
        Comprehensive <strong>pitch management,</strong> including comms, diary
        management and pitch hosting.
      </StyledSectionParagraph>
    ),
    cardStyles: {
      width: "100%",
      backgroundColor: "#f4f4f4",
    },
  },
];

export const CustomCardContainer = (props) => {
  return (
    <StyledCustomCardContainer {...props}>
      {cardProps.map((x) => (
        <Card {...x} />
      ))}
    </StyledCustomCardContainer>
  );
};
