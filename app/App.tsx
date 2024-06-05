"use client";

import React from "react";
import { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [nameText, setNameText] = useState("");

  function handleChange(
    e: any,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) {
    setName(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setNameText(firstname);
  }

  return (
    <div>
      <h1 className="text-lg">
        Hello, {firstname} {surname}
      </h1>

      <form className="flex flex-col" action="" onSubmit={handleSubmit}>
        <input
          onChange={(e: any) => handleChange(e, setFirstName)}
          value={firstname}
          type="text"
          placeholder="What is your firstname?"
          className="mb-4 p-2 border border-gray-300 rounded m-5"
        />
        <input
          onChange={(e: any) => handleChange(e, setLastName)}
          value={lastname}
          type="text"
          placeholder="What is your firstname?"
          className="mb-4 p-2 border border-gray-300 rounded m-5"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
