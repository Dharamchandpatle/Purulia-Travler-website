import React, { useState } from 'react';

import {FiUser, FiUsers} from "../assets/icons/vander"

import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

export default function DetailSidebar(){
      const [startDate, setStartDate] = useState(new Date());
    return(
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
                <div className='flex flex-col'>
                    <label className="font-semibold">Date:</label>
                    <DatePicker className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div className="mt-4">
                    <div className="md:flex">
                        <div className="md:w-1/3">
                            <span className="font-medium">Adult:</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                            <form>
                                <div className="form-icon relative">
                                    <FiUser className="w-4 h-4 absolute top-3 start-4"></FiUser>
                                    <input type="number" className="w-full ps-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="No. of person" id="Noperson" name="number" required=""/>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="md:flex mt-4">
                        <div className="md:w-1/3">
                            <span className="font-medium">Child:</span>
                        </div>

                        <div className="md:w-2/3 mt-4 md:mt-0">
                            <form>
                                <div className="form-icon relative">
                                    <FiUsers className="w-4 h-4 absolute top-3 start-4"></FiUsers>
                                    <input type="number" className="w-full ps-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="No. of children" id="Nochildren" name="number" required=""/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <button className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-red-500 text-white rounded-md w-full">Search Now</button>
                </div>

                <div className="mt-6">
                    <h5 className="text-lg font-medium">Tour Map</h5>

                    <div className="mt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} title="travosy" className="w-full h-[300px] rounded-full"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}