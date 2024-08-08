import React from "react";
import { Link } from "react-router-dom";
import { helpAbout } from "../data/data";

export default function HelpcenterAbout(){
    return(
        <>
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Find The Help You Need</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6">
                {helpAbout.map((item,index)=>{
                    let Icon = item.icon
                    return(
                        <div className="text-center px-6 mt-6" key={index}>
                            <div className="w-20 h-20 bg-red-500/5 text-red-500 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                                <Icon className="size-[30px]"></Icon>
                            </div>

                            <div className="content mt-7">
                                <Link to={item.link} className="h5 text-lg font-medium hover:text-red-500">{item.title}</Link>
                                <p className="text-slate-400 mt-3">{item.desc}</p>
                                
                                <div className="mt-5">
                                    <Link to={item.link} className="text-red-500">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}