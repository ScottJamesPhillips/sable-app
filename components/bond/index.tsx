import React from "react";
import { showBond } from "@/app/redux/features/displayBondSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/redux/store";

function Bond() {
  const dispatch = useDispatch<AppDispatch>();
  const isDisplayed = useAppSelector((state) => state.displayBondReducer.value);

  const hideBond = () => {
    if (isDisplayed) dispatch(showBond(false));
  };
  return (
    <div className="backdrop-blur-lg fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-black p-4 rounded-lg shadow-lg">
        <p>Specific Bond will go here</p>
        <button
          onClick={hideBond}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Bond;
