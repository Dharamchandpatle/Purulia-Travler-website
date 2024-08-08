import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import  Footer from "../../components/footer"
import Switcher from  "../../components/switcher"
import TopDestinationTwo from '../../components/top-destination-two';
import Client from '../../components/client';

import faqImg from "../../assets/images/bg/6.jpg"

import {FiVideo, FiSearch, FiCalendar, FiUsers,FiMapPin,FiChevronDown} from '../../assets/icons/vander'

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

import { faqData, packages } from '../../data/data';

export default function IndexFour(){
    let [isOpen, setOpen] = useState(false);
    let [activeIndex, setActiveIndex] = useState(1)
    return(
        <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end nav-light"/>
        <section className="relative py-36 bg-[url('../../assets/images/bg/6.jpg')] bg-cover jarallax" data-jarallax data-speed="0.5">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-6">
                    <div className="lg:col-span-7">
                        <h5 className="text-3xl font-dancing text-white">Find Your Ideal Stay</h5>
                        <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Where Do You <br/> Want To Go?</h4>
                        <p className="text-white/70 text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>

                        <div className="mt-6">
                            <Link to="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">View Packages</Link>
                            <Link to="#!" onClick={() => setOpen(true)} className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-red-500 bg-red-500 text-white ms-1 lightbox"><FiVideo className="h-4 w-4"></FiVideo></Link><span className="font-semibold ms-1 align-middle"></span>
                        </div>
                        <ModalVideo channel="youtube" youtube={{ mute: 0, autoplay: 0 }} isOpen={isOpen} videoId="S_CGed6E610" onClose={() => setOpen(false)}/>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 p-6 z-10 relative lg:ms-10">
                            <h4 className="mb-5 text-2xl font-semibold">Search Your Destinations</h4>

                            <form>
                                <div className="grid grid-cols-1 gap-3">
                                    <div>
                                        <label className="form-label font-medium text-slate-900 dark:text-white">Search:</label>
                                        <div className="relative mt-2">
                                            <FiSearch className="size-[18px] absolute top-[10px] start-3"></FiSearch>
                                            <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Search"/>
                                        </div>
                                    </div>
        
                                    <div>
                                        <label className="form-label font-medium text-slate-900 dark:text-white">Select Your Date:</label>
                                        <div className="relative mt-2">
                                            <FiCalendar className="size-[18px] absolute top-[10px] start-3"></FiCalendar>
                                            <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start" placeholder="Select Your Date"/>
                                        </div>
                                    </div>
        
                                    <div>
                                        <label className="form-label font-medium text-slate-900 dark:text-white">Select Your Date:</label>
                                        <div className="relative mt-2">
                                            <FiCalendar className="size-[18px] absolute top-[10px] start-3"></FiCalendar>
                                            <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 end" placeholder="Select Your Date"/>
                                        </div>
                                    </div>
        
                                    <div>
                                        <label className="form-label font-medium text-slate-900 dark:text-white">No. of Person:</label>
                                        <div className="relative mt-2">
                                            <FiUsers className="size-[18px] absolute top-[10px] start-3"></FiUsers>
                                            <select className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                                <option disabled defaultValue>No. of person</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
        
                                    <div className="">
                                        <input type="submit" id="search-buy" name="search" className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full cursor-pointer" value="Search"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="relative">
            <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
                <Link to="#"><i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-12 w-12 mx-auto shadow-md dark:shadow-gray-800"></i></Link>
            </div>

            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <TopDestinationTwo/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.slice(0,8).map((item,index)=>{
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
                                        <ul className="text-lg font-medium text-amber-400 list-none ms-2">
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

                <div className="mt-6 text-center">
                    <Link to="/grid-right-sidebar" className="text-slate-400 hover:text-red-500 inline-block">See More Tours <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </div>
            </div>

            <Client/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-6 gap-6">
                    <div className="md:col-span-6">
                        <img src={faqImg} className="w-full h-[540px] object-cover rounded-md shadow dark:shadow-gray-800" alt=""/>
                    </div>

                    <div className="md:col-span-6">
                        <div>
                            {faqData.map((item,index)=>{
                                return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''}`} onClick={()=>setActiveIndex(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronDown className={`w-4 h-4 shrink-0 ${activeIndex === item.id ? 'rotate-180' : ''}`}></FiChevronDown>
                                            </button>
                                        </h2>
                                        <div className={activeIndex === item.id ? "" : "hidden" }>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}