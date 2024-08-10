import React from "react";
import { HotelData } from "../data/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

const HotelPackage = () => {

    const settings = {
        container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 10,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 1
            },
        },
    };
    return (
        <div className="container relative pb-10">
            <div className="grid grid-cols-1 pb-8 text-center ">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Hotel package </h3>

                <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
            </div>

            <div className="grid grid-cols-0 overflow-hidden lg:px-[-1rem] ">
                <div className="tiny-five-item">
                    <TinySlider settings={settings}>
                        {HotelData.map((item, index) => {
                            return (
                                <div className="tiny-slide " key={index}>
                                    <div className="flex mx-3 flex-col lg:w-full overflow-hidden rounded-lg border bg-white shadow-lg ">
                                        <a
                                            href="#"
                                            className="group relative block h-48 overflow-hidden bg-gray-100"
                                        >
                                            <img
                                                src={item.imageurl}
                                                loading="lazy"
                                                alt={item.title}
                                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                            />
                                        </a>

                                        <div className="flex flex-col p-4 ">
                                            <h2 className="text-xl font-bold text-gray-800 mb-2">
                                                <a
                                                    href="#"
                                                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                                                >
                                                    {item.title}
                                                </a>
                                            </h2>

                                            <div className="flex justify-between items-center gap-2 mb-4">
                                                <p className=" text-gray-500 flex items-center">
                                                    {" "}
                                                    <FaMapMarkerAlt className="mr-2 text-green-500" />
                                                    {item.city}
                                                </p>

                                                <div className="w-1/2 flex items-center">
                                                    <div className="flex gap-1">
                                                        {/* You can replace this with actual star ratings if needed */}
                                                        {[...Array(5)].map((_, index) => (
                                                            <svg
                                                                key={index}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="h-4 w-4 text-orange-600"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>{" "}
                                                    {item.review}
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="mt-3 flex justify-between items-center">
                                                <div>
                                                    <span className="text-gray-500">From:</span>
                                                    <span className="text-lg font-bold text-gray-800"> {item.price}</span>
                                                    <span className="text-gray-500">/night</span>
                                                </div>
                                                <div>
                                                    <a
                                                        href="/hotel"
                                                        className="bg-red-500 text-white font-semibold py-1 px-2 pb-2 rounded-lg text-center hover:bg-red-600 transition duration-300"
                                                    >
                                                        Book Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
    )
}

export default HotelPackage