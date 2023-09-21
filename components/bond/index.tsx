"use client";
import React from "react";
import { hideBond } from "@/app/redux/features/displayBondSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/redux/store";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function Bond() {
  const dispatch = useDispatch<AppDispatch>();
  const isDisplayed = useAppSelector((state) => state.displayBondReducer.value);

  const { data, error } = useSWR("/api/staticdata", fetcher);
  let placeholder;

  //Handle the error state
  if (error) {
    // console.log(error);
    return <div>Failed to load</div>;
  }
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to

  var bonds = JSON.parse(data);
  var result = bonds.tokens.find(function (token: any) {
    return token.id == parseInt(isDisplayed.bondId);
  });

  const closeBond = () => {
    if (isDisplayed.isOpen) {
      dispatch(hideBond());
    }
  };
  return (
    <div className="backdrop-blur-lg fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-black p-4 rounded-lg shadow-lg">
        <p>Specific Bond ({result.id}) will go here</p>
        <button
          onClick={closeBond}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Bond;
