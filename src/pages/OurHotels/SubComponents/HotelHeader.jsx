import React from "react";

const HotelHeader = () => {
  return (
    <>
      {/* Header */}
      <header>
        <div
          className="w-full bg-center bg-cover h-[22rem]"
          style={{
            backgroundImage:
              "url('https://res.klook.com/image/upload/q_85/c_fill,w_750/v1627007982/blog/zpi2q97byawo5dwvwppa.jpg')",
          }}
        >
          <div className="flex justify-center items-center flex-col gap-8 w-full h-full bg-gray-900/60">
            <h1 className="text-4xl font-semibold text-white">
              Hotel Grand Deluxe
            </h1>
            <ul className="lg:text-xl text-base flex font-medium lg:space-x-5 text-white space-x-2">
              <li>Home</li>
              <li>-</li>
              <li>All Hotels</li>
              <li>-</li>
              <li className="text-gray-400"> Hotel Grand Deluxe</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default HotelHeader;
