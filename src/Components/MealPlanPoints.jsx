import React from 'react';
import { useNavigate } from 'react-router-dom';

function MealPlanPoints() {

    // Get the history object from React Router
    const navigate = useNavigate();

    function createMealPlan() {

        // to navigate to the meal plan page
        navigate('/Recommended');

    }

    
    function mealHistory() {
        // to navigate to the meal history page
        navigate('/saved');
    }

    return(
        <>
            <div className='flex justify-center items-center'>
                <div className="bg-slate-100 rounded-xl  inline-block w-80  border pb-2 text-left px-3 pt-3">
                    <h1 className="font-semibold text-2xl ">0 Meal Plan</h1>
                    <p className="  py-1 text-sm pb-1 ">Ready for a delicious meal? Earn 20 points per meal.</p>
                    <button onClick={createMealPlan} className="  bg-blue-700 p-1 text-white  hover:bg-blue-400 px-2 inline-block mr-5  rounded-xl  text-sm ">Create Meal Plan</button>
                    {/* <button onClick={mealHistory} className="bg-neutral-400 p-1 text-white px-2 hover:bg-slate-500  rounded-xl text-sm">Meal History</button>  */}
                </div>
            </div>
            
        </>
    )
}

export default MealPlanPoints;