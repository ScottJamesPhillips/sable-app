import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

function QuantityPicker() {
  return (
    <div className="flex w-full xl:h-16 justify-between items-center">
      <AiFillMinusSquare className="text-red-400" size={50} />
      <div className="flex">
        Purchase
        <div className="underline">2</div>
        <div className="text-gray-500">$TOKEN</div>
        Bonds?
      </div>
      <AiFillPlusSquare className="text-green-400" size={50} />
    </div>
  );
}
export default QuantityPicker;
