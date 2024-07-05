import React from "react";
import image from "../assets/foodplan.jpg";
import { Link } from "react-router-dom";

const GetStarted = ({ onNext }) => {
  return (

    <div className="min-h-screen w-screen flex flex-col">
      <div
        className="flex-[5]"
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: `center`,
        }}
      ></div>
      <div
        className="flex-[1] flex flex-col justify-center items-center bg-gray-900"
        style={{ backgroundColor: "charcoal" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">MealPal</h1>
        <p className="text-gray-200 text-[0.875rem] mb-6 font-medium text-center px-2">
          Discover Amazing Meal Plans to put you in the pink of health
        </p>
        <button
          onClick={onNext}
          className="w-80 bg-[#4268fb] hover:bg-[#4268fb] text-white font-semibold py-4 px-4 rounded-md"
        >
          Get Started
        </button>
        <p className="text-gray-300 mt-4">
          Already have an account?{" "}
          <span>
            <Link to="/signin" className="text-[#4268fb] hover:text-[#4268fb]">
              Sign in
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
