'use client'
import React, { useState, useEffect } from "react";
import { FiArrowUpRight } from 'react-icons/fi';

const AboutSlider = () => {
    const banners = [
        { title: "Boxing" },
        { title: "Cycling" },
        { title: "Workout" },
        { title: "Boxing" },
        { title: "Cycling" },
        { title: "Workout" },
        { title: "Cycling" },
        { title: "Workout" },
        { title: "Cycling" },
        { title: "Workout" },
        { title: "Cycling" },
        { title: "Workout4" },
        { title: "Cycling4" },
        { title: "Workout4" },
        { title: "Cycling4" },
        { title: "Workout" },

        
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);

    const totalSlides = banners.length;

 
    const calculateSlidesPerView = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth >= 1024) return 3; 
            if (window.innerWidth >= 768) return 2; 
            return 1; 
        }
    };

 
    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(calculateSlidesPerView());
        };

        window.addEventListener("resize", handleResize);

      
        setSlidesPerView(calculateSlidesPerView());

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleNext = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === totalSlides - slidesPerView
                ? 0
                : prevSlide + 1
        );
    };

    const handlePrev = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === 0
                ? totalSlides - slidesPerView
                : prevSlide - 1
        );
    };



    return (
        <div className="w-full mx-auto max-w-[1320px] overflow-hidden my-40">
            <div
                className="flex transition-transform duration-700"
                style={{
                    transform: `translateX(-${activeSlide * (100 / slidesPerView)}%)`,
                    gap: slidesPerView === 1? "0px" : "24px", 
                }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url('/images/banner/${index + 1}.png')`,
                        }}
                        className={`rounded-[4px] lg:w-[31.6%] md:w-[48%] w-[100%]  flex items-center h-80 bg-top bg-no-repeat bg-cover  flex-shrink-0`}
                    >
                  
                        <div className="w-full mx-[20px] rounded-[4px] bg-gradient-to-b relative top-28 duration-300 border-[1px] border-[#E67529] backdrop-blur-[5px] ease-in-out bg-[#FFFFFF1A] hover:bg-[#E67529] group">
                            <h1 className="text-white text-5xl flex uppercase justify-center py-1 pl-2 font-extrabold lato group-hover:text-white">
                                {banner.title}
                                <FiArrowUpRight className="text-[#E67529] ml-4 text-5xl font-extrabold transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="bg-transparent border-2 border-[#E67529] px-5 py-3 hover:bg-[#E67529] text-[#E67529] hover:text-white rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="hover:bg-[#E67529] hover:text-white text-[#E67529] border-[#E67529]  border-2 rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default AboutSlider;


