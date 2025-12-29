'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AdData {
  id: number;
  image: string;
  link: string;
  alt: string;
}

const ads: AdData[] = [
  { id: 1, image: '/assets/images/popup/ad1.png', link: '/products', alt: 'Special Offer 1' },
  { id: 2, image: '/assets/images/popup/ad2.jpg', link: '/products', alt: 'Special Offer 2' },
  { id: 3, image: '/assets/images/popup/ad3.png', link: '/products', alt: 'Special Offer 3' },
  { id: 4, image: '/assets/images/popup/ad4.jpg', link: '/products', alt: 'Special Offer 4' },
];

export default function PopupAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAd, setCurrentAd] = useState<AdData | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Get a random ad
  const getRandomAd = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * ads.length);
    return ads[randomIndex];
  }, []);

  // Show popup after 5 seconds on page load
  useEffect(() => {
    // Set initial random ad
    setCurrentAd(getRandomAd());

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, [getRandomAd]);

  // Prevent scrolling when popup is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  // Close popup with animation
  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  // Handle click outside to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  if (!isVisible || !currentAd) return null;

  return (
    <>
      <style jsx global>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
          opacity: 1;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(3px);
        }

        .popup-overlay.closing {
          opacity: 0;
        }

        .popup-container {
          position: relative;
          width: 90%;
          max-width: 480px;
          aspect-ratio: 1 / 1;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          transform: scale(1);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: popupEnter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes popupEnter {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .popup-overlay.closing .popup-container {
          transform: scale(0.8);
          opacity: 0;
        }

        .popup-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .popup-image {
          object-fit: cover;
          object-position: center;
        }

        .popup-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .popup-close-btn:hover {
          background: #BF1109;
          transform: rotate(90deg);
        }

        .popup-close-btn:hover .close-icon {
          color: white;
        }

        .close-icon {
          font-size: 18px;
          color: #333;
          transition: color 0.3s ease;
          line-height: 1;
        }

        .popup-cta-btn {
          position: absolute;
          bottom: 16px;
          left: 16px;
          padding: 12px 24px;
          background: white;
          color: #BF1109;
          border: 2px solid #BF1109;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          z-index: 10;
        }

        .popup-cta-btn:hover {
          background: #BF1109;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(191, 17, 9, 0.4);
          color: white;
        }

        .popup-cta-btn i {
          font-size: 12px;
        }

        /* Responsive Styles */
        @media (max-width: 576px) {
          .popup-container {
            width: 88%;
            max-width: 360px;
          }

          .popup-close-btn {
            width: 32px;
            height: 32px;
            top: 10px;
            right: 10px;
          }

          .close-icon {
            font-size: 16px;
          }

          .popup-cta-btn {
            padding: 10px 18px;
            font-size: 12px;
            bottom: 12px;
            left: 12px;
          }
        }

        @media (min-width: 768px) {
          .popup-container {
            max-width: 420px;
          }
        }
      `}</style>

      <div 
        className={`popup-overlay ${isClosing ? 'closing' : ''}`}
        onClick={handleOverlayClick}
      >
        <div className="popup-container">
          <button 
            className="popup-close-btn" 
            onClick={closePopup}
            aria-label="Close popup"
          >
            <i className="fas fa-times close-icon"></i>
          </button>
          
          <div className="popup-image-wrapper">
            <Image
              src={currentAd.image}
              alt={currentAd.alt}
              fill
              className="popup-image"
              priority
            />
          </div>

          <Link 
            href={currentAd.link}
            className="popup-cta-btn"
            onClick={closePopup}
          >
            View Product
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
