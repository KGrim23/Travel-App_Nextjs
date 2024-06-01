import React from "react";

type SummaryPageProps = {
  formData: {
    name: string;
    surname: string;
    country: string;
    primaryExpertise: string[];
    secondaryExpertise: string[];
    relatedDisciplines: string[];
    skills: string[];
    stack: string[];
    dateOfBirth: string;
    phoneNumber: string;
    summary: string;
    text: string;
  };
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SummaryPage: React.FC<SummaryPageProps> = ({ formData }) => {
  return (
    <div className="flex flex-col mx-auto py-5 space-y-5 lg:py-12 w-full max-w-2xl">
      <h2 className="text-2xl font-bold">Summary</h2>
      <div>
        <h3 className="font-bold text-lg py-3">Step 1: Personal Information</h3>
        <p>
          <span className="font-semibold text-md">Name: </span>
          {formData.name}
        </p>
        <p>
          <span className="font-semibold text-md">Surname:</span>{" "}
          {formData.surname}
        </p>
        <p>
          <span className="font-semibold text-md">Country: </span>{" "}
          {formData.country}
        </p>
        <p>
          <span className="font-semibold text-md">Date of Birth: </span>{" "}
          {formData.dateOfBirth}
        </p>
        <p>
          <span className="font-semibold text-md">Phone Number: </span>{" "}
          {formData.phoneNumber}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg py-3">Step 2: Expertise & Skills</h3>
        <p>
          <span className="font-semibold text-md">Primary Expertise: </span>
          {formData.primaryExpertise.join(", ")}
        </p>
        <p>
          <span className="font-semibold text-md">Secondary Expertise: </span>
          {formData.secondaryExpertise.join(", ")}
        </p>
        <p>
          <span className="font-semibold text-md">Related Disciplines: </span>
          {formData.relatedDisciplines.join(", ")}
        </p>
        <p>
          <span className="font-semibold text-md">Skills: </span>
          {formData.skills.join(", ")}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg py-3">Step 3: Stacks</h3>
        <p>
          <span className="font-semibold text-md">Stacks: </span>
          {formData.stack.join(", ")}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-lg py-3">
          Step 4: Additional Information
        </h3>
        <p>
          <span className="font-semibold text-md">Bio: </span>
          <br></br>
          {formData.text}
        </p>
      </div>
    </div>
  );
};

export default SummaryPage;
