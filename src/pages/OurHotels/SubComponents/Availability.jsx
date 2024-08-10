import React, { useState } from "react";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { TbBoxMultiple3 } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa"; // Import the price icon

const availabilityData = [
  {
    id: 1,
    size: "260m²",
    rooms: "x3",
    guests: "x6",
    price: "$200",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Europe-Hotel-4-800x600.jpg",
  },
  {
    id: 2,
    size: "300m²",
    rooms: "x4",
    guests: "x8",
    price: "$250",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/ibis-Yerevan-Center-4-800x600.jpg",
  },
];

const Availability = () => {
  const [visiblePrice, setVisiblePrice] = useState(null);

  const handleShowPrice = (id) => {
    setVisiblePrice(visiblePrice === id ? null : id);
  };

  return (
    <section className="w-full  bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Availability</h1>
      <div className="flex flex-wrap gap-6 justify-start">
        {availabilityData.map(({ id, size, rooms, guests, price, image }) => (
          <div
            key={id}
            className="flex flex-col items-center bg-white w-full md:w-[300px] border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={image}
              alt={`Room ${id}`}
              className="w-full h-32 object-cover"
            />
            <div className="flex items-center justify-center w-full  px-3 py-5 ">
              <div className="flex items-center h-full w-1/2 gap-1 justify-start">
                <div className="flex items-center">
                  <MdPhotoSizeSelectLarge className="text-blue-600 text-xl mr-2" />
                  <span className="text-gray-700 text-sm font-semibold ">{size}</span>
                </div>
                <div className="flex items-center">
                  <TbBoxMultiple3 className="text-blue-600 text-xl mr-2" />
                  <span className="text-gray-700 text-sm font-semibold ">{rooms}</span>
                </div>
                <div className="flex items-center">
                  <IoMdPerson className="text-blue-600 text-xl mr-2" />
                  <span className="text-gray-700 text-sm font-semibold ">{guests}</span>
                </div>
              </div>
              <div className="flex flex-col w-1/2 items-end">
                <button
                  className={`bg-blue-600 text-white text-sm font-semibold rounded-lg px-2 py-1 transition-all ${
                    visiblePrice === id ? "bg-green-600" : ""
                  }`}
                  onClick={() => handleShowPrice(id)}
                >
                  {visiblePrice === id ? `${price}` : "Show Price"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Availability;
