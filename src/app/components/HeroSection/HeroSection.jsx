import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import img1 from "/public/herosection.svg";
import img2 from "/public/Group 35924.png";

import Image from "next/image";

function HeroSection() {
  return (
    <div className="p-2 ">
      <div className="-z-30  relative top-56 gradient w-40 h-40  blur-2xl rounded-full">
        aman
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between  ">
        <div className="left md:w-[50%]  p-2 flex flex-col space-y-10 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold">
              Make The Best Financial Decisions
            </h1>
            <div className="text-text-primary">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </div>
            <div className="flex gap-3">
              <button className="hidden md:block bg-black-primary text-white-primary px-6 py-3 text-sm  justify-between">
                <div className="flex items-center gap-4">
                  Download
                  <FaArrowRightLong />
                </div>
              </button>
              <button className="hidden md:block  text-black-primary px-6 py-3 text-sm  justify-between">
                <div className="flex items-center gap-4">
                  <MdOutlineSlowMotionVideo className="text-2xl" />
                  Watch Video
                </div>
              </button>
            </div>
          </div>
          <div>
            <Image src={img2} alt="phone-image" className="w-96" />
          </div>
        </div>

        <div className=" flex-1 ">
          <Image src={img1} alt="phone-image" className="" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
