'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const InstagramGallery = () => {
  const images = [
    "insta-12.jpg",
    "insta-13.jpg",
    "insta-14.jpg",
    "insta-15.jpg",
    "insta-16.jpg",
    "insta-17.jpg",
    "insta-16.jpg",
  ];

  return (
    <section className="instagram-wrapper">
      <div className="instagram-wrapper gray-bg pt-20 pb-20 wow fadeInDown">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="instagram-slider-two"
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
