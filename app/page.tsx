import { TbCurrencySolana } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <div className="foo container mx-auto px-4 bg-sable-green-page-bg text-white">
        <div className="flex flex-col w-screen h-screen justify-center items-end px-20">
          <div className="flex items-center h-40 justify-end w-22">
            <TbCurrencySolana
              className="text-sable-green-text stroke-[0.25px]"
              size={250}
              stroke-width="1"
              style={{ transform: "rotate(15deg)" }}
            />
            <div className="text-sable-green-text text-8xl">SABLE</div>
          </div>
          <div className="text-sable-green-placeholder text-6xl">
            COMPLIANT BONDS
          </div>
        </div>
      </div>
    </>
  );
}
