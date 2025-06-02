import { Timeline } from "../components/Timeline";
import { experiences } from "../constants/constants";

const Experience = () => {
  return (
    <div id="experiences" className="w-full scroll-mt-16">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experience;
