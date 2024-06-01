import React from "react";
import { MultiSelectDropDown } from "./multi.select.drop.down";

type StepProps = {
  formData: any;
  handleChange: any;
  handleCheckboxChange: any;
  primaryExpertise: string[];
  secondaryExpertise: string[];
  relatedDisciplines: string[];
};

const Step2: React.FC<StepProps> = ({
  formData,
  handleChange,
  handleCheckboxChange,
}) => {
  const expertise = [
    "Design",
    "Math",
    "Business",
    "Python",
    "NodeJs",
    "Web Development",
    "Graphic Design",
    "UI/UX design",
    "Agile project management",
    "Project Management",
    "SEO (Search Engine Optimization)",
    "SEM (Search Engine Marketing)",
    "Social Media Management",
    "Content Creation",
    "Video Editing",
    "Photography",
    "Scrum",
    "Kanban",
    "Financial Analysis",
  ];

  const skills = [
    "Leadership",
    "Strategy",
    "AI/ML",
    "Coaching",
    "Communication",
    "Teamwork",
    "Problem-Solving",
    "Time Management",
    "Analytical Thinking",
    "Critical Thinking",
    "Creativity",
  ];

  return (
    <div>
      <MultiSelectDropDown
        heading="Fantastic! Let's define your expertise."
        subHeading="Select primary field of expertise. *"
        formData={formData}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
        id="primaryExpertise"
        options={expertise}
      />

      <MultiSelectDropDown
        heading=""
        subHeading="Another field of expertise. *"
        formData={formData}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
        id="secondaryExpertise"
        options={expertise}
      />

      <MultiSelectDropDown
        heading=""
        subHeading="Which disciplines are related to your expertise? *"
        formData={formData}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
        id="relatedDisciplines"
        options={expertise}
      />

      <MultiSelectDropDown
        heading=""
        subHeading="What skills do you possess? *"
        formData={formData}
        handleChange={handleChange}
        handleCheckboxChange={handleCheckboxChange}
        id="skills"
        options={skills}
      />
    </div>
  );
};
export default Step2;
