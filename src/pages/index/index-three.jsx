import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import Footer from '../../components/footer'
import Client from "../../components/client";
import About from "../../components/about";
import Switcher from '../../components/switcher';

import { Swiper, SwiperSlide, } from 'swiper/react';
import {Autoplay,EffectFade  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

import { packages, placeImage, topDestination } from "../../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiInstagram, FiMapPin} from '../../assets/icons/vander'

export default function IndexThree(){
    let [isOpen, setisOpen] = useState(false);
    let [currentImageIndex, setCurrentImageIndex] = useState(0);

    let handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + placeImage.length - 1) % placeImage.length);
    };

    let handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % placeImage.length);
    };
    let currentImage = placeImage[currentImageIndex];

    let handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    const settings = {
        container: '.tiny-twelve-item',
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
                items: 12
            },

            992: {
                items: 8
            },

            767: {
                items: 6
            },

            575: {
                items: 5
            },

            420: {
                items: 3
            },

            320: {
                items: 2
            },
        },
      };
    return(
        <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light"/>
        <Swiper className="swiper-wrapper" loop={true} speed={2000} autoplay={{delay:4000}} effect="fade" modules={[Autoplay,EffectFade ]}>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('../../assets/images/bg/4.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('../../assets/images/bg/5.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('../../assets/images/bg/6.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                        </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
                    {topDestination.map((item,index)=>{
                        return(
                            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800" key={index}>
                                <img src={item.image} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                                <div className="absolute inset-0 bg-gradient-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                <div className="absolute p-4 bottom-0 start-0">
                                    <Link to="" className="text-lg font-medium text-white hover:text-red-500 duration-500 ease-in-out">{item.place}</Link>
                                    <p className="text-white/70 group-hover:text-white text-sm duration-500">{item.hotels}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.map((item,index)=>{
                        return(
                            <div className="group rounded-md shadow dark:shadow-gray-700" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 mx-2 mt-2">
                                    <img src={item.image} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                                    {item.tagText && (
                                        <div className="absolute top-0 start-0 p-4">
                                            <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                        </div>
                                    )}

                                    <div className="absolute top-0 end-0 p-4">
                                        <Link to="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-500 dark:focus:text-red-500 hover:text-red-500 dark:hover:text-red-500"><i className="mdi mdi-heart text-[20px] align-middle"></i></Link>
                                    </div>
                                </div>

                                <div className="p-3">
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
                                    
                                    <div className="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 className="text-lg font-medium text-red-500">{item.amount}</h5>

                                        <Link to="" className="text-slate-400 hover:text-red-500">Explore Now <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Client/>
        </section>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">
                    <TinySlider settings={settings}>
                        {placeImage.map((item,index)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <Link to="" onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                        <img src={item} className="sm:size-40 object-cover" alt=""/>
                                    </Link>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={placeImage[(currentImageIndex + placeImage.length - 1) % placeImage.length]}
                        nextSrc={placeImage[(currentImageIndex + 1) % placeImage.length]}

                        onCloseRequest={() => setisOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

                <div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center">
                    <Link to="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><FiInstagram className="size-4"></FiInstagram></Link>
                </div>
            </div>
        </div>
        <Footer/>
        <Switcher/>
        </>
    )
}