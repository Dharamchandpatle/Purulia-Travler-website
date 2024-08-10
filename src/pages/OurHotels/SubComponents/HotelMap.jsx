import React from "react";

const HotelMap = () => {
  return (
    <>
      <div className="bg-white py-8">
        <div className="mx-auto">
          <div className="rounded-lg border">

            <div className="relative w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.125836018797!2d-122.40182648468142!3d37.7914546797557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e3f4c2e3d%3A0x9e35e0d5d2642b9b!2s100%20Spear%20St%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sin!4v1647857457856!5m2!1sen!2sin"
                width="100%"
                height="290"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Embed"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMap;
