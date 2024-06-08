"use client";

import React, { useState } from "react";
import logo from "/public/Group (1).png";
import Image from "next/image";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col md:flex-row space-x-8">
        <div className="logo">
          <Image src={logo} alt="logo" />
        </div>
        <ul
          className={`
            hidden md:flex items-center gap-6  w-screen md:w-[100%]`}
        >
          <li className="font-semibold text-orange-primary">Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div>
        <div className="block md:hidden" onClick={handleClick}>
          <IoReorderThreeOutline className="text-3xl" />
        </div>
        <button className="hidden md:block bg-black-primary text-white-primary px-6 py-3 text-sm">
          Download
        </button>
      </div>
    </div>
  );
}

export default Navbar;
