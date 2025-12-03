'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Guy Hawkins",
    time: "A week ago",
    imgSrc: "assets/images/testimonial/author-1.jpg",
    review:
      "Purchased the Original Casper foods just over a week ago. So far it is a dream to sleep on. No more aches and pains in the morning and a great nights sleep.",
    rating: 5,
  },
  {
    id: 2,
    name: "Guy Hawkins",
    time: "A week ago",
    imgSrc: "assets/images/testimonial/author-2.jpg",
    review:
      "Purchased the Original Casper foods just over a week ago. So far it is a dream to sleep on. No more aches and pains in the morning and a great nights sleep.",
    rating: 5,
  },
  {
    id: 3,
    name: "Guy Hawkins",
    time: "A week ago",
    imgSrc: "assets/images/testimonial/author-3.jpg",
    review:
      "Purchased the Original Casper foods just over a week ago. So far it is a dream to sleep on. No more aches and pains in the morning and a great nights sleep.",
    rating: 5,
  },
  {
    id: 4,
    name: "Guy Hawkins",
    time: "A week ago",
    imgSrc: "assets/images/testimonial/author-2.jpg",
    review:
      "Purchased the Original Casper foods just over a week ago. So far it is a dream to sleep on. No more aches and pains in the morning and a great nights sleep.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimoinial-section gray-bg pt-120 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Testimonial</span>
              <h2>Client Reviews</h2>
              <p>
                Indulge in an array of meticulously crafted sushi rolls, artfully
                blending fresh ingredients for a delightful taste experience.
              </p>
            </div>
          </div>
        </div>

        {/* Swiper Testimonial Slider */}
        <div className="testimonial-slider-one wow fadeInUp">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
          >
            {testimonials.map(({ id, name, time, imgSrc, review, rating }) => (
              <SwiperSlide key={id}>
                <div className="testimonial-item style-one mb-40">
                  <div className="testimonial-content">
                    <div className="author-thumb-item d-flex mb-25">
                      <div className="author-thumb">
                        <img src={imgSrc} alt={`${name} image`} />
                      </div>
                      <div className="author-info">
                        <h5>{name}</h5>
                        <span>{time}</span>
                      </div>
                    </div>
                    <p>{review}</p>
                    <ul className={`ratings rating-four`}>
                      {[...Array(rating)].map((_, i) => (
                        <li key={i}>
                          <i className="fas fa-star"></i>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
