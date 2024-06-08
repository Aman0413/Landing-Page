import React from "react";
import { MdMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import img1 from "/public/Vector.png";
import Image from "next/image";

function Footer() {
  const links = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About Us",
    },
    {
      id: 3,
      title: "Bookings",
    },
    {
      id: 4,
      title: "Blog",
    },
  ];

  const legal = [
    {
      id: 1,
      title: "Terms of Use",
    },
    {
      id: 2,
      title: "Privacy Policy",
    },
    {
      id: 3,
      title: "Cookie Policy",
    },
  ];

  const product = [
    {
      id: 1,
      title: "Take Tour",
    },
    {
      id: 2,
      title: "Live Chat",
    },
    {
      id: 3,
      title: "Reviews",
    },
  ];

  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:justify-between  ">
        <div className=" flex flex-col space-y-2">
          <div className="flex items-center space-x-4 ">
            <Image src={img1} alt="logo" className="" />
            <span className="font-bold text-xl">Uifry</span>
          </div>
          <div className="flex items-center space-x-4 text-text-primary">
            <span>
              <MdMail className="text-orange-primary" />
            </span>
            <span className="text-sm">Help@Frybix.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>
              <IoCall className="text-orange-primary" />
            </span>
            <span className="text-sm">+123 456 678 89</span>
          </div>
        </div>

        <div className="text-sm flex  flex-col space-y-2">
          <div className="text-xl font-semibold">Links</div>
          {links.map((link) => (
            <span key={link.id} className="text-text-primary">
              {link.title}
            </span>
          ))}
        </div>

        <div className="text-sm flex  flex-col space-y-2">
          <div className="text-xl font-semibold ">Legal</div>
          {legal.map((item) => (
            <div key={item.id} className="text-text-primary">
              {item.title}
            </div>
          ))}
        </div>

        <div className="text-sm flex flex-col space-y-2">
          <div className="text-xl font-semibold">Links</div>
          {product.map((item) => (
            <div key={item.id} className="text-text-primary">
              {item.title}
            </div>
          ))}
        </div>

        <div className="text-sm flex flex-col items-center md:items-start space-y-2">
          <div className="text-xl font-semibold">Newsletter</div>
          <span className="text-text-primary">Stay Up To Date</span>
          <div className="flex space-x-1">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded-md"
            />
            <button className="bg-black-primary text-white p-2 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-text-primary h-[1px] mt-10"></div>
      <div className="text-xs text-center p-8 text-text-primary">
        Copyright 2022 uifry.com all rights reserved
      </div>
    </div>
  );
}

export default Footer;
