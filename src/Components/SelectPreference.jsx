import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth, db, onAuthStateChanged } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import back from '../assets/back.png';

const options = {
  Tubers: ["Yam", "Cocoyam", "White yam", "Potatoes", "Cassava", "Ginger", "Arums", "Sweet potato"],
  Fruits: ["Pineapple", "Watermelon", "Banana", "Orange", "Guava", "Apple", "Strawberries", "Coconut"],
  Grains: ["Millet", "Maize", "Rice", "Oats", "Quinoa", "Corn", "Barley", "Wheat", "Rye"],
  Vegetables: ["Spinach", "Carrots", "Green peas", "Broccoli", "Cabbage", "Okra", "Cauliflower", "Peas"],
  Spices: ["Onion Powder", "Thyme", "Curry", "Ginger", "Garlic powder", "Bay leaves", "Turmeric", "Cinnamon"],
};

const SelectPreference = ({ onNext }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSelect = (category, item) => {
    const newItem = { category, item };
    setSelectedItems([...selectedItems, newItem]);
  };

  const handleDeselect = (category, item) => {
    setSelectedItems(selectedItems.filter(i => i.category !== category || i.item !== item));
  };

  const isSelected = (category, item) => {
    return selectedItems.some(i => i.category === category && i.item === item);
  };

  const handleSavePreferences = async () => {
    if (currentUser) {
      try {
        await setDoc(doc(db, "userPreferences", currentUser.uid), {
          selectPreferences: selectedItems,
        });
        onNext();
      } catch (error) {
        console.error("Error saving preferences: ", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mb-10 mt-6 p-6">
      <div className="inline-flex w-[358px] h-[80px] flex-col items-start">
        <h1 className="font-manrope text-lg font-semibold leading-normal">Select preference</h1>
        <p className="font-manrope text-sm text-[#545454] mt-2 font-normal leading-normal">
          Add more than one item that you like
        </p>
      </div>
      
      {Object.keys(options).map(category => (
        <div key={category} className="flex flex-col w-[360px] mb-4">
          <div className="flex flex-col items-start content-start ">
            <p className="font-manrope text-black text-base font-medium leading-normal">{category}</p>
            <div className="flex flex-wrap items-start content-start gap-2 border-b-2 p-4 border-gray-200" style={{ width: '360px' }}>
              {options[category].map(item => (
                <div
                  key={item}
                  onClick={() => isSelected(category, item) ? handleDeselect(category, item) : handleSelect(category, item)}
                  className={`flex justify-center items-center gap-2 p-1.25 px-2.125 rounded-full border cursor-pointer ${
                    isSelected(category, item) ? 'bg-green-700 text-white border-green-700' : 'border-gray-600'
                  }`}
                >
                  <p className="text-center font-manrope text-xs leading-normal p-1 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={handleSavePreferences}
        className="font-manrope text-md font-medium leading-normal
          flex w-[358px] h-[40px] p-4 justify-center items-center mt-4 gap-2 
          flex-shrink-0 rounded-[8px] text-white border bg-green-700 hover:bg-green-300"
      >
        Generate meal plan
      </button>
    </div>
  );
};

export default SelectPreference;
