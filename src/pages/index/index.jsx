import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from '../../components/form';
import TopDestinationOne from '../../components/top-destination-one';
import About from '../../components/about';
import Client from '../../components/client';
import Blogs from '../../components/blogs';
import Footer from '../../components/footer';
import Switcher from '../../components/switcher';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

import TourPackages from '../../components/Tour-Packages';
import HotelPackage from '../../components/HotelPackage';

export default function Index() {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Navbar navclass="defaultscroll is-sticky" navlight={false} manuclass="navigation-menu justify-end"/>

            <section className="relative table w-full pt-44 pb-56 bg-[url('../../assets/images/bg/7.png')] bg-bottom bg-cover" id="home">
            <div className="container relative">
                <div className="grid grid-cols-1 items-center my-10 gap-[30px]">
                    <div>
                        <h5 className="text-3xl font-dancing">Beauty of Discover</h5>
                        <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Enjoy Your Dream <br/> Vacation</h4>
                        <p className="text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                    </div>
                </div>
                <Form/>
            </div>
        </section>

           
            <section className="relative md:py-24 py-16 overflow-hidden">

                <TopDestinationOne />

                
                <TourPackages/>

                {/* <About /> */}

                {/* <Client /> */}
                <HotelPackage/>


                <Blogs />
            </section>
            <Footer />
            <Switcher />
        </>
    )
}