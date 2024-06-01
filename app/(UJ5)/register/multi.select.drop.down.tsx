import React, { useState } from "react";

type StepProps = {
  heading: string;
  subHeading: string;
  options: string[];
  id: string;
  formData: any;
  handleChange: any;
  handleCheckboxChange: any;
};

export const MultiSelectDropDown: React.FC<StepProps> = ({
  heading,
  subHeading,
  options = [],
  id,
  handleChange,
  formData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStacks, setSelectedStacks] = useState<string[]>(
    formData.stacks || []
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (stack: string) => {
    const index = selectedStacks.indexOf(stack);
    if (index === -1) {
      setSelectedStacks([...selectedStacks, stack]);
    } else {
      setSelectedStacks(selectedStacks.filter((item) => item !== stack));
    }
    handleChange({ target: { name: id, value: [...selectedStacks, stack] } });
  };

  return (
    <div className="w-full max-w-2xl space-y-2">
      <h1 className="flex font-semibold pt-1 mb-3 text-2xl">{heading}</h1>
      <label htmlFor="primaryExpertise" className="">
        {subHeading}
      </label>
      <div className="relative w-full gap-1">
        <div
          className="mb-3 p-2 border-2 border-black w-full rounded cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        >
          <span>
            {selectedStacks.length > 0
              ? selectedStacks.join(", ")
              : "Select stack tools..."}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-2 transition-transform transform ${
              isOpen ? "" : "rotate-180"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 0 1 .707.293l8 8a1 1 0 0 1-1.414 1.414L10 5.414 2.707 12.707a1 1 0 1 1-1.414-1.414l8-8A1 1 0 0 1 10 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="absolute top-full mt-2 left-0 right-0 z-10 bg-white border border-gray-600 rounded shadow">
            {options.map((stack) => (
              <label
                key={stack}
                className={`flex items-center p-2 ${
                  selectedStacks.includes(stack) ? "bg-blue-100" : ""
                }`}
              >
                <span>{stack}</span>
                <input
                  type="checkbox"
                  value={stack}
                  checked={selectedStacks.includes(stack)}
                  onChange={() => handleCheckboxChange(stack)}
                  className="rounded-full ml-auto mr-3 p-2"
                />
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropDown;
