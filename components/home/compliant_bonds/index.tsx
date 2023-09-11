"use client";
import React from "react";
import useSWR from "swr";
import CompliantBond from "./bond";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
//Set up SWR to run the fetcher function when calling "/api/staticdata"
//There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data

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
    <div>
      <ul>
        {bonds.tokens.map((bond: any) => (
          <CompliantBond bond={bond} />
        ))}
      </ul>
    </div>
  );

  // return <div className="flex bg-blue-500 flex-grow mx-5">{item}</div>;
}

export default CompliantBonds;

// //useSWR allows the use of SWR inside function components
// import useSWR from 'swr';

// //Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
// const fetcher = (url) => fetch(url).then((res) => res.json());

// export default function Index() {
//   //Set up SWR to run the fetcher function when calling "/api/staticdata"
//   //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
//   const { data, error } = useSWR('/api/staticdata', fetcher);

//   //Handle the error state
//   if (error) return <div>Failed to load</div>;
//   //Handle the loading state
//   if (!data) return <div>Loading...</div>;
//   //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
//   return (
//     <div>
//       <h1>My Framework from file</h1>
//       <ul>
//         <li>Name: {data.record.name}</li>
//         <li>Language: {data.record.language}</li>
//       </ul>
//     </div>
//   );
// }
