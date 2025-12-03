'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const KebabMenuSlider = () => {
const menuItems = [
  {
    id: 1,
    title: 'Shish Kebab',
    price: 42,
    imgSrc: 'assets/images/home-beef/menu/kb_1.jpg',
    link: '/cart',
    details: '/menu-details',
  },
  {
    id: 2,
    title: 'Doner Kebab',
    price: 39,
    imgSrc: 'assets/images/home-beef/menu/kb_2.jpg',
    link: '/cart',
    details: '/menu-details',
  },
  {
    id: 3,
    title: 'Chapli Kebab',
    price: 35,
    imgSrc: 'assets/images/home-beef/menu/kb_3.jpg',
    link: '/cart',
    details: '/menu-details',
  },
  {
    id: 4,
    title: 'Kofta Kebab',
    price: 33,
    imgSrc: 'assets/images/home-beef/menu/kb_4.jpg',
    link: '/cart',
    details: '/menu-details',
  },
  {
    id: 5,
    title: 'Shish Kebab',
    price: 43,
    imgSrc: 'assets/images/home-beef/menu/kb_5.jpg',
    link: '/cart',
    details: '/menu-details',
  },
  {
    id: 6,
    title: 'Shish Kebab',
    price: 33,
    imgSrc: 'assets/images/home-beef/menu/kb_4.jpg',
    link: '/cart',
    details: '/menu-details',
  },
];


  return (
    <section className="kebab-menu-section pt-80 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title text-center mb-45 wow fadeInDown">
              <span className="sub-title">
                <i className="flaticon-food-tray"></i>Kebab Corner
              </span>
              <h2>Delights of Our Kebab</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
          >
          {menuItems.map(({ id, title, price, imgSrc, details, link }) => (
            <SwiperSlide key={id}>
              <div className="menu-item style-nine mb-40">
                <div className="menu-thumbnail">
                  <img src={imgSrc} alt={`${title} Image`} />
                  <div className="hover-content">
                    <div className="menu-content-wrap">
                      <div className="menu-info">
                        <h3 className="title">
                          <a href={details}>{title}</a>
                        </h3>
                        <p className="price">
                          <span className="currency">$</span>
                          {price}
                        </p>
                      </div>
                      <div className="menu-button">
                        <a href={link} className="cart-button">
                          <i className="far fa-shopping-cart"></i>
                        </a>
                      </div>
                    </div>
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

export default KebabMenuSlider;
