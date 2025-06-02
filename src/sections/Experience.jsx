// components/Experience.jsx
import { Timeline } from "../components/Timeline";
import { workExperiences, educationExperiences } from "../constants/constants";
import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("Work Experiences");

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  const data = activeTab === "Work Experiences" ? workExperiences : educationExperiences;

  return (
    <div id="experiences" className="w-full scroll-mt-16">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-8">
        {["Work Experiences", "Education"].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => handleToggle(tab)}
              className={`relative px-6 py-3  text-sm font-semibold transition-all duration-300 shadow-md border 
          ${
            isActive
              ? "bg-blue-600 text-white border-white scale-110"
              : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100 hover:scale-80"
          }
        `}
            >
              {tab}
              {isActive && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <Timeline data={data} title={`${activeTab}`} />
    </div>
  );
};

export default Experience;
