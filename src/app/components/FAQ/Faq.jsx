import Image from "next/image";
import React from "react";
import img1 from "/public/Frame.png";

function Faq() {
  const data = [
    {
      id: 2,
      title: "The Best Financial Accounting App Ever!",
      description: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.`,
    },
    {
      id: 1,
      title: "The Best Financial Accounting App Ever!",
      description: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.`,
    },
    {
      id: 3,
      title: "The Best Financial Accounting App Ever!",
      description: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.`,
    },
    {
      id: 4,
      title: "The Best Financial Accounting App Ever!",
      description: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.`,
    },
    {
      id: 6,
      title: "The Best Financial Accounting App Ever!",
      description: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.`,
    },
    {
      id: 5,
      title: "The Best Financial Accounting App Ever!",
      description: `“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.`,
    },
  ];

  return (
    <div>
      <div className="flex flex-col space-y-6 ">
        <div>
          <h2 className="text-orange-primary">FAQ</h2>
          <h1 className="font-bold text-3xl ">Frequently Asked Questions</h1>
        </div>

        <div className="flex gap-2 flex-wrap  ">
          {data.map((item) => (
            <div
              key={item.id}
              className={`
                ${
                  item.id % 2 === 0
                    ? "bg-orange-primary text-white-primary"
                    : "text-black-primary"
                }
                
                 p-10 rounded-md  md:w-[48%] `}
            >
              <span className="font-semibold text-xl">
                The Best Financial Accounting App Ever!
              </span>
              <p className="font-light">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-10  flex items-center justify-center">
        <Image src={img1} alt="imgage" className="w-full" />
      </div>
    </div>
  );
}

export default Faq;
