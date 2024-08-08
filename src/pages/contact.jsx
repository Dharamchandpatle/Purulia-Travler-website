import React, { useState } from "react";
import { Link } from "react-router-dom";

import travel from '../assets/images/travel-train-station.svg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import {FiPhone, FiMail,FiMapPin, FiX} from '../assets/icons/vander'

export default function Contact(){
    let [modal, setModal] = useState(false)
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="justify-end"/>
        <div className="container-fluid relative mt-20">
            <div className="grid grid-cols-1">
                <div className="w-full leading-[0] border-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} title="travosy" className="w-full h-[500px]"></iframe>
                </div>
            </div>
        </div>
        <section className="relative lg:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={travel} className="w-full max-w-[500px] mx-auto" alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                                <h3 className="mb-6 text-2xl leading-normal font-semibold">Get in touch !</h3>

                                <form>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                        <div className="lg:col-span-6">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :" required/>
                                        </div>
        
                                        <div className="lg:col-span-6">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :" required/>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Subject :" required/>
                                        </div>
    
                                        <div className="lg:col-span-12">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md mt-2">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                <FiPhone></FiPhone>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Phone</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <Link to="tel:+152534-468-854" className="text-red-500 font-medium">+152 534-468-854</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                <FiMail></FiMail>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Email</h5>
                            <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                            
                            <div className="mt-5">
                                <Link to="mailto:contact@example.com" className="text-red-500 font-medium">contact@example.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-red-500/5 text-red-500 rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-sm dark:shadow-gray-800">
                                <FiMapPin></FiMapPin>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Location</h5>
                            <p className="text-slate-400 mt-3">C/54 Northwest Freeway, Suite 558, <br/> Houston, USA 485</p>
                            
                            <div className="mt-5">
                                <Link to="#" onClick={()=>setModal(!modal)} className="video-play-icon read-more lightbox text-red-500 font-medium">View on Google map</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        {modal && (
            <div className="w-full h-screen bg-slate-900/80 fixed top-0 left-0 bottom-0 right-0 z-999 flex items-center justify-center">
                <div className="w-full h-full px-5 md:px-40 md-py-20 py-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55431.05581015953!2d-95.461302!3d29.735948000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c36647a52ab1%3A0x70a301678672cb!2sBriargrove%20Park%2C%20Houston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1710322657489!5m2!1sen!2sin" width="100%" height="100%" title="myfram" loading="lazy"></iframe>
                </div>
                <button className="text-slate-400 absolute top-[20px] right-[20px]" onClick={()=>setModal(!modal)}>
                    <FiX className="size-5"></FiX>
                </button>
            </div>
        )}
        </>
    )
}