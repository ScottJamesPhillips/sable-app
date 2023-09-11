import React from "react";

interface CompliantBondProps {
  bond: {
    id: number;
    name: string;
    supply: string;
    bondtype: string;
    issuedate: string;
    expirydate: string;
    apy: string;
  };
}

const CompliantBond: React.FC<CompliantBondProps> = ({ bond }) => {
  return (
    <div className="rounded h-full border-solid border-[1px] border-sable-green-text">
      <p>{bond.id}</p>
      <p>{bond.name}</p>
    </div>
  );
};

export default CompliantBond;
