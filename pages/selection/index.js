import { AgencySelection } from "../../sections";
import { Card } from "../../collections";

const agencySelectionProps = {
  title: "Managed agency selection",
  subTitle: "Strenghten your onboarding process",
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
