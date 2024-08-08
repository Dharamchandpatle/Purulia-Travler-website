import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import { blogData } from "../../data/data";

import {FiClock, FiChevronRight, FiChevronLeft} from '../../assets/icons/vander'

export default function Blogs(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Blogs / News</h3>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Travosy</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {blogData.map((item,index)=>{
                        return(
                            <div className="group relative overflow-hidden" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                                    <img src={item.image} className="group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                                    <div className="absolute top-0 start-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                                        <span className="bg-red-500 text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tag}</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="flex mb-4">
                                        <span className="flex items-center text-slate-400 text-sm"><FiClock className="size-4 text-slate-900 dark:text-white me-1.5"></FiClock>5 min read</span>
                                        <span className="text-slate-400 text-sm ms-3">by <Link to="" className="text-slate-900 dark:text-white hover:text-red-500 dark:hover:text-red-500 font-medium">Travosy</Link></span>
                                    </div>

                                    <Link to={`/blog-detail/${item.id}`} className="text-lg font-medium hover:text-red-500 duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>

                                    <div className="mt-3">
                                        <Link to={`/blog-detail/${item.id}`} className="hover:text-red-500 inline-flex items-center">Read More <FiChevronRight className="size-4 ms-1"></FiChevronRight></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">
                                        <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronLeft>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-red-500 border border-red-500">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">5</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 hover:bg-red-500 dark:hover:bg-red-500">
                                        <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronRight>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        <Switcher/>

        </>
    )
}