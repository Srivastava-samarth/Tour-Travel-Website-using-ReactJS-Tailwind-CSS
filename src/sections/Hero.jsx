import { useState, useEffect } from 'react';
import image1 from '../assets/images/img1.jpg';
import image2 from '../assets/images/img2.jpg';
import image3 from '../assets/images/img3.jpg';
import image4 from '../assets/images/img4.jpg';
import image5 from '../assets/images/img5.jpg';

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  const handleImageClick = index => {
    setCurrentImageIndex(index);
  };

  return (
    <div id='home' className="min-h-screen flex items-center justify-center text-black drop-shadow-md">
      {/* Image carousel section */}
      <div className="flex flex-col items-center lg:bg-slate-700">
        <div className="w-full">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-full object-cover duration-1000 ease lg:bg-slate-700 lg:opacity-60"
          />
          {/* Render dots conditionally */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4 lg:hidden">
            {window.innerWidth > 1000  && images.map((image, index) => (
              <div
                key={index}
                className={`image-circle w-4 h-4 rounded-full bg-gray-200 ${
                  index === currentImageIndex ? 'bg-blue-500' : ''
                }`}
                onClick={() => handleImageClick(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="w-full px-5 pt-10 lg:px-40 lg:absolute lg:inset-0 relative lg:order-2 flex flex-col items-center justify-center">
          <div className=" text-center ">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] lg:items-center font-bold text-orange-400 mb-4">World Tour</h1>
            <p className="text-sm sm:text-base lg:text-2xl font-semibold text-black lg:text-white lg:font-bold w-[100%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, nostrum ipsa tempore dicta modi natus eligendi illum voluptatem. Officia, consequatur cum obcaecati accusantium harum tempore unde pariatur ex. Nulla officia animi voluptates vitae nihil, soluta consequuntur accusamus maxime dolorem autem nostrum recusandae incidunt rem, ducimus cumque explicabo. Libero provident itaque officia consectetur maxime! Labore reiciendis doloremque doloribus fuga
            </p>
            <button className="text-xs sm:text-sm lg:text-base bg-orange-300 text-black px-8 py-4 rounded-full mt-4 font-semibold hover:bg-orange-400 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
