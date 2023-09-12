import React from "react";
import { FaNewspaper } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";

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
    <div className="h-full rounded-lg border-solid border-[1px] border-sable-green-text">
      <div className="h-full group p-4 lg:p-8">
        <div className="flex items-center gap-x-2 ">
          <div className="bg-sable-green-text aspect-[2/2] w-16 border-[1px] border-sable-green-text rounded-md" />
          <div>
            <div className="flex">
              <h3 className="text-xl font-bold text-gray-50">{bond.name}</h3>
              <div className="flex items-center mx-4 text-l text-gray-500">
                $TOKEN
              </div>
            </div>
            <div className="text-xs text-gray-300">{bond.supply} SUPPLY</div>
            <a
              href=""
              className="text-xs text-gray-500 underline text-sable-green-placeholder"
            >
              view on solscan
            </a>
          </div>
        </div>
        <form className="flex my-4">
          <div className="px-1 w-2/7">
            <label
              htmlFor="bondtype"
              className="block mb-2 text-xs text-white-100"
            >
              bondtype
            </label>
            <input
              type="text"
              id="bondtype"
              value={bond.bondtype}
              className="p-2 bg-sable-green-page-bg border border-sable-green-placeholder text-white-900 text-xs rounded-lg block w-full"
              required
            />
          </div>
          <div className="px-1 w-2/7">
            <label
              htmlFor="issue_date"
              className="block mb-2 text-xs text-white-100"
            >
              issue date
            </label>
            <input
              type="text"
              id="issue_date"
              value={bond.issuedate}
              className="p-2 bg-sable-green-page-bg border border-sable-green-placeholder text-white-900 text-xs rounded-lg block w-full"
              required
            />
          </div>
          <div className="px-1 w-2/7">
            <label
              htmlFor="expiry_date"
              className="block mb-2 text-xs text-white-100"
            >
              expiry date
            </label>
            <input
              type="text"
              id="expiry_date"
              className="p-2 bg-sable-green-page-bg border border-sable-green-placeholder text-white-900 text-xs rounded-lg block w-full"
              value={bond.expirydate}
              required
            />
          </div>
          <div className="px-1 w-1/7">
            <label htmlFor="apy" className="block mb-2 text-xs text-white-100">
              apy
            </label>
            <input
              type="text"
              id="apy"
              className="p-2 bg-sable-green-page-bg border border-sable-green-placeholder text-white-900 text-xs rounded-lg block w-full"
              value={bond.apy}
              required
            />
          </div>
        </form>
        <div className="flex justify-between text-xs p-2.5">
          <span className=" flex m-1 ml-0 inline-block text-white-500 items-center">
            <div className="flex items-center text-green-500 bg-green-800 p-1 rounded-lg">
              <BsFillBagFill />
            </div>
            +50,000 $TOKEN per Bond
          </span>
          <span className="flex m-1 ml-0 inline-block text-white-500 items-center">
            <div className="flex items-center text-green-500 bg-green-800 p-1 rounded-lg">
              <HiOutlineBanknotes />
            </div>
            -1.25 $SOL per Bond
          </span>
        </div>
        <div className="flex items-center justify-between bg-red-100 p-2.5 rounded-lg bg-[#101919]">
          <span className="text-sm font-small text-gray-50">
            250,000 $TOKEN Supply Remaining
          </span>
          <a className="font-medium text-sable-green-placeholder transition-all duration-300 group-hover:text-sable-green-placeholder">
            <FaNewspaper />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompliantBond;
