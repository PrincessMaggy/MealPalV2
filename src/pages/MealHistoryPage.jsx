import React, { useState } from "react";
import MealHistory from "../Components/MealHistory";
import chicken from "../assets/meal-history/fine.png";
import fruit from "../assets/meal-history/food2.png";
import beef from "../assets/meal-history/food3.png";
import pot from "../assets/skillet.svg";
import SearchBar from "../Components/SearchBar";

const searchMeal = (searchTerm) => {
  if(!searchTerm) {
    setFilterMeals(meals);
    return;
  }

  const filtered = meals.filter((meal) =>
  meal.title.toLowerCase().includes(searchTerm.toLowerCase())
);
setFilterMeals(filtered);
}

const mealCompData = [
  {
    title: "Chicken kebab",
    img: chicken,
  },
  {
    title: "Fruit platter",
    img: fruit,
  },
  {
    title: "Slow Cooked Beef Soup",
    img: beef,
  },
];

export default function MealPlanPage() {
  return (
    <div className="container mx-auto w-full">
      {/* <SearchBar onSearch={searchMeal} />
      <div className={'w-full h-[200px] flex items-end mt-5 p-4 rounded shrink-0 bg-no-repeat overflow-hidden'}>

      </div> */}
      <h1 className="text-[#000] font-normal text-[1rem] mb-[1rem] mx-4 leading-[19.36px]">
        Meal History
      </h1>

      <div className="flex gap-4 flex-wrap justify-center mx-4">
        {mealCompData.map((meal, i) => {
          return <MealHistoryComponent key={i} meal={meal} />;
        })}
      </div>

      <MealHistory />
    </div>
  );
}

const MealHistoryComponent = ({ meal }) => {
  return (
    <div className="">
      <img
        src={meal.img}
        className="w-[361px] h-[136px] w-full rounded-[10px]"
      />

      <h5 className="text-[#000] font-semibold text-[1rem] mt-[0.75rem] mb-[0.62rem] ">
        {meal.title}
      </h5>

      <div className="flex gap-3">
        <h5 className="text-[#0E131F] font-medium text-[0.75rem] mb-[0.5rem] p-[0.25rem] bg-[#F0F6FF] rounded-[.25rem]">
          Meal Type
        </h5>
        <h5 className="text-[#0E131F] font-medium text-[0.75rem] mb-[0.5rem] p-[0.25rem] bg-[#FFF5F0] rounded-[.25rem]">
          Cuisine Tag
        </h5>
        <h5 className="text-[#0E131F] font-medium text-[0.75rem] mb-[0.5rem] p-[0.25rem] bg-[#FFF5F0] rounded-[.25rem]">
          Cuisine Tag
        </h5>
      </div>

      <div className="flex gap-2 items-center mb-[1.31rem]">
        <img src={pot} className="w-20.04px h-16px" />
        <h5 className="text-[#000] font-medium text-[0.75rem] ">45 mins</h5>
      </div>
    </div>
  );
};