import React from "react";
import Navbar from "../../components/navbar";
import HotelDetails from "./SubComponents/HotelDetails";
import HotelGallery from "./SubComponents/HotelGallery";
import Footer from "../../components/footer";
import HotelHeader from "./SubComponents/HotelHeader";
import HotelPackage from "../../components/HotelPackage";
import TopDestinationOne from "../../components/top-destination-one";
import FAQ from "./SubComponents/Faq";
import Gallery from "../../components/Gallery";
import ReviewsSection from "./SubComponents/Reviews";


const OurHotels = () => {
  return (
    <>
      <Navbar/>
      {/* <HotelHeader/> */}
      <Gallery/>
      <HotelDetails/>
      <HotelPackage/>
      <TopDestinationOne />
      <FAQ/>
      <ReviewsSection /> 
      <Footer/>
      

     
    </>
  );
};

export default OurHotels;