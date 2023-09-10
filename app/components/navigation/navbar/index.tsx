import React from "react";
import Link from "next/link";
import { IoLogoOctocat } from "react-icons/io";
import { BiSolidBook, BiLaptop } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import styles from "./Navbar.module.css";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-sable-green-page-bg sticky top-0">
      <div className="foo flex justify-between container mx-auto px-5 h-full">
        <div className="flex justify-end items-center text-sable-green-text text-2xl">
          SABLE
          <div className="p-1 mx-2 bg-[#283a3a] text-[#70a1a2] border-solid">
            Beta
          </div>
        </div>
        <div className="flex justify-end content-center items-center">
          {/* <Logo /> */}
          <ul className="flex gap-x-3 items-center content-center text-sable-green-text">
            <li className="border-solid border-[1px] border-sable-green-text p-1 rounded-md">
              <Link href="/discord">
                <IoLogoOctocat />
              </Link>
            </li>
            <li className="border-solid border-[1px] border-sable-green-text p-1 rounded-md">
              <Link href="/book">
                <BiSolidBook />
              </Link>
            </li>
            <li className="border-solid border-[1px] border-sable-green-text px-1 rounded-md">
              <Link href="/login" className="flex items-center">
                <div className="mx-2">
                  <BiLaptop />
                </div>
                APP
              </Link>
            </li>
          </ul>
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
