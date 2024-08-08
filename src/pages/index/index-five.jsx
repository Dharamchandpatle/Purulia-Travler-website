import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Form from "../../components/form";
import TopDestinationOne from '../../components/top-destination-one'
import About from "../../components/about";
import Client from "../../components/client";
import Blogs from "../../components/blogs"
import Switcher from "../../components/switcher";
import Footer from "../../components/footer";

import {FiMapPin} from '../../assets/icons/vander'
import { packages } from "../../data/data";

export default function IndexFive(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="navigation-menu justify-end"/>

        <section className="relative table w-full pt-44 pb-56 bg-[url('../../assets/images/bg/7.png')] bg-bottom bg-cover" id="home">
            <div className="container relative">
                <div className="grid grid-cols-1 items-center my-10 gap-[30px]">
                    <div>
                        <h5 className="text-3xl font-dancing">Beauty of Discover</h5>
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Enjoy Your Dream <br/> Vacation</h4>
                        <p className="text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                    </div>
                </div>
                <Form/>
            </div>
        </section>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <TopDestinationOne/>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {packages.slice(0,8).map((item,index)=>{
                        return(
                            <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                <div className="md:flex md:items-center">
                                    <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                                        <img src={item.image} className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>
                                        {item.tagText && (
                                            <div className="absolute top-0 start-0 p-4">
                                                <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                            </div>
                                        )}
            
                                        <div className="absolute top-0 end-0 p-4">
                                            <Link to="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></Link>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 w-full">
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
                                            <h5 className="text-lg font-medium text-red-500">{item.amount}</h5>

                                            <Link to="" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}                    
                </div>

                <div className="mt-6 text-center">
                    <Link to="/grid-right-sidebar" className="text-slate-400 hover:text-red-500 inline-block">See More Tours <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </div>
            </div>

            <Client/>

            <Blogs/>
        </section>

        <Footer/>
        <Switcher/>
        </>
    )
}