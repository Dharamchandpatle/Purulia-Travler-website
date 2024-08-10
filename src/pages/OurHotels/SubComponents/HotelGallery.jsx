import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Your gallery images and captions
const galleryImages = [
  {
    src: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Seasonal-outdoor-pool.png",
    caption: "Seasonal Pool",
  },
  {
    src: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-5.png",
    caption: "Feature",
  },
  {
    src: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Exterior-1.png",
    caption: "Exterior",
  },
  {
    src: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Breakfast-lunch-and-dinner-served-American-cuisine.png",
    caption: "Breakfast",
  },
  {
    src: "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Hypo-allergenic-bedding-in-room-safe-desk-laptop-workspace.png",
    caption: "Bedding",
  },
];

const HotelGallery = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => setLightboxIsOpen(false);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : galleryImages.length - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < galleryImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="p-2">
      <div className="container grid grid-cols-2 gap-3 mx-auto md:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`relative ${index === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full shadow-sm cursor-pointer rounded-md"
              onClick={() => openLightbox(index)}
            />
            <span className="absolute bottom-3 left-3 rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
              {image.caption}
            </span>
          </div>
        ))}
      </div>
      {lightboxIsOpen && (
        <Lightbox
          open={lightboxIsOpen}
          close={closeLightbox}
          slides={galleryImages.map((image) => ({
            src: image.src,
            alt: image.caption,
          }))}
          currentIndex={currentImageIndex}
          onClickPrev={goToPrevious}
          onClickNext={goToNext}
        />
      )}
    </section>
  );
};

export default HotelGallery;
