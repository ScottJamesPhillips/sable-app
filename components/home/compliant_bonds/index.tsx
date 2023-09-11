"use client";
import React from "react";
import useSWR from "swr";
import CompliantBond from "./bond";

//Set up SWR to run the fetcher function when calling "/api/staticdata"
//There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data

const fetcher = (url: any) => fetch(url).then((res) => res.json());

function CompliantBonds() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  //Handle the error state
  if (error) {
    console.log(error);
    return <div>Failed to load</div>;
  }
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to

  var bonds = JSON.parse(data);
  console.log(bonds);

  return (
    <ul className="flex space-x-4">
      {bonds.tokens.map((bond: any) => (
        <div className="w-96">
          <CompliantBond bond={bond} />
        </div>
      ))}
    </ul>
  );
}

export default CompliantBonds;
