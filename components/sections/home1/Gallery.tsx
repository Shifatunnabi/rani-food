'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function GallerySection() {
  const galleryItems = [
    { img: "/assets/images/gallery/gallery-14.jpg", title: "Hawaiian pizza", category: "Pizza" },
    { img: "/assets/images/gallery/gallery-15.jpg", title: "Hawaiian pizza", category: "Pizza" },
    { img: "/assets/images/gallery/gallery-16.jpg", title: "Hawaiian pizza", category: "Pizza" },
    { img: "/assets/images/gallery/gallery-17.jpg", title: "Hawaiian pizza", category: "Pizza" },
    { img: "/assets/images/gallery/gallery-18.jpg", title: "Hawaiian pizza", category: "Pizza" },
    { img: "/assets/images/gallery/gallery-15.jpg", title: "Hawaiian pizza", category: "Pizza" },
  ];

  return (
    <section className="gallery-section">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={5}
        navigation = {false}
        pagination={{ clickable: true }}
        loop={true}
		grabCursor={true}
        className="gallery-slider-one"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {galleryItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="gallery-item style-two">
              <div className="gallery-img">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <div className="hover-content">
                  <div className="gallery-content">
                    <h4 className="title">
                      <a href="menu-details.html">{item.title}</a>
                    </h4>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
