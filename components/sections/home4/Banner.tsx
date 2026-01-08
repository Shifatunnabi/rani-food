'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style jsx>{`
        .hero-section-redesign {
          position: relative;
          min-height: calc(100vh - 170px);
          display: flex;
          align-items: center;
          padding: 80px 0 40px;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('assets/images/hero/hero-three_bg.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .content-box {
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .content-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .content-box h1 {
          font-size: clamp(45px, 6vw, 90px);
          line-height: 1.1;
          color: white;
          text-transform: uppercase;
          margin-bottom: 30px;
          font-weight: 700;
        }

        .content-box p {
          font-size: clamp(16px, 2vw, 24px);
          line-height: 1.6;
          color: white;
          margin-bottom: 40px;
          font-weight: 500;
        }

        .button-wrapper {
          position: relative;
          z-index: 99999;
          display: inline-block;
        }

        .image-box {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.2s;
          overflow: hidden;
          margin-right: 0;
          margin-left: 60px;
        }

        .image-box.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .image-box img {
          width: 100%;
          max-width: 650px;
          height: auto;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
          border-radius: 10px;
        }

        @media (max-width: 1200px) {
          .image-box img {
            max-width: 550px;
          }
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .image-box {
            order: -1;
            margin-right: 0;
            margin-left: 0;
            justify-content: center;
          }

          .image-box img {
            max-width: 500px;
          }

          .content-box {
            padding: 20px 0;
          }
        }

        @media (max-width: 768px) {
          .hero-section-redesign {
            min-height: 100vh;
            padding: 20px 0;
          }

          .hero-container {
            padding: 0 20px;
          }

          .hero-grid {
            gap: 40px;
            min-height: 100vh;
            align-content: start;
            padding-top: 20px;
          }

          .image-box {
            min-height: 50vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .image-box img {
            max-width: 90%;
            width: 100%;
          }

          .content-box {
            padding: 20px 0 40px;
          }

          .content-box h1 {
            font-size: 36px;
            margin-bottom: 20px;
          }

          .content-box p {
            font-size: 15px;
            margin-bottom: 30px;
          }
        }
      `}</style>

      <section className="hero-section-redesign">
        <div className="hero-background"></div>
        
        <div className="hero-container">
          <div className="hero-grid">
            {/* Left Content Box */}
            <div className={`content-box ${isVisible ? 'visible' : ''}`}>
              <h1>RANI FOOD INDUSTRIES.</h1>
              <p>
                Savor the perfection of our culinary creations, where every bite
                tells a story of passion and flavor.
              </p>
              <div className="button-wrapper">
                <Link 
                  href="/products"
                  style={{
                    display: 'inline-block',
                    padding: '18px 55px',
                    backgroundColor: '#FFFFFF',
                    color: '#BF1109',
                    fontSize: '18px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    letterSpacing: '0.5px',
                    position: 'relative',
                    zIndex: 99999
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#BF1109';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.color = '#BF1109';
                  }}
                >
                  View Products
                </Link>
              </div>
            </div>

            {/* Right Image Box */}
            <div className={`image-box ${isVisible ? 'visible' : ''}`}>
              <img src="assets/test.gif" alt="Rani Food Industries" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
