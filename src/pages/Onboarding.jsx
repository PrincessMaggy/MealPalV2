import React, { useEffect, useState } from "react";
import GetStarted from "../Components/GetStarted.jsx";
import AgeAndBMI from "../Components/AgeAndBMI.jsx";
import DietSelection from "../Components/DietSelection";
import AllergySelection from "../Components/AllergySelection";
import HealthIssuesForm from "../Components/Healthissues.jsx";
import Goal from "../Components/Goal.jsx";
import Navbar from "../Components/Header.jsx";
import Button from "../Components/button.jsx";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPage, setShowPage] = useState(false);
  const [bmiCalculated, setBmiCalculated] = useState(false); // State to track BMI calculation
  const totalPages = 6;

  useEffect(() => {
    setShowPage(true);
  }, [currentPage]);

  const changeScreen = () => {
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setShowPage(true);
    }, 700);
  };

  const backButton = () => {
    setShowPage(false);
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      setShowPage(true);
    }, 600);
  };

  const handleBmiCalculated = () => {
    setBmiCalculated(true);
  };

  const buttonContainerStyles = `
    flex justify-center fixed bottom-4 left-0 right-0 w-full
    transition-opacity duration-700
  `;

  const buttonStyles = `
    w-full max-w-xs
  `;

  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen">
        {currentPage > 1 && currentPage <= totalPages && (
          <Navbar
            className={`transition-opacity duration-700 ${
              showPage ? "opacity-100" : "opacity-0"
            }`}
            num_of_page={totalPages - 1}
            current_page={currentPage - 1}
            previous={backButton}
          />
        )}
        <div
          className={`transition-opacity duration-700 ${
            showPage ? "opacity-100" : "opacity-0"
          }`}
        >
          {currentPage === 1 && <GetStarted onNext={changeScreen} />}
          {currentPage === 2 && <Goal onNext={changeScreen} />}
          {currentPage === 3 && <DietSelection />}
          {currentPage === 4 && <AllergySelection />}
          {currentPage === 5 && <HealthIssuesForm />}
          {currentPage === 6 && <AgeAndBMI onBmiCalculated={handleBmiCalculated} />}
        </div>

        {currentPage > 1 && (
          <div className={buttonContainerStyles}>
            <Button
              color={"blue"}
              btnClicked={
                currentPage < totalPages 
                  ? changeScreen 
                  : (bmiCalculated ? changeScreen : undefined)
              }
              className={`transition-opacity duration-700 ${showPage ? "opacity-100" : "opacity-0"} ${buttonStyles} ${
                currentPage === totalPages && !bmiCalculated ? "opacity-50 cursor-not-allowed" : ""
              }`}
              to={currentPage === totalPages && bmiCalculated ? "/signup" : undefined}
            >
              {currentPage === totalPages ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Onboarding;
