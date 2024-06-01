import React from "react";
import { MultiSelectDropDown } from "./multi.select.drop.down";

type StepProps = {
  formData: any;
  handleChange: any;
  handleCheckboxChange: any;
  stack: string;
};

const Step3: React.FC<StepProps> = ({
  formData,
  handleChange,
  handleCheckboxChange,
}) => {
  const options = [
    "Figma",
    "3D Blender",
    "Notion",
    "Productboard",
    "Photoshop",
    "Adobe AI",
    "Sketch",
    "InVision",
    "Marvel",
    "Zeplin",
    "Adobe XD",
    "Axure RP",
    "Framer",
    "Balsamiq",
    "Proto.io",
    "Origami Studio",
    "Justinmind",
    "Principle",
    "Flinto",
    "Craft",
    "MockFlow",
    "Affinity Designer",
  ];

  return (
    <MultiSelectDropDown
      heading="Excellent! Let's move on to setting up your stack expertise."
      subHeading="What tools are you proficient in? *"
      formData={formData}
      handleChange={handleChange}
      handleCheckboxChange={handleCheckboxChange}
      id="stack"
      options={options}
    />
  );
};

export default Step3;
