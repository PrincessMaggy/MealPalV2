import React, { useState } from "react";

const DietSelection = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const dietOptions = [
    { name: "Vegan", description: "Only eat plant-based food" },
    { name: "Vegetarian", description: "Don’t eat meat and fish" },
    { name: "Flexitarian", description: "Occasionally eats meat and fish" },
    { name: "Pescetarian", description: "Don’t eat meat but eats fish" },
    { name: "Omnivore", description: "Eats meat and almost everything" },
  ];

  const handleOptionSelect = (option) => {
    // Toggle the option in and out of selectedOptions
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="min-h-screen w-screen px-4 flex flex-col justify-center lg:items-center">
      <h2 className="mb-4 mt-10 text-2xl font-bold text-left lg:text-center">
        What are your dietary preferences?
      </h2>
      <div className="flex flex-col gap-4 lg:gap-8 mb-10">
        {dietOptions.map((option) => (
          <div
            key={option.name}
            className={`flex items-start border border-gray-100 rounded-md lg:border-2`}
            style={{ backgroundColor: selectedOptions.includes(option.name) ? "#BFDBFE" : "" }}
          >
            <label className="flex items-center w-full gap-2">
              <button
                onClick={() => handleOptionSelect(option.name)}
                className={`py-3 px-4 w-full text-left`}
                style={{ backgroundColor: selectedOptions.includes(option.name) ? "#BFDBFE" : "" }}
              >
                <div>
                  <span className="font-bold">{option.name}</span>
                  <p className="text-sm">{option.description}</p>
                </div>
              </button>
              <input
                type="checkbox"
                onChange={() => handleOptionSelect(option.name)}
                checked={selectedOptions.includes(option.name)}
                id={`checkbox-${option.name}`}
                className="custom-checkbox mr-3"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietSelection;
