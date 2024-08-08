import React from "react";
import { Link } from "react-router-dom";
import { blogSocial } from "../data/data";

import user from '../assets/images/client/05.jpg'

export default function BlogSidebar(){
    return(
        <>
        <div className="lg:col-span-4 md:col-span-6">
            <div className="sticky top-20">
                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                <div className="text-center mt-8">
                    <img src={user} className="h-20 w-20 mx-auto rounded-full shadow mb-4" alt=""/>

                    <Link to="" className="text-lg font-medium hover:text-red-500 transition-all duration-500 ease-in-out h5">Cristina Romsey</Link>
                    <p className="text-slate-400">Content Writer</p>
                </div>

                <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                <ul className="list-none text-center mt-8 space-x-0.5">
                    {blogSocial.map((item,index)=>{
                        let Icon = item
                        return(
                            <li className="inline" key={index}><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-red-500 hover:text-white hover:bg-red-500"><Icon className="size-4"></Icon></Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )
}