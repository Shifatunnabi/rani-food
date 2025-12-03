"use client";
import React, { useState, useEffect } from "react";

const HappyHourSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    
    "/assets/images/sliders/slide-2.jpg",
    "/assets/images/sliders/slide-3.jpg",
    "/assets/images/sliders/slide-4.jpg",
    "/assets/images/sliders/slide-5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <section className="happy-hour-section">
      <div style={{ position: "relative", width: "100%", aspectRatio: "3/1", overflow: "hidden" }}>
        {sliderImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          ›
        </button>

        {/* Slide Indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 10,
          }}
        >
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "2px solid white",
                background: currentSlide === index ? "white" : "transparent",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyHourSection;
