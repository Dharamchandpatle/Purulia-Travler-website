import React, { useState } from "react";

export default function Filter(){
    let [minValue, setMinValue] = useState(50)
    let [maxValue, setMaxValue] = useState(200)

    const changeMinValue = (e) =>{
        setMinValue(e.target.value);
    }

    const changeMaxValue = (e) =>{
        setMaxValue(e.target.value);
    }

    return(
        <div className="lg:col-span-4 md:col-span-5">
            <div className="p-4 rounded-md shadow dark:shadow-gray-700 sticky top-20">
                <div>
                    <h5 className="text-lg font-medium">Price Filter</h5>

                    <div className="range-slider mt-3">
                        <span className="flex justify-between pb-2">
                            <span>
                                <label htmlFor="" className="text-lg">$</label>
                                <input type="number" className="text-slate-400" value={minValue} min={0} max={500} onChange={(e)=>changeMinValue(e)}/>
                            </span>

                            <span>
                                <label htmlFor="" className="text-lg">$</label>
                                <input type="number" className="text-slate-400" value={maxValue} min={0} max={500} onChange={(e)=>changeMaxValue(e)}/>
                            </span>
                        </span>
                        <input value={minValue} min={0} max={500} step="5" type="range" onChange={(e)=>changeMinValue(e)}/>
                        <input value={maxValue} min={0} max={500} step="5" type="range" onChange={(e)=>changeMaxValue(e)}/>
                    </div>
                </div>

                <div className="mt-6">
                    <h5 className="text-lg font-medium">Reviews</h5>

                    <div className="mt-3">
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="5star"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="5star">
                                <ul className="font-medium list-none space-x-1">
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                </ul>
                            </label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="4star"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="4star">
                                <ul className="font-medium list-none space-x-1">
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                </ul>
                            </label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="3star"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="3star">
                                <ul className="font-medium list-none space-x-1">
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                </ul>
                            </label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="2star"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="2star">
                                <ul className="font-medium list-none space-x-1">
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                </ul>
                            </label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="1star"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="1star">
                                <ul className="font-medium list-none space-x-1">
                                    <li className="inline"><i className="mdi mdi-star text-amber-400 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                    <li className="inline"><i className="mdi mdi-star-outline text-slate-200 dark:text-gray-700 align-middle"></i></li>
                                </ul>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h5 className="text-lg font-medium">Booking Activity</h5>

                    <div className="mt-3">
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Bali"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="Bali">Bali Park</label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Paris"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="Paris">Paris</label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Arcadia"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="Arcadia">Arcadia</label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Culver"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="Culver">Culver City</label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="Long"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="Long">Long Beach</label>
                        </div>
                        <div className="flex items-center mb-0">
                            <input className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="California"/>
                            <label className="form-checkbox-label text-slate-400" htmlFor="California">California</label>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <h5 className="text-lg font-medium">Tour Map</h5>

                    <div className="mt-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} title="travosys" className="w-full h-[300px] rounded-full" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}