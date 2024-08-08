import React from "react";
import { Link } from "react-router-dom";

import {FiArrowLeft} from '../assets/icons/vander'

export default function BackToHome(){
    return(
        <div className="fixed bottom-3 end-3 z-10">
            <Link to="/" className="back-button size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-md"><FiArrowLeft className="size-4"></FiArrowLeft></Link>
        </div>
    )
}