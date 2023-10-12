"use client";
import CompliantBonds from "./components/home/bond_list";
import { useAppSelector } from "./redux/store";
import Bond from "@/app/components/clicked_bond";
import SolanaLogo from "./assets/solana-sol-logo.svg";
import Asterisk from "./assets/Icon awesome-star-of-life.svg";
import Image from "next/image";

export default function Home() {
  const isDisplayed = useAppSelector((state) => state.displayBondReducer.value);
  return (
    //SP TODO - Maybe more grid rows and shit? Get stuff closer togeteh
    <div className="flex h-screen grid grid-rows-12 grid-cols-9 gap-0 max-h-screen overflow-hidden text-white">
      {isDisplayed.isOpen && <Bond />}
      <div className="row-start-1 w-full row-span-3 col-start-1 col-span-9">
        <div className="flex grid grid-cols-8 grid-rows-3 h-full relative">
          <div className="col-start-4 row-start-2">
            <div className="flex items-center row-start-1 row-span-1 absolute lg:w-[220px] xl:w-[225px] 2xl:w-[250px]">
              <Image
                src={SolanaLogo}
                alt=""
                className="z-20 mt-5"
                layout="responsive"
              />
              <div className="text-sable-green-text left-100 -ml-10 z-1 font-medium lg:text-[8.5rem] xl:text-10xl 2xl:text-11xl">
                SABLE
              </div>
            </div>
          </div>

          <div className="col-start-3 col-span-8 text-5xl flex row-start-3 mt-20 items-end absolute text-sable-green-secondary-text font-medium lg:text-7xl xl:text-7.5xl 2xl:text-8xl">
            COMPLIANT BONDS
          </div>
        </div>
      </div>

      <div
        className="row-start-4 row-span-1 col-start-1 col-span-3 overflow-y-hidden absolute mt-40
      lg:-left-52 lg:w-[500px] lg:mt-52
      xl:-left-56 xl:w-[550px] xl:mt-52
      2xl:-left-36 xl:w-[660px] xl:mt-40"
      >
        <Image src={Asterisk} alt="" width={600} className="flex z-1 mt-36" />
      </div>

      <div className="row-start- col-start-3 col-span-7">
        <div className="xl:h-84 bg-sable-green-bg row-start-5 col-start-3 col-span-5 row-span-2 p-2 rounded-md m-5 flex items-stretch overflow-x-auto">
          <CompliantBonds />
        </div>
      </div>
    </div>
  );
}
