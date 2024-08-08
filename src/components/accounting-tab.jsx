import React from "react";
import { Link } from "react-router-dom";

import clientImg from "../assets/images/client/16.jpg"

import {FiAirplay, FiCreditCard, FiFileText, FiShare2, FiBell, FiSettings,FiLogOut} from '../assets/icons/vander'

export default function AccountingTab(){
    let current = window.location.pathname
    let loadFile =(e)=>{
        var image = document.getElementById(e.target.name);
        image.src = URL.createObjectURL(e.target.files[0]);
    }
    return(
        <div className="lg:w-1/4 md:w-1/3 md:px-3">
            <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                    <div className="profile-pic text-center mb-5">
                        <input id="pro-img" name="profile-image" type="file" className="hidden" onChange={(e)=>loadFile(e)} />
                        <div>
                            <div className="relative h-28 w-28 mx-auto">
                                <img src={clientImg} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt=""/>
                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                            </div>

                            <div className="mt-4">
                                <h5 className="text-lg font-semibold">Jesus Zamora</h5>
                                <p className="text-slate-400">jesus@hotmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-700">
                        <ul className="list-none sidebar-nav mb-0 pb-0" id="navmenu-nav">
                            <li className={`navbar-item account-menu ${current === '/user-profile' ? 'active' : ''}`}>
                                <Link to="/user-profile" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiAirplay className="size-4"></FiAirplay></span>
                                    <h6 className="mb-0 font-medium">Profile</h6>
                                </Link>
                            </li>

                            <li className={`navbar-item account-menu ${current === '/user-payment' ? 'active' : ''}`}>
                                <Link to="/user-payment" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiCreditCard className="size-4"></FiCreditCard></span>
                                    <h6 className="mb-0 font-medium">Payment</h6>
                                </Link>
                            </li>

                            <li className={`navbar-item account-menu ${current === '/user-invoice' ? 'active' : ''}`}>
                                <Link to="/user-invoice" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiFileText className="size-4"></FiFileText></span>
                                    <h6 className="mb-0 font-medium">Invoice</h6>
                                </Link>
                            </li>

                            <li className={`navbar-item account-menu ${current === '/user-social' ? 'active' : ''}`}>
                                <Link to="/user-social" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiShare2 className="size-4"></FiShare2></span>
                                    <h6 className="mb-0 font-medium">Social Profile</h6>
                                </Link>
                            </li>

                            <li className={`navbar-item account-menu ${current === '/user-notification' ? 'active' : ''}`}>
                                <Link to="/user-notification" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiBell className="size-4"></FiBell></span>
                                    <h6 className="mb-0 font-medium">Notifications</h6>
                                </Link>
                            </li>

                            <li className={`navbar-item account-menu ${current === '/user-setting' ? 'active' : ''}`}>
                                <Link to="/user-setting" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiSettings className="size-4"></FiSettings></span>
                                    <h6 className="mb-0 font-medium">Settings</h6>
                                </Link>
                            </li>

                            <li className={`navbar-item account-menu ${current === '/lock-screen' ? 'active' : ''}`}>
                                <Link to="/lock-screen" className="navbar-link text-slate-400 flex items-center py-2 rounded">
                                    <span className="me-2 mb-0"><FiLogOut className="size-4"></FiLogOut></span>
                                    <h6 className="mb-0 font-medium">Sign Out</h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}