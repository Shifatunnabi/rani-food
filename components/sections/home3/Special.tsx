'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const specialOffers = [
  {
    id: 1,
    title: "Bacon Burger",
    shapeImg: "assets/images/gallery/sp-shape-1.png",
    image: "assets/images/gallery/sp-1.png",
    description:
      "Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.",
  },
  {
    id: 2,
    title: "Bacon Burger",
    shapeImg: "assets/images/gallery/sp-shape-1.png",
    image: "assets/images/gallery/sp-2.png",
    description:
      "Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.",
  },
  {
    id: 3,
    title: "Bacon Burger",
    shapeImg: "assets/images/gallery/sp-shape-1.png",
    image: "assets/images/gallery/sp-3.png",
    description:
      "Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.",
  },
  {
    id: 4,
    title: "Bacon Burger",
    shapeImg: "assets/images/gallery/sp-shape-1.png",
    image: "assets/images/gallery/sp-2.png",
    description:
      "Grilled beef topped with crispy bacon, smoky BBQ sauce, melted cheese, and fresh fixings for a savory, indulgent delight.",
  },
];

const SpecialOfferSection = () => {
  return (
    <>
      {/*====== Start Special Offer Section ======*/}
      <section className="special-offer-section pt-120 pb-90 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Special offer</span>
                <h2>Burger deal today!</h2>
                <p>
                  An irresistible offer awaits today with fantastic deals on a wide
                  range of delicious, mouthwatering burgers for everyone's delight.
                </p>
              </div>
            </div>
          </div>
          {/*=== Special Off Slider (Swiper) ===*/}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="special-off-slider wow fadeInUp"
          >
            {specialOffers.map(({ id, title, shapeImg, image, description }) => (
              <SwiperSlide key={id}>
                <div className="special-off-item text-center mb-40">
                  <div className="sp-shape">
                    <img src={shapeImg} alt="shape" />
                  </div>
                  <div className="item-title">
                    <h4>{title}</h4>
                  </div>
                  <div className="image">
                    <img src={image} alt="image" />
                  </div>
                  <div className="content">
                    <p>{description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/*====== End Special Offer Section ======*/}
    </>
  );
};

export default SpecialOfferSection;
