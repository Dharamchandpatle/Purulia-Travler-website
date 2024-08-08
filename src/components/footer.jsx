import React from "react";
import { Link } from "react-router-dom";

import logoLight from '../assets/images/logo-light.png'

import { footerCompany, footerSocial } from "../data/data";
import {FiMapPin, FiMail, FiPhone} from '../assets/icons/vander'

export default function Footer(){
    return(
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <Link to="#" className="text-[22px] focus:outline-none">
                                        <img src={logoLight} alt=""/>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                                    <ul className="list-none mt-6 space-x-1">
                                        {footerSocial.map((item,index)=>{
                                            let Icon = item.icon
                                            return(

                                                <li className="inline" key={index}><Link to={item.link} target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:bg-red-500 hover:text-white text-slate-300"><Icon className="size-4 align-middle" title="Buy Now"></Icon></Link></li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <div className="lg:ms-8">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Office</h5>
                                        <h5 className="tracking-[1px] text-gray-100 mt-6">Travosy Tour & Travels</h5>

                                        <div className="flex mt-4">
                                            <FiMapPin className="size-4 text-red-500 me-2 mt-1"></FiMapPin>
                                            <div className="">
                                                <h6 className="text-gray-300">C/54 Northwest Freeway, <br/> Suite 558, <br/> Houston, USA 485</h6>
                                            </div>
                                        </div>

                                        <div className="flex mt-4">
                                            <FiMail className="size-4 text-red-500 me-2 mt-1"></FiMail>
                                            <div className="">
                                                <Link to="mailto:contact@example.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">contact@example.com</Link>
                                            </div>
                                        </div>
                        
                                        <div className="flex mt-4">
                                            <FiPhone className="size-4 text-red-500 me-2 mt-1"></FiPhone>
                                            <div className="">
                                                <Link to="tel:+152534-468-854" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">+152 534-468-854</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="lg:col-span-3 md:col-span-4">
                                    <div className="lg:ms-8">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {footerCompany.map((item,index)=>{
                                                return(
                                                    <li className="mt-[10px] first:mt-0" key={index}><Link to={item.link} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> {item.name}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
    
                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="size-4 absolute top-3 start-4"></FiMail>
                                                    <input type="email" className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required=""/>
                                                </div>
                                            </div>
                                        
                                            <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Travosy. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}