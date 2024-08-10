import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HotelMap from "./HotelMap";

const Sidebar = () => {
  const [bookingInfo, setBookingInfo] = useState({
    checkIn: "2024-07-31",
    checkOut: "2024-08-01",
    guests: 2,
    price: "€160.00",
    reviews: 3,
    rating: 5,
  });

  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [userProfile] = useState({
    name: "Modmix",
    memberSince: "2022",
    avatarUrl:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleCheckAvailability = () => {
    // Handle check availability logic here, e.g., API call
    console.log("Checking availability for:", bookingInfo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log("Form submitted:", inquiryForm);
    // Reset form
    setInquiryForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-h-fit w-full rounded-lg p-4 bg-gray-50 shadow-2xl border border-gray-200">
      <Tabs>
        <TabList className="flex justify-center gap-2 text-center mb-4">
          <Tab className="text-white bg-blue-600 cursor-pointer font-medium rounded-lg text-base px-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Book
          </Tab>
          <Tab className="text-white bg-blue-600 cursor-pointer font-medium rounded-lg text-base px-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Inquiry
          </Tab>
        </TabList>

        {/* Book Tab Panel */}
        <TabPanel>
          <div className="">
            <h1 className="text-lg font-semibold text-gray-600 mb-2">
              From{" "}
              <span className="text-gray-900 text-xl">{bookingInfo.price}</span>{" "}
              /night
            </h1>
            <div className="flex items-center text-gray-700 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-lg font-semibold">
                {bookingInfo.rating}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                ({bookingInfo.reviews} reviews)
              </span>
            </div>

            <div className="border border-gray-300 rounded-lg p-4 mb-4">
              <div className="flex justify-between mb-4">
                <div>
                  <h1 className="text-md font-semibold text-gray-500">
                    Check In
                  </h1>
                  <input
                    type="date"
                    name="checkIn"
                    value={bookingInfo.checkIn}
                    onChange={handleBookingChange}
                    className="font-bold text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <h1 className="text-md font-semibold text-gray-500">
                    Check Out
                  </h1>
                  <input
                    type="date"
                    name="checkOut"
                    value={bookingInfo.checkOut}
                    onChange={handleBookingChange}
                    className="font-bold text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-md font-semibold text-gray-500">Guests</h1>
                <input
                  type="number"
                  name="guests"
                  value={bookingInfo.guests}
                  onChange={handleBookingChange}
                  min="1"
                  className="font-bold text-gray-800 w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>

            <button
              className="w-full text-white bg-blue-600 cursor-pointer font-medium rounded-lg text-sm py-3"
              onClick={handleCheckAvailability}
            >
              Check Availability
            </button>
          </div>
        </TabPanel>

        {/* Inquiry Tab Panel */}
        <TabPanel>
          <div className="p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  *Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={inquiryForm.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={inquiryForm.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={inquiryForm.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={inquiryForm.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 cursor-pointer font-medium rounded-lg text-sm py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </TabPanel>
      </Tabs>

      <HotelMap/>
     
    </div>
  );
};

export default Sidebar;
