"use client";
import { TbCurrencySolana } from "react-icons/tb";
import { FaAsterisk } from "react-icons/fa";
import CompliantBonds from "../components/home/bond_list";
import { useAppSelector } from "./redux/store";
import Bond from "@/components/clicked_bond";

export default function Home() {
  const isDisplayed = useAppSelector((state) => state.displayBondReducer.value);
  return (
    //SP TODO - Maybe more grid rows and shit? Get stuff closer togeteh
    <div className="flex h-screen grid grid-cols-7 grid-rows-5 gap-0 max-h-screen overflow-hidden text-white">
      {isDisplayed.isOpen && <Bond />}
      <div className="flex items-center h-1 col-start-3 row-start-2 col-span-4 text-8xl">
        <TbCurrencySolana
          size={350}
          className="text-sable-green-text stroke-[0.25px]"
          style={{ transform: "rotate(15deg)" }}
        />
        <div className="text-sable-green-text"> SABLE</div>
      </div>
      <div className="flex text-sable-green-secondary-text text-6xl col-start-3 row-start-2 col-span-5 items-end">
        COMPLIANT BONDS
      </div>
      <div className="flex relative col-start-1 row-start-4 col-span-2 row-span-2 ">
        <FaAsterisk
          size={350}
          className="absolute bottom-0 right-0 text-sable-green-text"
        />
      </div>
      <div className="xl:h-96 bg-sable-green-bg row-start-3 col-start-3 col-span-5 row-span-2 p-5 rounded-md m-5 flex items-stretch overflow-x-auto">
        <CompliantBonds />
      </div>
    </div>
  );
}
