
/////////////////////////////////////////////////////////
'use client'
import React, { useState, ChangeEvent } from 'react';

interface FormData {
  name: string;
  surname: string;
  country: string;
  primaryExpertise: string;
  secondaryExpertise: string;
  relatedDisciplines: string[];
  skills: string[];
}

const RegisterPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    country: '',
    primaryExpertise: '',
    secondaryExpertise: '',
    relatedDisciplines: [],
    skills: [],
  });

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "China",
    "Japan",
    "Brazil",
    "South Africa",
    // Add more countries as needed
  ];

  const expertise = [
    "Design",
    "Math",
    "Physic",
    "Business",
    "Python",
    "NodeJs",
    "Web Development",
    "Graphic Design",
    "UI/UX design",
    "Agile project management",
    "Project Management",
    // Add more countries as needed
  ];


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedArray = checked
        ? [...(prevData[name as keyof FormData] as string[]), value]
        : (prevData[name as keyof FormData] as string[]).filter((item) => item !== value);
      return {
        ...prevData,
        [name]: updatedArray,
      };
    });
  };

  const renderStep = () => {
    switch (step) {

      ////////////// STEP 1 ///////////////
      case 1:
        return (
          <div className="flex flex-col items-start mx-auto py-6 px-0 space-y-3">
             <h1 className="flex font-semibold text-2xl">Hello! Let's start filling up your details.</h1>
            <label htmlFor="">What is your Firstname? *</label>
            <input
              className="block mb-2 p-2 border border-black w-full rounded"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Firstname"
              required
            />
            <label htmlFor="">What is your Lastname? *</label>
            <input
              className="block mb-2 p-2 border border-black w-full rounded"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter your Lastname"
              required
            />
            <label htmlFor="">What country are you located in?</label>
            <select
              className="block mb-2 p-2 border border-black w-full rounded"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <label htmlFor="">Your phone number *</label>
            <input
              className="block mb-2 p-2 border border-black w-full rounded"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Phone number"
              required
            />

            <label htmlFor="">Date of Birth</label>
            <input
              className="block mb-2 p-2 border border-black w-full rounded"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Date of Birth"
              required
            />

          </div>
        );
        ////////////// STEP 2 ///////////////
      case 2:
        return (
          <div className="flex flex-col items-start mx-auto py-6 px-0 space-y-3">
             <h1 className="flex font-semibold text-2xl">Fantastic! Lets define your expertise.</h1>
            <label htmlFor="">Select primary field of expertise *</label>
            <select
              className="block mb-2 p-2 border border-black w-full rounded"
              name="primaryExpertise"
              value={formData.primaryExpertise}
              onChange={handleChange}
              required
            >
              <option value="">Eg. Design, Language, Math</option>
              {expertise.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
            <label htmlFor="">Another field of expertise *</label>
            <select
              className="block mb-2 p-2 border border-black w-full rounded"
              name="secondaryExpertise"
              value={formData.secondaryExpertise}
              onChange={handleChange}
              required
            >
              <option value="">Eg. Design, Language, Math</option>
              {expertise.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>

            <label htmlFor="">Which diciplines are related to your expertise? *</label>
            <select
              className="block mb-2 p-2 border border-black w-full rounded"
              name="secondaryExpertise"
              value={formData.secondaryExpertise}
              onChange={handleChange}
              required
            >
              <option value="">Eg. Graphic Design, UI, UX design</option>
              {expertise.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>

            <label htmlFor="">What skills do you possess? *</label>
            <select
              className="block mb-2 p-2 border border-black w-full rounded"
              name="secondaryExpertise"
              value={formData.secondaryExpertise}
              onChange={handleChange}
              required
            >
              <option value="">Leadership, Strategy, AI/ML</option>
              {expertise.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>

          </div>
        );


        ////////// STEP 3 ////////////
        case 3:
          return (
            <div className="flex flex-col items-start mx-auto py-6 px-0 space-y-3">
              <h1 className="flex font-semibold text-2xl">Excellent! Let's move on to setting up your stack expertise.</h1>
              <label htmlFor="">What tools are you proficiant in? *</label>
              <select
                className="block mb-2 p-2 border border-black w-full rounded"
                name="primaryExpertise"
                value={formData.primaryExpertise}
                onChange={handleChange}
                required
              >
                <option value="">Eg. Design, Language, Math</option>
                {expertise.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
              
  
            </div>
          );

      ////////// STEP 4 ////////////
      case 4:
        return (
          <div className="flex flex-col items-start mx-auto py-6 px-0 space-y-3">
            <h1 className="flex font-semibold text-2xl">One last detail! How would you like to showcase your summary?</h1>
            <label htmlFor="">Include your professional title, years of experience, key skills, and a brief overview of your career. *</label>
            <textarea name="text" id="" placeholder='Write here' className="block mb-2 p-2 border border-black w-full h-[200px] rounded"></textarea>
            <div className="flex flex-row items-center w-full justify-between py-6 px-0">
            <p className='flex'>Make sure it is clear is nice!</p>
            <p className='flex'>0/500</p>
            {/* <p>{wordcount 0/500}</p> */}
            </div>

          </div>
        );
      // Add more cases for additional steps
      default:
        return null;
    }
  };

  const handleNextStep = () => {
    if (step === 1 && (!formData.name || !formData.surname || !formData.country)) {
      alert('Please fill in all required fields.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
    return (
      <div className="p-2 max-w-md mx-auto">
        <div className="flex justify-between py-4 px-0 mb-6">
          {/* Step indicators */}
          {[1, 2, 3, 4].map((indicator) => (
            <div
              key={indicator}
              className={`h-1 w-full ${indicator <= step ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        {renderStep()}
        <div className="mt-4 flex justify-between flex-row mx-auto w-full py-6 px-0">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
            onClick={handlePrevStep}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleNextStep}
          >
            {step === 4 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    );
//   return (
//     <div className="p-2 max-w-md mx-auto">
//       {/* <h1 className="text-2xl font-bold mb-4">Fantastic! Now let's define your experties.</h1> */}
//       {renderStep()}
//       <div className="mt-4 flex justify-between flex-row mx-auto w-full py-6 px-0">
//         <button
//           className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
//           onClick={handlePrevStep}
//           disabled={step === 1}
//         >
//           Back
//         </button>
//         <button
//           className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
//           onClick={handleNextStep}
//         >
//           {step === 5 ? 'Submit' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
};

export default RegisterPage;