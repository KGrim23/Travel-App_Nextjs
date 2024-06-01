"use client";

import React, { useState, ChangeEvent } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import StepIndicator from "./StepIndicator";
import SummaryPage from "./SummaryPage";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  country: z.string().min(1, "Country is required"),
  primaryExpertise: z.array(z.string()).optional(),
  secondaryExpertise: z.array(z.string()).optional(),
  relatedDisciplines: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
  skills: z.array(z.string()).optional(),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  summary: z.string().optional(),
  text: z.string().optional(),
});

const RegisterPage: React.FC = () => {
  //Step Indicators State
  const [step, setStep] = useState(1);
  //Form Data State
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    country: "",
    primaryExpertise: [],
    secondaryExpertise: [],
    relatedDisciplines: [],
    stack: [],
    skills: [],
    dateOfBirth: "",
    phoneNumber: "",
    summary: "",
    text: "",
  });

  const totalSteps = 6;

  // user input value
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to validate form data - Added function
  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert(error.errors.map((err) => err.message).join("\n"));
      }
      return false;
    }
  };

  const handleNextStep = () => {
    // Modified function
    if (validateForm()) {
      setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
    }
  };

  //Collecting all steps from different pages into one to Render

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <Step2
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={undefined}
            primaryExpertise={[]}
            secondaryExpertise={[]}
            relatedDisciplines={[]}
          />
        );
      case 3:
        return (
          <Step3
            formData={formData}
            handleChange={handleChange}
            handleCheckboxChange={undefined}
            stack={""}
          />
        );
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} />;
      case 5:
        return (
          <SummaryPage
            formData={formData}
            setStep={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        );
      case 6:
        return <Step5 />;

      default:
        //back to Step 1 as a default
        return <Step1 formData={formData} handleChange={handleChange} />;
    }
  };

  //Steps Indicator and 1/5 counter
  return (
    <div className="flex flex-col items-end justify-center mx-auto py-4 lg:py-12 px-12 w-full max-w-2xl">
      {/* counter */}
      <p className="text-gray-500 flex">
        {step}/{totalSteps}
      </p>
      {/* Indicator bar */}
      <StepIndicator currentStep={step} totalSteps={totalSteps} />

      {/* Step 1 -5 Render */}
      <form className="w-full max-w-2xl">
        {renderStep()}
        {step !== totalSteps && (
          <div className="flex justify-between pt-[60px]">
            <button
              type="button"
              onClick={handleNextStep}
              className="py-2 px-8 bg-black text-white rounded flex items-center"
              disabled={step === totalSteps}
            >
              <svg
                className="h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M20 12L16 8M20 12L16 16"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
