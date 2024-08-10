import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

import logoDark from "../assets/images/logo-dark.png"
import logoLight from "../assets/images/logo-light.png"
import logoWhite from "../assets/images/logo-white.png"
import userImg from '../assets/images/client/16.jpg'

import { FiSearch, FiUser, FiHelpCircle, FiSettings, FiLogOut } from '../assets/icons/vander'

export default function Navbar({ navclass, navlight, manuclass }) {
    let [scrolling, setScrolling] = useState(false);
    let [isToggle, setToggle] = useState(false);
    let [manu, setManu] = useState('');
    let [subManu, setSubManu] = useState('');
    let [isOpen, setIsOpen] = useState(false);
    let [userManu, setUserManu] = useState(false);

    let dropdownRef = useRef(null);
    let userRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const userOutsideClick = (e) => {
            if (userRef.current && !userRef.current.contains(e.target)) {
                setUserManu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('click', userOutsideClick);

        let current = window.location.pathname
        setManu(current)
        setSubManu(current)
        window.scrollTo(0, 0);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleOutsideClick);
            window.removeEventListener('click', userOutsideClick);
        };
    }, [])

    const toggleMenu = () => {
        setToggle(!isToggle)
    }

    return (
        <nav id="topnav" className={`${navclass} ${scrolling ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                {navlight && (
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logoDark} className="h-7 l-dark" alt="" />
                            <img src={logoLight} className="h-7 l-light" alt="" />
                        </span>
                        <img src={logoWhite} className="hidden dark:inline-block" alt="" />
                    </Link>
                )}
                {!navlight && (
                    <Link className="logo" to="/">
                        <div>
                            <img src={logoDark} className="h-7 inline-block dark:hidden" alt="" />
                            <img src={logoWhite} className="h-7 hidden dark:inline-block" alt="" />
                        </div>
                    </Link>
                )}

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isToggle ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-none mb-0 space-x-1">
                    {navlight === true ? (
                        <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                            <button className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={() => setIsOpen(!isOpen)}>
                                <FiSearch className="size-5 dark-icon"></FiSearch>
                                <FiSearch className="size-5 white-icon text-white"></FiSearch>
                            </button>
                            {isOpen && (
                                <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                    <div className="relative">
                                        <FiSearch className="size-4 absolute top-[9px] end-3"></FiSearch>
                                        <input type="text" className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..." />
                                    </div>
                                </div>
                            )}
                        </li>
                    ) : (

                        <li className="dropdown inline-block relative pe-1" ref={dropdownRef}>
                            <button className="dropdown-toggle align-middle inline-flex search-dropdown" type="button" onClick={() => setIsOpen(!isOpen)}>
                                <FiSearch className="size-5"></FiSearch>
                            </button>
                            {isOpen && (
                                <div className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800">
                                    <div className="relative">
                                        <FiSearch className="size-4 absolute top-[9px] end-3"></FiSearch>
                                        <input type="text" className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none bg-white dark:bg-slate-900" name="s" id="searchItem" placeholder="Search..." />
                                    </div>
                                </div>
                            )}
                        </li>
                    )}


                    <li className="dropdown inline-block relative ps-0.5" ref={userRef}>
                        <button className="dropdown-toggle items-center" type="button" onClick={() => setUserManu(!userManu)}>
                            <span className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-red-500 bg-red-500 text-white"><img src={userImg} className="rounded-md" alt="" /></span>
                        </button>
                        {userManu && (
                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 ">
                                <ul className="py-2 text-start">
                                    <li>
                                        <Link to="/user-profile" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiUser className="size-4 me-2"></FiUser>Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/helpcenter" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiHelpCircle className="size-4 me-2"></FiHelpCircle>Helpcenter</Link>
                                    </li>
                                    <li>
                                        <Link to="/user-setting" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiSettings className="size-4 me-2"></FiSettings>Settings</Link>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                    <li>
                                        <Link to="/login" className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-red-500 dark:hover:text-white"><FiLogOut className="size-4 me-2"></FiLogOut>Logout</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>

                <div id="navigation" style={{ display: isToggle === true ? 'block' : 'none' }}>
                    <ul className={`navigation-menu ${manuclass}`}>
                        <li className={`has-submenu parent-menu-item ${['/', '/index-two', '/index-three', '/index-four', '/index-five', '/index-item'].includes(manu) ? 'active' : ''}`}>
                            <Link to="/" onClick={() => setSubManu(setManu === '/index-item' ? '' : '/index-item')}>Hero</Link>
                            
                            {/* <span className="menu-arrow"></span> */}
                            {/* <ul className={`submenu ${['/', '/index-two', '/index-three', '/index-four', '/index-five', '/index-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`${manu === '/' ? 'active' : ''}`}><Link to="/" className="sub-menu-item">Tour One</Link></li>
                                <li className={`${manu === '/index-two' ? 'active' : ''}`}><Link to="/index-two" className="sub-menu-item">Tour Two</Link></li>
                                <li className={`${manu === '/index-three' ? 'active' : ''}`}><Link to="/index-three" className="sub-menu-item">Tour Three</Link></li>
                                <li className={`${manu === '/index-four' ? 'active' : ''}`}><Link to="/index-four" className="sub-menu-item">Tour Four</Link></li>
                                <li className={`${manu === '/index-five' ? 'active' : ''}`}><Link to="/index-five" className="sub-menu-item">Tour Five</Link></li>
                            </ul> */}
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/grid', '/grid-left-sidebar', '/grid-right-sidebar', '/list', '/list-left-sidebar', '/list-right-sidebar', '/tour-detail-one', '/tour-detail-two', '/listing-item', '/grid-item', '/list-item', '/detail-item'].includes(manu) ? 'active' : ''}`}><Link to="" onClick={() => setSubManu(subManu === '/listing-item' ? '' : '/listing-item')}> Our Tour </Link>
                        {/* <span className="menu-arrow"></span>
                            <ul className={`submenu ${['/grid', '/grid-left-sidebar', '/grid-right-sidebar', '/list', '/list-left-sidebar', '/list-right-sidebar', '/tour-detail-one', '/tour-detail-two', '/listing-item', '/grid-item', '/list-item', '/detail-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`has-submenu parent-menu-item ${['/grid', '/grid-left-sidebar', '/grid-right-sidebar', '/grid-item'].includes(manu) ? 'active' : ''}`}>
                                    <Link to="" onClick={() => setSubManu(subManu === '/grid-item' ? '' : '/grid-item')}>Tour Grid </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/grid', '/grid-left-sidebar', '/grid-right-sidebar', '/grid-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/grid' ? 'active' : ''}`}><Link to="/grid" className="sub-menu-item">Grid</Link></li>
                                        <li className={`${manu === '/grid-left-sidebar' ? 'active' : ''}`}><Link to="/grid-left-sidebar" className="sub-menu-item">Grid Left Sidebar</Link></li>
                                        <li className={`${manu === '/grid-right-sidebar' ? 'active' : ''}`}><Link to="/grid-right-sidebar" className="sub-menu-item">Grid Right Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${['/list-item', '/list', '/list-left-sidebar', '/list-right-sidebar'].includes(manu) ? 'active' : ''}`}>
                                    <Link to="" onClick={() => setSubManu(subManu === '/list-item' ? '' : '/list-item')}>Tour List </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/list-item', '/list', '/list-left-sidebar', '/list-right-sidebar'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/list' ? 'active' : ''}`}><Link to="/list" className="sub-menu-item">List</Link></li>
                                        <li className={`${manu === '/list-left-sidebar' ? 'active' : ''}`}><Link to="/list-left-sidebar" className="sub-menu-item">List Left Sidebar</Link></li>
                                        <li className={`${manu === '/list-right-sidebar' ? 'active' : ''}`}><Link to="/list-right-sidebar" className="sub-menu-item">List Right Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${['/detail-item', '/tour-detail-one', '/tour-detail-two'].includes(manu) ? 'active' : ''}`}>
                                    <Link to="" onClick={() => setSubManu(subManu === '/detail-item' ? '' : '/detail-item')}> Tour Detail </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/detail-item', '/tour-detail-one', '/tour-detail-two'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/tour-detail-one' ? 'active' : ''}`}><Link to="/tour-detail-one" className="sub-menu-item">Tour Detail One</Link></li>
                                        <li className={`${manu === '/tour-detail-two' ? 'active' : ''}`}><Link to="/tour-detail-two" className="sub-menu-item">Tour Detail Two</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                      

                        <li className={`has-submenu parent-parent-menu-item ${['/page-item', '/aboutus', '/user-item', '/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting', '/help-item', '/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support', '/auth-item', '/login', '/signup', '/forgot-password', '/lock-screen', '/utility-item', '/terms', '/privacy', '/special-item', '/comingsoon', '/maintenance', '/404'].includes(manu) ? 'active' : ''}`}>
                            <Link to="" onClick={() => setSubManu(subManu === '/page-item' ? '' : '/page-item')}>Our Hotels</Link>
                            {/* <span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item', '/aboutus', '/user-item', '/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting', '/help-item', '/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support', '/auth-item', '/login', '/signup', '/forgot-password', '/lock-screen', '/utility-item', '/terms', '/privacy', '/special-item', '/comingsoon', '/maintenance', '/404'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`${manu === '/aboutus' ? 'active' : ''}`}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>

                                <li className={`has-submenu parent-menu-item ${['/user-item', '/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting'].includes(manu) ? 'active' : ''}`}><Link to="" onClick={() => setSubManu(subManu === '/user-item' ? '' : '/user-item')}> My Account</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/user-item', '/user-profile', '/user-billing', '/user-payment', '/user-invoice', '/user-social', '/user-notification', '/user-setting'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/user-profile' ? 'active' : ''}`}><Link to="/user-profile" className="sub-menu-item">User Account</Link></li>
                                        <li className={`${manu === '/user-payment' ? 'active' : ''}`}><Link to="/user-payment" className="sub-menu-item">Payment</Link></li>
                                        <li className={`${manu === '/user-invoice' ? 'active' : ''}`}><Link to="/user-invoice" className="sub-menu-item">Invoice</Link></li>
                                        <li className={`${manu === '/user-social' ? 'active' : ''}`}><Link to="/user-social" className="sub-menu-item">Social</Link></li>
                                        <li className={`${manu === '/user-notification' ? 'active' : ''}`}><Link to="/user-notification" className="sub-menu-item">Notification</Link></li>
                                        <li className={`${manu === '/user-setting' ? 'active' : ''}`}><Link to="/user-setting" className="sub-menu-item">Setting</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${['/help-item', '/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support'].includes(manu) ? 'active' : ''}`}>
                                    <Link to="" onClick={() => setSubManu(subManu === '/help-item' ? '' : '/help-item')}>Helpcenter </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/help-item', '/helpcenter', '/helpcenter-faqs', '/helpcenter-guides', '/helpcenter-support'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/helpcenter' ? 'active' : ''}`}><Link to="/helpcenter" className="sub-menu-item">Overview</Link></li>
                                        <li className={`${manu === '/helpcenter-faqs' ? 'active' : ''}`}><Link to="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                        <li className={`${manu === '/helpcenter-guides' ? 'active' : ''}`}><Link to="/helpcenter-guides" className="sub-menu-item">Guides</Link></li>
                                        <li className={`${manu === '/helpcenter-support' ? 'active' : ''}`}><Link to="/helpcenter-support" className="sub-menu-item">Support</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${['/auth-item', '/login', '/signup', '/forgot-password', '/lock-screen'].includes(manu) ? 'active' : ''}`}><Link to="" onClick={() => setSubManu(subManu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item', '/login', '/signup', '/forgot-password', '/lock-screen'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link to="/login" className="sub-menu-item"> Login</Link></li>
                                        <li><Link to="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li><Link to="/forgot-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li><Link to="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${['/utility-item', '/terms', '/privacy'].includes(manu) ? 'active' : ''}`}><Link to="" onClick={() => setSubManu(subManu === '/utility-item' ? '' : '/utility-item')}> Utility </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/utility-item', '/terms', '/privacy'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={`${manu === '/terms' ? 'active' : ''}`}><Link to="/terms" className="sub-menu-item">Terms of Services</Link></li>
                                        <li className={`${manu === '/privacy' ? 'active' : ''}`}><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                                    </ul>
                                </li>

                                <li className={`has-submenu parent-menu-item ${['/special-item', '/comingsoon', '/maintenance', '/404'].includes(manu) ? 'active' : ''}`}><Link to="" onClick={() => setSubManu(subManu === '/special-item' ? '' : '/special-item')}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/special-item', '/comingsoon', '/maintenance', '/404'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link to="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li><Link to="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li><Link to="/404" className="sub-menu-item"> 404!</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>

                        <li className={`has-submenu parent-menu-item ${['/blogs', '/blog-standard', '/blog-detail', '/blog-item'].includes(manu) ? 'active' : ''}`}>
                            <Link to="/blog-standard" onClick={() => setSubManu(subManu === '/blog-item' ? '' : '/blog-item')}>Blogs </Link>
                            {/* <span className="menu-arrow"></span>
                            <ul className={`submenu ${['/blogs', '/blog-standard', '/blog-detail', '/blog-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`${manu === '/blogs' ? 'active' : ''}`}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                <li className={`${manu === '/blog-standard' ? 'active' : ''}`}><Link to="/blog-standard" className="sub-menu-item"> Blog Standard</Link></li>
                                <li className={`${manu === '/blog-detail' ? 'active' : ''}`}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                            </ul> */}
                        </li>

                        <li className={`${manu === '/contact' ? 'active' : ''}`}><Link to="/contact" className="sub-menu-item">Contact Us</Link></li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}