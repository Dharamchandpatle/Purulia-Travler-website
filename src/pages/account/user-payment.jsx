import React, { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import AccountingTab from "../../components/accounting-tab";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import { paymentData } from "../../data/data";

import {FiTrash2} from '../../assets/icons/vander'

export default function UserPayment(){
    let [openModal, setOpenModal] = useState(false);
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="justify-end"/>

        <section className="relative lg:pb-24 pb-16 md:mt-[84px] mt-[70px]">
            <div className="md:container container-fluid relative">
                <div className="relative overflow-hidden md:rounded-md shadow dark:shadow-gray-800 h-52 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover"></div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="md:flex">
                    <AccountingTab/>

                    <div className="lg:w-3/4 md:w-2/3 md:px-3 mt-6 md:mt-0">
                        <div className="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                <h5 className="text-xl font-semibold">Payment Methods</h5>
                                <p className="text-slate-400 mt-2">Primary payment method is used by default</p>
                            </div>

                            <div className="px-6">
                                <ul>
                                    {paymentData.map((item,index)=>{
                                        return(
                                            <li className="flex justify-between items-center py-6 border-t border-gray-100 dark:border-gray-700 first:border-none" key={index}>
                                                <div className="flex items-center">
                                                    <img src={item.image} className="rounded shadow dark:shadow-gray-800 w-12" alt=""/>

                                                    <div className="ms-3">
                                                        <p className="font-semibold">{item.title}</p>
                                                        <p className="text-slate-400 text-sm">{item.date}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-600/5 hover:bg-red-600 text-red-600 hover:text-white rounded-full"><FiTrash2 className="size-4"></FiTrash2></Link>
                                                </div>
                                            </li>
                                        )
                                    })}

                                    <li className="py-6 border-t border-gray-100 dark:border-gray-700">
                                        <Link to="#" onClick={()=>setOpenModal(!openModal)} className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md">Add Payment Method</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Footer/>
        <Switcher/>
        {openModal && (
            <div className="rounded-md shadow dark:shadow-gray-800 bg-slate-900/75 text-slate-900 dark:text-white fixed w-full h-screen top-0 left-0 bottom-0 right-0 flex items-center justify-center z-999">
                <div className="relative w-full h-auto max-w-md inline-block bg-white dark:bg-slate-900">
                    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                        <h3 className="font-bold text-lg">Add Payment Method</h3>
                        <form>
                            <button className="size-6 flex justify-center items-center shadow dark:shadow-gray-800 rounded-md btn-ghost" onClick={()=>setOpenModal(!openModal)}>
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="size-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </form>
                    </div>
                    <div className="p-6 text-center">
                        <form>
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-4">
                                <div className="md:col-span-12">
                                    <div className="text-start">
                                        <label htmlFor="name" className="font-semibold">Your Name :</label>
                                        <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" required="" placeholder="Name :"/>
                                    </div>
                                </div>
                                <div className="lg:col-span-6">
                                    <div className="text-start">
                                        <label htmlFor="ex_month" className="form-label font-medium">Month :</label>
                                        <select id="ex_month" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                            <option>Jan</option>
                                            <option>Feb</option>
                                            <option>Mar</option>
                                            <option>Apr</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>Aug</option>
                                            <option>Sep</option>
                                            <option>Oct</option>
                                            <option>Nov</option>
                                            <option>Dec</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="lg:col-span-6">
                                    <div className="text-start">
                                        <label htmlFor="ex_year" className="form-label font-medium">Year :</label>
                                        <select id="ex_year" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="lg:col-span-6">
                                    <div className="text-start">
                                        <label htmlFor="name" className="font-semibold">Card no. :</label>
                                        <input name="number" id="card_number" type="number" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" required="" placeholder="number :"/>
                                    </div>
                                </div>
                                <div className="lg:col-span-6">
                                    <div className="text-start">
                                        <label htmlFor="name" className="font-semibold">CVV :</label>
                                        <input name="number" id="cvv_number" type="number" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" required="" placeholder="number :"/>
                                    </div>
                                </div>
                                <div className="md:col-span-12">
                                    <div className="text-start">
                                        <label htmlFor="card_names" className="form-label font-medium">Cards :</label>
                                        <select id="card_names" className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                            <option>Visa</option>
                                            <option>Ame. Express</option>
                                            <option>Master</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md justify-center flex items-center">Add Card</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}