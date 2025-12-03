'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Drick Wills",
    time: "A week ago",
    image: "assets/images/testimonial/author-1.jpg",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Cooper",
    time: "A week ago",
    image: "assets/images/testimonial/author-2.jpg",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    rating: 5,
  },
  {
    id: 3,
    name: "Robert Fox",
    time: "A week ago",
    image: "assets/images/testimonial/author-4.jpg",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    rating: 5,
  },
  {
    id: 4,
    name: "Howard Tang",
    time: "A Month ago",
    image: "assets/images/testimonial/author-5.jpg",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section pt-120 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">Testimonial</span>
              <h2>Our Customer Say</h2>
              <p>
                Highlight specific aspects of the product or service that are
                relevant to your target audience. Focus on features or customers
                are likely to find compelling.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,  // Desktop এ ২ স্লাইড দেখাবে
              },
            }}
            className="testimonial-slider-two wow fadeInUp"
          >
            {testimonials.map(({ id, name, time, image, text, rating }) => (
              <SwiperSlide key={id}>
                <div className="testimonial-item style-two mb-40">
                  <div className="testimonial-content">
                    <div className="author-thumb-item">
                      <div className="author-thumb">
                        <img src={image} alt={`${name} image`} />
                      </div>
                      <div className="author-info">
                        <h5>{name}</h5>
                        <span>{time}</span>
                      </div>
                    </div>
                    <p>{text}</p>
                    <ul className="ratings rating-four">
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
