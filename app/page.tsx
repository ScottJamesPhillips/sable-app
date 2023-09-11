import { TbCurrencySolana } from "react-icons/tb";
import { FaAsterisk } from "react-icons/fa";
import CompliantBond from "../components/home/compliant_bonds";

export default function Home() {
  return (
    //SP TODO - Maybe more grid rows and shit? Get stuff closer togeteh
    <div className="flex h-screen grid grid-cols-7 grid-rows-7 gap-0 max-h-screen overflow-hidden text-white">
      <div className="flex items-center h-1 w-25 col-start-3 row-start-3 col-span-4">
        <div>
          <TbCurrencySolana
            className="flex text-sable-green-text stroke-[0.25px]"
            size={300}
            // strokeWidth="1"
            style={{ transform: "rotate(15deg)" }}
          />
        </div>
        <div className="text-sable-green-text text-8xl">SABLE</div>
      </div>
      <div className="text-sable-green-placeholder text-6xl col-start-3 row-start-4 col-span-5">
        COMPLIANT BONDS
      </div>
      <div className="flex relative col-start-1 row-start-6 col-span-2 row-span-2 ">
        <FaAsterisk
          size={400}
          className="absolute bottom-0 right-0 text-sable-green-text"
        />
      </div>
      <div className="bg-sable-green-placeholder row-start-5 col-start-3 col-span-5 row-span-3 p-5 rounded-md m-5 flex items-stretch">
        <ul className="flex flex-row overflow-auto">
          <CompliantBond />
        </ul>
      </div>
    </div>
  );
}
