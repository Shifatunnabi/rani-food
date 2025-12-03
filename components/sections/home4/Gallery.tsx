'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

const galleryImages = [
  "assets/images/gallery/11.jpg",
  "assets/images/gallery/22.jpg",
  "assets/images/gallery/33.jpg",
  "assets/images/gallery/44.jpg",
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div
        className="gallery-wrapper-bg bg_cover pt-120 pb-130"
        style={{ backgroundImage: "url(assets/images/bg/gallery-bg.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Explore Gallery</span>
                <h2>Our Gallery</h2>
                <p>
                  Explore 'Our Gallery'—a visual symphony of delectable pizzas.
                  Feast your eyes on our culinary creations, each image.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="circle-button float-lg-end mb-50 wow fadeInRight">
                <Link href="/" className="circle-btn">
                  <span>View All</span>
                  <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="gallery-slider-wrapper wow fadeInDown">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              className="gallery-slider-two"
            >
              {galleryImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="gallery-item style-four">
                    <div className="gallery-img">
                      <img src={img} alt={`Gallery Image ${index + 1}`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
