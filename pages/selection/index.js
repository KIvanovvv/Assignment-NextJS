import { AgencySelection } from "../../sections";
import { Card } from "../../collections";

const agencySelectionProps = {
  title: "Managed agency selection",
  subTitle: "Strenghten your onboarding process",
  image: {
    src: "../../resources/video.png",
    alt: "",
    width: 1000,
    height: 1680,
  },
};

const divStyles = {
  overflow: "hidden",
  display: "flex",
};

export default function Selection() {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        height: "100%",
      }}
    >
      <AgencySelection {...agencySelectionProps} />
    </div>
  );
}
