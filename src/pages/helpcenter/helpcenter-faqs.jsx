import React, { useState } from "react";
import { Link } from "react-scroll";

import Navbar from "../../components/navbar";
import GetInTouch from "../../components/get-in-touch"
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import { faqData } from "../../data/data";

import {FiChevronUp} from '../../assets/icons/vander'

export default function HelpcenterFaqs(){
    let [activeIndex1, setActiveIndex1] = useState(1)
    let [activeIndex2, setActiveIndex2] = useState(1)
    let [activeIndex3, setActiveIndex3] = useState(1)
    let [activeIndex4, setActiveIndex4] = useState(1)
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>

        <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Frequently Asked Questions</h3>

                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Travosy</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">FAQs</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="rounded-md shadow dark:shadow-gray-800 p-6 sticky top-20">
                            <ul className="list-none sidebar-nav mb-0 py-0" id="navmenu-nav">
                                <li className="navbar-item p-0"><Link to="tech" spy={true} activeclassname="active" smooth={true} duration={500}  className="text-base font-medium navbar-link">Buying Questions</Link></li>
                                <li className="navbar-item mt-3 p-0"><Link to="general" spy={true} activeclassname="active" smooth={true} duration={500}  className="text-base font-medium navbar-link">General Questions</Link></li>
                                <li className="navbar-item mt-3 p-0"><Link to="payment" spy={true} activeclassname="active" smooth={true} duration={500}  className="text-base font-medium navbar-link">Payments Questions</Link></li>
                                <li className="navbar-item mt-3 p-0"><Link to="support" spy={true} activeclassname="active" smooth={true} duration={500}  className="text-base font-medium navbar-link">Support Questions</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="tech">
                            <h5 className="text-2xl font-semibold">Buying Product</h5>

                            <div className="mt-6">
                                {faqData.slice(0,4).map((item,index)=>{
                                    return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex1 === item.id ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''}`} onClick={()=>setActiveIndex1(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex1 === item.id ? '' : 'rotate-180' }`}></FiChevronUp>
                                            </button>
                                        </h2>
                                        <div class={activeIndex1 === item.id ? "" : "hidden"}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                
                            </div>
                        </div>

                        <div id="general" className="mt-8">
                            <h5 className="text-2xl font-semibold">General Questions</h5>

                            <div className="mt-6">
                                {faqData.slice(0,4).map((item,index)=>{
                                    return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex2 === item.id ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''}`} onClick={()=>setActiveIndex2(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex2 === item.id ? '' : 'rotate-180' }`}></FiChevronUp>
                                            </button>
                                        </h2>
                                        <div class={activeIndex2 === item.id ? "" : "hidden"}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                
                            </div>
                        </div>

                        <div id="payment" className="mt-8">
                            <h5 className="text-2xl font-semibold">Payments Questions</h5>

                            <div className="mt-6">
                                {faqData.slice(0,4).map((item,index)=>{
                                    return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex3 === item.id ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''}`} onClick={()=>setActiveIndex3(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex3 === item.id ? '' : 'rotate-180' }`}></FiChevronUp>
                                            </button>
                                        </h2>
                                        <div class={activeIndex3 === item.id ? "" : "hidden"}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                
                            </div>
                        </div>

                        <div id="support" className="mt-8">
                            <h5 className="text-2xl font-semibold">Support Questions</h5>

                            <div className="mt-6">
                                {faqData.slice(0,4).map((item,index)=>{
                                    return(
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex4 === item.id ? 'bg-gray-50 dark:bg-slate-800 text-red-500' : ''}`} onClick={()=>setActiveIndex4(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronUp className={`size-4 shrink-0 ${activeIndex4 === item.id ? '' : 'rotate-180' }`}></FiChevronUp>
                                            </button>
                                        </h2>
                                        <div class={activeIndex4 === item.id ? "" : "hidden"}>
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
            </div>

           <GetInTouch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}