"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryImages = [
    { id: 1, src: "/assets/images/gallery/gallery-1.jpg", alt: "Factory Production Line" },
    { id: 2, src: "/assets/images/gallery/gallery-2.jpg", alt: "Quality Control Testing" },
    { id: 3, src: "/assets/images/gallery/gallery-3.jpg", alt: "Packaging Department" },
    { id: 4, src: "/assets/images/gallery/gallery-4.jpg", alt: "Product Display" },
    { id: 5, src: "/assets/images/gallery/gallery-5.jpg", alt: "Team Meeting" },
    { id: 6, src: "/assets/images/gallery/gallery-6.jpg", alt: "Manufacturing Process" },
    { id: 7, src: "/assets/images/gallery/gallery-7.jpg", alt: "Warehouse Storage" },
    { id: 8, src: "/assets/images/gallery/gallery-8.jpg", alt: "Staff Training Session" },
    { id: 9, src: "/assets/images/gallery/gallery-9.jpg", alt: "Product Launch Event" },
    { id: 10, src: "/assets/images/gallery/gallery-10.jpg", alt: "Factory Exterior View" },
    { id: 11, src: "/assets/images/gallery/gallery-11.jpg", alt: "Executive Office" },
    { id: 12, src: "/assets/images/gallery/gallery-12.jpg", alt: "Production Equipment" },
    { id: 13, src: "/assets/images/home-beef/gallery/gallery-01.jpg", alt: "Product Range 1" },
    { id: 14, src: "/assets/images/home-beef/gallery/gallery-02.jpg", alt: "Product Range 2" },
    { id: 15, src: "/assets/images/home-beef/gallery/gallery-03.jpg", alt: "Product Range 3" },
    { id: 16, src: "/assets/images/home-beef/gallery/gallery-04.jpg", alt: "Product Range 4" },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      const prevIndex = selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1;
      setSelectedImage(prevIndex);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      const nextIndex = selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1;
      setSelectedImage(nextIndex);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
      <section className="gallery-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Our Gallery</h2>
                <p>
                  Explore our facilities, products, and team through our image gallery
                </p>
              </div>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item wow fadeInUp"
                data-wow-delay={`${0.1 + (index % 4) * 0.05}s`}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="overlay">
                    <i className="fas fa-search-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedImage !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button className="close-btn" onClick={closeLightbox}>
            <i className="fas fa-times"></i>
          </button>

          <button
            className="nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '90vh' }}
            />
            <div className="image-caption">
              {galleryImages[selectedImage].alt}
            </div>
            <div className="image-counter">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>

          <button
            className="nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .gallery-item {
          cursor: pointer;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(196, 30, 58, 0.15);
          border-color: #c41e3a;
        }

        .gallery-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        .gallery-image img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image img {
          transform: scale(1.1);
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(196, 30, 58, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .overlay {
          opacity: 1;
        }

        .overlay i {
          color: #fff;
          font-size: 40px;
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 50px 20px;
        }

        .lightbox-overlay:focus {
          outline: none;
        }

        .close-btn {
          position: fixed;
          top: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
          z-index: 10001;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: #c41e3a;
          border-color: #c41e3a;
          transform: rotate(90deg);
        }

        .nav-btn {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid #fff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          font-size: 24px;
          color: #fff;
          cursor: pointer;
          z-index: 10001;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-btn:hover {
          background: #c41e3a;
          border-color: #c41e3a;
          transform: translateY(-50%) scale(1.1);
        }

        .prev-btn {
          left: 30px;
        }

        .next-btn {
          right: 30px;
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90vh;
          position: relative;
          text-align: center;
        }

        .image-caption {
          color: #fff;
          font-size: 18px;
          margin-top: 20px;
          font-weight: 500;
        }

        .image-counter {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-size: 16px;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px 25px;
          border-radius: 25px;
          z-index: 10001;
        }

        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .gallery-image {
            height: 250px;
          }

          .close-btn {
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .nav-btn {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .prev-btn {
            left: 15px;
          }

          .next-btn {
            right: 15px;
          }

          .lightbox-content {
            max-width: 100%;
          }

          .image-caption {
            font-size: 16px;
            margin-top: 15px;
          }

          .image-counter {
            bottom: 15px;
            font-size: 14px;
            padding: 8px 20px;
          }
        }
      `}</style>
    </Layout>
  );
}
