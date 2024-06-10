import React, { useEffect, useState } from "react";
import Notification from "../Components/Notification";
import { confirmPasswordReset } from "firebase/auth/cordova";
import { useNavigate } from "react-router-dom";

export default function MealPlan() {
  const [selectedOption, setSelectedOption] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  //   setSuccessMessage("Cheers! You have successfully planned a meal.");
const navigate = useNavigate()

  return (
    <>
      <h1 className="text-3xl text-violet-700">
        Welcome!! Lets plan you a meal.
      </h1>
      {successMessage && <Notification message={successMessage} />}
    </>
  );
}
