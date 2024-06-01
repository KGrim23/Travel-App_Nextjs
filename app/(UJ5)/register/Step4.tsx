import React, { ChangeEvent } from "react"; //for textarea words count upto 500

type StepProps = {
  formData: any;
  handleChange: any;
};

const Step4: React.FC<StepProps> = ({ formData, handleChange }) => {
  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
  };

  return (
    <div className="flex flex-col items-start mx-auto py-4 px-0 space-y-3">
      <h1 className="flex font-semibold text-2xl">
        One last detail! How would you like to showcase your summary?
      </h1>
      <label htmlFor="text">
        Include your professional title, years of experience, key skills, and a
        brief overview of your career. *
      </label>
      <textarea
        name="text"
        id="text"
        value={formData.text}
        onChange={handleTextareaChange}
        placeholder="Write here"
        className={`block mb-2 p-2 border-2 border-black w-full h-[200px] rounded ${
          formData.text !== "" ? "text-black" : ""
        }`}
        maxLength={500}
        required
      />
      <div className="flex flex-row items-center w-full justify-between py-1 px-0">
        <p className="flex text-[#379AE6] italic text-sm font-light">
          * Make sure it is clear is nice!
        </p>
        <p className="flex">{formData.text.length}/500</p>
      </div>
      <div>
        <h2 className="text-md font-semibold py-3">Sample bio</h2>
        <p className="bg-[#E2D7F4] py-[40px] px-[40px] text-md rounded">
          Hi I am Suzy, and I am a Senior Product Designer with 10+ years of
          experience in UX/UI design. Expert in user research, wireframing, and
          prototyping. Passionate about creating intuitive and engaging digital
          experiences, with a proven track record of successful product
          launches.
        </p>
      </div>
    </div>
  );
};

export default Step4;
