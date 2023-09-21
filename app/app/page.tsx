"use client";
import BondsTable from "@/components/app/bonds_table";
import CompliantBonds from "@/components/app/compliant_bonds";
import { useAppSelector } from "../redux/store";
import Bond from "@/components/bond";

function AppHome() {
  const isDisplayed = useAppSelector((state) => state.displayBondReducer.value);
  console.log("isDisplayed:" + isDisplayed.isOpen);

  return (
    <div className="z-1 flex flex-col h-screen grid grid-cols-7 grid-rows-6 gap-0 max-h-screen overflow-hidden text-white">
      {isDisplayed.isOpen && <Bond />}
      <div className="flex row-start-1 col-start-2 col-span-5 justify-between">
        <div>Available Bonds</div>
        <div className="flex">
          <div className="flex mx-5 text-sable-green-text">Portfolio</div>
          <div className="flex mx-5 text-gray-500 underline">Create Bond</div>
        </div>
      </div>
      <div className="xl:h-96 bg-sable-green-bg row-start-1 col-start-2 col-span-5 row-span-3 py-5 rounded-md my-5 flex items-stretch overflow-x-auto">
        <CompliantBonds />
      </div>
      <div className="flex col-start-2 row-start-4 col-span-5 row-span-3 py-5 items-top">
        <BondsTable />
      </div>
    </div>
  );
}

export default AppHome;
