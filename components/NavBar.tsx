import { UserButton } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between p-3 px-10 border-b-[1px] shadow-md">
      <div className="flex gap-10 items-center">
        <h1 className="text-2xl">
          CITY
          <span className="text-yellow-600">SPRINT</span>
        </h1>

        <div className="hidden md:flex gap-6">
          <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            Home
          </h2>
          <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            History
          </h2>
          <h2 className="hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all">
            Help
          </h2>
        </div>
      </div>
      <UserButton />
    </div>
  );
};

export default NavBar;
