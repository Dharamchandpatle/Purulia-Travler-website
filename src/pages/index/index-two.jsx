import React from "react";
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import About from "../../components/about";
import Client from "../../components/client";
import Blogs from "../../components/blogs";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import bg2 from '../../assets/images/bg/2.jpg'
import bg3 from '../../assets/images/bg/3.jpg'
import map from '../../assets/images/map-plane.png'

import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { packages } from "../../data/data";

import {FiMapPin} from '../../assets/icons/vander'

export default function IndexTwo(){
    return(
        <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light"/>

        <section className="swiper-slider-hero relative block h-screen" id="home">
            <div className="swiper-container absolute end-0 top-0 w-full h-full">
                <Swiper className="swiper-wrapper" loop={true} speed={2000} autoplay={{delay:6500}} effect="flip" modules={[Autoplay,EffectFade ]}>
                    <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center" style={{backgroundImage:`url(${bg2})`}}>
                            <div className="absolute inset-0 bg-black/70"></div>
                            <div className="container relative">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <img src={map} className="mx-auto w-[300px]" alt=""/>
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Find Your Best <br/> Travels Package</h1>
                                        <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                                        
                                        <div className="mt-6">
                                            <Link to="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 

                    <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center" style={{backgroundImage:`url(${bg3})`}}>
                            <div className="absolute inset-0 bg-black/70"></div>
                            <div className="container relative">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <img src={map} className="mx-auto w-[300px]" alt=""/>
                                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Find Next Best <br/> Place To Visit</h1>
                                        <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                                        
                                        <div className="mt-6">
                                            <Link to="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> 
                </Swiper>
            </div>
        </section>

        <section className="relative py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <Form/>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16 overflow-hidden">
            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
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
            </div>

            <Client/>

            <Blogs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}