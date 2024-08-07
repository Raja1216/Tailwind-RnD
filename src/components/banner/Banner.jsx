import { useEffect, useState } from "react";
import "./Banner.css";



const Banner = () => {

  const carouselItems = [
    {
      image:
        "https://dynamic.brandcrowd.com/template/preview/design/aa4e7ebf-777e-45b8-b272-a0a5705c607c?v=4&designTemplateVersion=3&size=design-preview-standalone-1x",
      button: "Learn More",
    },
    {
      image:
        "https://img.freepik.com/free-photo/gaming-panoramic-banner-collage_23-2151349159.jpg",
      button: "Shop Now",
    },
    {
      image:
        "https://t4.ftcdn.net/jpg/03/70/34/37/360_F_370343704_F7vjbFeIDKalJGA23orWUEDsJlPVvQw1.jpg",
      button: "Get Started",
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % carouselItems.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (currentIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-r ">
     {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: index === currentIndex ? 10 : 1 // Ensure current slide is on top
          }}
        >
          <div className="relative flex items-end justify-center h-full pb-4 bg-opacity-70 ">
            <div className="relative z-20 inline-block p-1 rounded-lg bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-size-200 bg-pos-0 animate-gradient-border">
              <button className="z-30 px-4 py-2 font-bold text-white transition duration-300 ease-in-out rounded backdrop-blur-sm bg-white/30 hover:bg-white hover:text-indigo-800">
                {item.button}
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        className="absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center px-4 text-white bg-transparent bg-opacity-50"
        onClick={goToPrevious}
      >
        &#10094;
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 z-10 flex items-center justify-center px-4 text-white bg-transparent bg-opacity-50"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Banner;
