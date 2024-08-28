import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ slider }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    appendDots: dots => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2.5 h-2.5 bg-purple-700 rounded-full"></div>
    )
  };

  return (
    <div className="bg-black flex justify-center items-center md:py-8 md:mb-0 mb-4">
      <div className="w-full max-w-7xl lg:px-4">
        <Slider {...settings} className="flex gap-4 cursor-pointer">
          {
            slider.map((item,idx) => (
              <div key={idx} className="p-2">
                <div className="h-80 bg-black flex justify-center items-center">
                  <img
                    src={item}
                    alt="Slide 1"
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
