type StepProps = {
  formData: any;
  handleChange: any;
};

const Step1: React.FC<StepProps> = ({ formData, handleChange }) => {
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
  ];

  return (
    <div className="flex flex-col items-start mx-auto py-6 px-0 space-y-3">
      <h1 className="flex font-semibold text-2xl">
        Hello! Lets start filling up your details.
      </h1>
      <label htmlFor="name">What is your Firstname? *</label>
      <input
        className="block mb-2 p-2 border-2 border-black w-full rounded"
        type="text"
        id="name"
        name="name"
        autoComplete="given-name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your Firstname"
        required
      />
      <label htmlFor="surname">What is your Lastname? *</label>
      <input
        className="block mb-2 p-2 border-2 border-black w-full rounded"
        type="text"
        name="surname"
        autoComplete="family-name"
        id="surname"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Enter your Lastname"
        required
      />
      <label htmlFor="country">What country are you located in?</label>
      <select
        className="block mb-2 p-2 border-2 border-black w-full rounded"
        name="country"
        id="country"
        autoComplete="country"
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
      <label htmlFor="phoneNumber">Your phone number *</label>
      <input
        className="block mb-2 p-2 border-2 border-black w-full rounded"
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        autoComplete="tel"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone number"
        required
      />
      <label htmlFor="dateOfBirth">Date of Birth</label>
      <input
        className="block mb-2 p-2 border-2 border-black w-full rounded"
        type="date"
        name="dateOfBirth"
        id="dateOfBirth"
        autoComplete="bday"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Step1;
