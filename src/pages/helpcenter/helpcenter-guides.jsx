import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import GetInTouch from "../../components/get-in-touch";
import Footer from "../../components/footer";
import Switcher from "../../components/switcher";

import { guidesData } from "../../data/data";

export default function HelpcenterGuides(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end nav-light"/>
        <section className="relative table w-full py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="text-4xl leading-normal tracking-wider font-semibold text-white">Guides & Support</h3>

                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Travosy</Link></li>
                   <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                   <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/helpcenter">Helpcenter</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Guides</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {guidesData.map((item,index)=>{
                        return(
                            <div className="" key={index}>
                                <h5 className="font-semibold text-xl">{item.title}</h5>
                                <ul className="list-none mt-4">
                                    {item.subData.map((el,index)=>{
                                        return(
                                            <li className="mt-2" key={index}><Link to="" className="text-slate-400"><i className="mdi mdi-arrow-right text-red-500 me-2"></i>{el}</Link></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

            <GetInTouch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}