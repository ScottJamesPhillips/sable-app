"use client";
import { TbCurrencySolana } from "react-icons/tb";
import { FaAsterisk } from "react-icons/fa";
import CompliantBonds from "../components/home/bond_list";
import { useAppSelector } from "./redux/store";
import Bond from "@/components/clicked_bond";
import SolanaLogo from "../assets/solana-sol-logo.svg";
import Asterisk from "../assets/Icon awesome-star-of-life.svg";
import Image from "next/image";

export default function Home() {
  const isDisplayed = useAppSelector((state) => state.displayBondReducer.value);
  return (
    //SP TODO - Maybe more grid rows and shit? Get stuff closer togeteh
    <div className="flex h-screen grid grid-rows-12 grid-cols-9 gap-0 max-h-screen overflow-hidden text-white">
      {isDisplayed.isOpen && <Bond />}
      <div className="row-start-1 w-full row-span-3 col-start-1 col-span-9">
        <div className="flex grid grid-cols-8 grid-rows-2 h-full relative">
          <div className="col-start-4">
            <div className="flex items-center row-start-1 row-span-1 absolute">
              <Image
                src={SolanaLogo}
                alt=""
                width={250}
                className="z-20 mt-5"
              />
              <div className="text-sable-green-text text-11xl left-100 -ml-12 z-1 font-medium">
                SABLE
              </div>
            </div>
          </div>

          <div className="col-start-3 col-span-8 text-8xl flex row-start-2 items-end absolute mt-16 text-sable-green-secondary-text font-medium">
            COMPLIANT BONDS
          </div>
        </div>
      </div>

      <div className="row-start-4 row-span-1 col-start-1 col-span-3 overflow-y-hidden absolute mt-40 -left-56">
        <Image src={Asterisk} alt="" width={600} className="flex z-1 mt-5" />
      </div>

      <div className="row-start- col-start-3 col-span-7">
        <div className="xl:h-84 bg-sable-green-bg row-start-5 col-start-3 col-span-5 row-span-2 p-2 rounded-md m-5 flex items-stretch overflow-x-auto">
          <CompliantBonds />
        </div>
      </div>
    </div>
  );
}
