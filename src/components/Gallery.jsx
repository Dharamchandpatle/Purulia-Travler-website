import React, { useState } from "react";
import { Link } from "react-router-dom";

import image1 from '../../src/assets/images/listing/1.jpg'
import image2 from '../../src/assets/images/listing/2.jpg'
import image3 from '../../src/assets/images/listing/3.jpg'
import image4 from '../../src/assets/images/listing/4.jpg'
import image5 from '../../src/assets/images/listing/5.jpg'

import {FiCamera, FiChevronUp, FiMapPin} from '../../src/assets/icons/vander'

import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { faqData, tourDetailAbout } from "../../src/data/data";


const Gallery = () => {
    let [activeTab, setActiveTab] = useState(1)

    let images = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];
    let [photoIndex, setActiveIndex] = useState(0);
    let [isOpen, setOpen] = useState(false);


    let handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }
  return (
    <div> <section className="relative md:pb-16 lg:px-2 pb-16 mt-20">
    <div className="container-fluid relative">
        <div className="md:flex mt-4">
            <div className="lg:w-1/2 md:w-1/2 p-1">
                <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                    <img src={image1} alt=""/>
                    <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                        <Link to="#" onClick={()=>handleCLick(0)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 md:w-1/2">
                <div className="flex">
                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <img src={image2} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <Link to="#" onClick={()=>handleCLick(1)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <img src={image3} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <Link to="#" onClick={()=>handleCLick(2)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <img src={image4} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <Link to="#" onClick={()=>handleCLick(3)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 p-1">
                        <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
                            <img src={image5} alt=""/>
                            <div className="absolute inset-0 group-hover:bg-slate-900/70 duration-500 ease-in-out"></div>
                            <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 duration-500">
                                <Link to="#" onClick={()=>handleCLick(4)} className="inline-flex justify-center items-center size-9 bg-red-500 text-white rounded-full lightbox"><FiCamera className="size-4 align-middle"></FiCamera></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
</section>
</div>
  )
}

export default Gallery