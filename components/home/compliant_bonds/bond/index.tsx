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
  console.log(bond);
  return (
    <div>
      <p>{bond.id}</p>
      <p>{bond.name}</p>
    </div>
  );
};

export default CompliantBond;
