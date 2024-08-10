import React from 'react';
import { Link } from "react-router-dom";
import { packages } from '../data/data';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { FiMapPin } from 'react-icons/fi';


const TourPackages = () => {

    const settings = {
        container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
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
        <div>
            <div className="container relative md:mt-24 my-11 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid grid-cols-0 overflow-hidden">
                    <div className="tiny-five-item">
                        <TinySlider settings={settings}>

                            {packages.map((item, index) => {
                                return (
                                    <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                        <div className="relative overflow-hidden rounded-t-md shadow dark:shadow-gray-700 mx-3 mt-3">
                                            <img src={item.image} className="w-full h-64 object-fit scale-125 group-hover:scale-100 duration-500" alt="" />
                                            {item.tagText && (
                                                <div className="absolute top-0 start-0 p-4">
                                                    <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                                </div>
                                            )}

                                            <div className="absolute top-0 end-0 p-4">
                                                <Link to="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-400 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></Link>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-red-500 size-4 me-1"></FiMapPin> {item.place}</p>
                                            <Link to={`/tour-detail-one/${item.id}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{item.title}</Link>

                                            <div className="flex items-center mt-2">
                                                <span className="text-slate-400">Rating:</span>
                                                <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                                    <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline"><i className="mdi mdi-star align-middle"></i></li>
                                                    <li className="inline text-black dark:text-white text-sm">5.0(30)</li>
                                                </ul>
                                            </div>

                                            <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                                <h5 className="text-lg font-medium text-red-500">$ 58 / Day</h5>

                                                <Link to="" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>

                </div>

                <div className="mt-6 text-center">
                    <Link to="/grid-right-sidebar" className="text-slate-400 hover:text-red-500 inline-block">See More Tours <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default TourPackages