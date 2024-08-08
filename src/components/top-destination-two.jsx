import React from "react";
import { Link } from "react-router-dom";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { topDestination } from "../data/data";

export default function TopDestinationTwo(){
    const settings = {
        container: '.tiny-six-item',
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
                items: 6
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
    return(
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid grid-cols-1 relative mt-4">
                    <div className="tiny-six-item">
                    <TinySlider settings={settings}>
                        {topDestination.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="group text-center m-2">
                                        <div className="relative overflow-hidden rounded-full">
                                            <img src={item.image} className="w-full md:h-32 h-36 object-cover scale-125 group-hover:scale-100 duration-500 shadow dark:shadow-gray-800" alt=""/>
                                        </div>
        
                                        <div className="mt-2">
                                            <Link to="" className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{item.place}</Link>
                                            <p className="text-slate-400 text-sm duration-500">{item.hotels}</p>
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