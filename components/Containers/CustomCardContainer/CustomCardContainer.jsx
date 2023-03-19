import { Card } from "../../../collections/Card/Card.jsx";
import {
  StyledCustomCardContainer,
  StyledSectionParagraph,
} from "./elements.jsx";
import pitchIcon from "../../../resources/pitch.png";
import searchIcon from "../../../resources/search.png";
import briefIcon from "../../../resources/brief.png";

const cardProps = [
  {
    icon: <img src={briefIcon.src} />,
    title: "Brief",
    content: (
      <StyledSectionParagraph>
        Complete <strong>brief writing or simple guidance</strong> on what to
        include, we've got you covered.
      </StyledSectionParagraph>
    ),
    cardStyles: {
      width: "90%",
      backgroundColor: " #f9f9f9",
    },
    cardStylesActive: {
      width: "90%",
      backgroundColor: " #f9f9f9",
      border: "2px solid #2a77de",
    },
  },
  {
    icon: <img src={searchIcon.src} />,
    title: "Search",
    content: (
      <StyledSectionParagraph>
        In-depth agency search covering; <strong>criteria matching</strong>,
        door knocking and due-dilligence vetting.
      </StyledSectionParagraph>
    ),
    cardStyles: {
      width: "95%",
      backgroundColor: " #f4f4f4",
    },
    cardStylesActive: {
      width: "95%",
      backgroundColor: " #f4f4f4",
      border: "2px solid #2a77de",
    },
  },
  {
    icon: <img src={pitchIcon.src} />,
    title: "Pitch",
    content: (
      <StyledSectionParagraph>
        Comprehensive <strong>pitch management</strong>, including comms, diary
        management and pitch hosting.
      </StyledSectionParagraph>
    ),
    cardStyles: {
      width: "100%",
      backgroundColor: " #f1f1f1",
    },
    cardStylesActive: {
      width: "100%",
      backgroundColor: " #f1f1f1",
      border: "2px solid #2a77de",
    },
  },
];

export const CustomCardContainer = (props) => {
  return (
    <StyledCustomCardContainer {...props}>
      {cardProps.map((x) => (
        <Card {...x} key={x.title} />
      ))}
    </StyledCustomCardContainer>
  );
};
