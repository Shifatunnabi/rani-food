'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const InstagramGallery = () => {
  const images = [
    "insta-6.jpg",
    "insta-7.jpg",
    "insta-8.jpg",
    "insta-9.jpg",
    "insta-10.jpg",
    "insta-11.jpg",
    "insta-8.jpg",
  ];

  return (
    <section className="insta-gallery-section">
      <div className="instagram-wrapper wow fadeInDown">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={6}   
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
          className="instagram-slider-one"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="gallery-item style-one">
                <div className="gallery-img">
                  <img src={`assets/images/instagram/${img}`} alt="gallery image" />
                  <div className="hover-content">
                    <a href={`assets/images/instagram/${img}`} className="insta-icon img-popup">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InstagramGallery;
