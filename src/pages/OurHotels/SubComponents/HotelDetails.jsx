import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShareAlt,
  FaHeart,
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaSpa,
  FaUtensils,
  FaCocktail,
  FaConciergeBell,
} from "react-icons/fa";
import Availability from "./Availability";
import HotelMap from "./HotelMap";
import Sidebar from "./Sidebar";
import ReviewsSection from "./Reviews";

const amenitiesData = [
  { name: "Free Wifi", icon: <FaWifi className="text-blue-500" /> },
  { name: "Free Parking", icon: <FaCar className="text-gray-600" /> },
  { name: "Swimming Pool", icon: <FaSwimmingPool className="text-blue-600" /> },
  { name: "Fitness Center", icon: <FaDumbbell className="text-gray-800" /> },
  { name: "Spa", icon: <FaSpa className="text-pink-600" /> },
  { name: "Restaurant", icon: <FaUtensils className="text-green-600" /> },
  { name: "Bar", icon: <FaCocktail className="text-yellow-500" /> },
  { name: "Room Service", icon: <FaConciergeBell className="text-gray-700" /> },
];

const HotelDetails = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <>
      <div className="relative flex flex-col lg:px-28 lg:flex-row p-5 gap-10">
        <div className="lg:w-2/3">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
            {/* Left Side: Hotel Details */}
            <div className="flex flex-col flex-grow">
              <h1 className="text-2xl font-bold mb-4">Hotel Grand Deluxe</h1>
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4>(25 reviews)</h4>
                <h3 className="text-black font-bold">Excellent</h3>
              </div>
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <h2 className="text-blue-500 font-bold py-1 px-4 h-9 rounded-lg border border-blue-700">
                  5/5
                </h2>
                <div className="flex flex-col">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold">1234 Hotel St, City</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500">Price</span>
                  <span className="font-semibold">$200/night</span>
                </div>
              </div>
            </div>

            {/* Right Side: Share and Wishlist */}
            <div className="flex flex-col items-center gap-4 mt-4 lg:mt-0">
              <div className="relative">
                <button
                  onClick={handleShareClick}
                  className="p-2 bg-blue-600 text-white rounded-full focus:outline-none"
                >
                  <FaShareAlt className="h-6 w-6" />
                </button>
                {showShareOptions && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
                    <ul className="flex flex-col">
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 hover:bg-gray-100"
                        >
                          <FaFacebookF className="h-5 w-5 text-blue-600" />
                          <span className="ml-2">Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 hover:bg-gray-100"
                        >
                          <FaInstagram className="h-5 w-5 text-pink-600" />
                          <span className="ml-2">Instagram</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center p-2 hover:bg-gray-100"
                        >
                          <FaTwitter className="h-5 w-5 text-blue-400" />
                          <span className="ml-2">Twitter</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <button className="p-2 bg-gray-200 rounded-full">
                <FaHeart className="h-6 w-6 text-red-600" />
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-500 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget sapien sapien. Integer accumsan tincidunt fringilla. Cras
              luctus, sem sit amet tincidunt volutpat, libero erat pellentesque
              tellus, sit amet posuere neque ligula sit amet ex. Curabitur
              aliquam, sapien sit amet ultrices suscipit, ex turpis luctus urna,
              nec tincidunt orci quam eget libero.
            </p>
          </div>

          {/* Amenities Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <ul className="flex flex-wrap gap-4">
              {amenitiesData.map((amenity, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-3 rounded-lg flex items-center gap-2"
                >
                  {amenity.icon}
                  <span>{amenity.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Availability Section */}

           <Availability/>

        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <Sidebar/>
        </div>
      </div>
    </>
  );
};

export default HotelDetails;
