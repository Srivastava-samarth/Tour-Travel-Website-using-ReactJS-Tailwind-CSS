import { useState, useEffect } from 'react';
import image1 from '../assets/images/tour-img01.jpg';
import image2 from '../assets/images/tour-img02.jpg';
import image3 from '../assets/images/tour-img03.jpg';
import image4 from '../assets/images/tour-img05.jpg';
import image5 from '../assets/images/tour-img04.jpg';

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3, image4, image5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  const handleImageClick = index => {
    setCurrentImageIndex(index);
  };

  return (
    <div id='about-us' className="h-screen flex flex-col-reverse lg:flex-row items-center justify-evenly text-black gap-12 px-4 lg:px-0">
      <div className="flex flex-col items-start justify-center lg:w-[40%] mt-[-70px]">
        <p className="text-lg text-orange-300 lg:text-2xl">Why Choose us!</p>
        <h1 className="text-3xl mb-4 lg:text-4xl">Natures Majesty awaits you</h1>
        <p className="mb-4 text-sm lg:text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur doloremque
          asperiores maxime aspernatur ratione? Eum provident atque deserunt facere fugiat sed velit
          voluptatibus nisi eius odit perferendis commodi minus magnam placeat nesciunt aspernatur
          ut esse numquam ullam, dicta amet autem quidem, ratione magni. Vel totam vero alias a
          illum aspernatur quod ad tenetur voluptatum incidunt maiores
        </p>
        <button className="text-xs sm:text-sm lg:text-base bg-orange-400 text-white px-6 py-3 rounded-full mt-4 font-semibold hover:bg-orange-400 transition duration-300">
            Read More
          </button>
      </div>
      <div className="w-full max-w-lg lg:w-[60%] shadow-lg rounded-lg overflow-hidden relative">
        <div className="image-carousel relative">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className="w-full"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  (index === currentImageIndex) ? 'bg-blue-500' : 'bg-black'
                }`}
                onClick={() => handleImageClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
