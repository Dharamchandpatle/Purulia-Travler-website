import React from "react";
import { Link } from "react-router-dom";

import about from '../assets/images/about.jpg'
import map from '../assets/images/map-plane-big.png'

import {FiUsers,FiGlobe} from '../assets/icons/vander'

import CountUp from 'react-countup';

export default function About(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                <div className="md:col-span-5">
                    <div className="relative">
                        <img src={about} className="mx-auto rounded-3xl shadow dark:shadow-gray-700 w-[90%]" alt=""/>
                        

                        <div className="absolute flex items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                <FiUsers className="size-6"></FiUsers>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">Visitor</span>
                                <p className="text-xl font-bold"><CountUp className="counter-value" start={0} end={4589}/></p>
                            </div>
                        </div>

                        <div className="absolute flex items-center top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                            <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-red-500/5 text-red-500 text-center rounded-xl me-3">
                                <FiGlobe className="size-6"></FiGlobe>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">Travel Packages</span>
                                <p className="text-xl font-bold"><CountUp className="counter-value" start={0} end={50}/>+</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">World Best Travel <br/> Agency: Travosy</h3>

                        <p className="text-slate-400 max-w-xl mb-6">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Travosy network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>

                        <Link to="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link>
                    </div>
                </div>

                <div className="absolute bottom-0 start-1/3 -z-1">
                    <img src={map} className="lg:w-[600px] w-96" alt=""/>
                </div>
            </div>
        </div>
    )
}