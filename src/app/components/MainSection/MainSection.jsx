import Image from "next/image";
import React from "react";
import { MdOutlineStarRate } from "react-icons/md";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import img1 from "/public/Group 35933.png";
import img2 from "/public/Group 35935.png";
import img3 from "/public/Group 35917.png";
import img4 from "/public/Group 1000002332.png";

function MainSection() {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row items-center md:space-x-20">
        <div className="hidden md:block">
          <Image src={img1} alt="image" />
        </div>

        <div>
          <div className="py-6">
            <h2 className="text-sm text-orange-primary uppercase">Features</h2>
            <h2 className="font-bold text-3xl">Uifry Premium</h2>
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              <div className="flex items-center space-x-2 font-bold">
                <MdOutlineStarRate className="text-orange-primary" />
                <span>Budgeting Intervals</span>
              </div>
              <p className="text-text-primary">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 font-bold">
                <MdOutlineStarRate className="text-orange-primary" />
                <span>Budgeting Intervals</span>
              </div>
              <p className="text-text-primary">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
            <div>
              <div className="flex items-center space-x-2 font-bold">
                <MdOutlineStarRate className="text-orange-primary" />
                <span>Budgeting Intervals</span>
              </div>
              <p className="text-text-primary">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  md:flex-row-reverse items-center ">
        <div className="w-full">
          <Image src={img2} alt="image" />
        </div>

        <div>
          <div className="py-6">
            <h2 className="text-sm text-orange-primary uppercase">
              Advantages
            </h2>
            <h2 className="font-bold text-3xl">Why Choose Uifry?</h2>
          </div>

          <div className="flex flex-col space-y-6  ">
            <div>
              <div className="flex items-center space-x-2 font-bold my-3">
                <IoNotificationsCircleSharp className="text-orange-primary text-2xl" />
                <span className="text-xl">Clever Notifications</span>
              </div>
              <p className="text-text-primary">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  md:flex-row items-center ">
        <div className="w-full">
          <Image src={img1} alt="image" />
        </div>

        <div className="">
          <div className="flex flex-col space-y-6 ">
            <div>
              <div className="flex items-center space-x-2 font-bold my-3">
                <IoNotificationsCircleSharp className="text-orange-primary text-2xl" />
                <span className="text-xl">Fully Customizable</span>
              </div>
              <p className="text-text-primary">
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className=" flex justify-center items-center flex-col">
          <h2 className="uppercase text-text-primary">testimonial</h2>
          <h1 className="text-3xl font-bold ">What Our Users Say About Us?</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="">
            <Image src={img4} alt="image" />
          </div>
          <div className="flex flex-col md:w-[60%] space-y-4">
            <div className="font-bold text-2xl ">
              The Best Financial Accounting App Ever!
            </div>
            <div className="text-sm">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </div>
            <div>
              <Image src={img3} alt="image" />
            </div>
            <div className="font-semibold">Nick Jones</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
