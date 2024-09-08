'use client'
import React, { useState } from "react";

const Slider = () => {
    const banners = [
        {
            title: "Affordable Price For Car Servicing",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
        {
            title: "Affordable Price For Car Servicing",
            description:
                "There are many variations of passages of available, but the majority have suffered alteration in some form",
        },
    ];

    const [activeSlide, setActiveSlide] = useState(0);

 
    const handleNext = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === banners.length - 1 ? 0 : prevSlide + 1
        );
    };

    // Handles the previous slide logic
    const handlePrev = () => {
        setActiveSlide((prevSlide) =>
            prevSlide === 0 ? banners.length - 1 : prevSlide - 1
        );
    };

    return (
        <div className="w-full overflow-hidden my-40">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url('/images/banner/${index + 1}.jpg')`,
                        }}
                        className="w-full flex items-center h-[90vh] bg-top bg-no-repeat bg-cover flex-shrink-0"
                    >
                        <div className="flex flex-col justify-center space-y-10 ml-5 lg:ml-24 ">
                            <h1 className="text-white text-6xl w-full lg:w-2/5 font-extrabold lato">
                                {banner.title}
                            </h1>
                            <p className="text-white w-full lg:w-3/5 lato">
                                {banner.description}
                            </p>
                            <div className="flex gap-5">
                                <button className="lato bg-[#FF3811] border border-[#FF3811] text-xl text-white rounded-lg px-6 py-3 font-bold transition-transform duration-300 hover:scale-105">
                                    Discover More
                                </button>
                                <button className="lato border border-white text-xl text-white rounded-lg px-6 py-3 font-bold transition-transform duration-300 hover:bg-[#FF3811] hover:scale-105">
                                    Latest Project
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

         
            <div className="relative bottom-24 flex justify-end gap-4 p-5">
                <button
                    onClick={handlePrev}
                    className="bg-transparent border-2 border-[#FF3811] px-5 py-3 text-[#FF3811] rounded-full p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="bg-[#FF3811] text-white rounded-full px-5 py-3 flex justify-center items-center transition-transform duration-300 hover:scale-110"
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Slider;
