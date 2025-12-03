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
    authorName: "Jane Cooper",
    authorImg: "assets/images/testimonial/author-4.jpg",
    time: "A week ago",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    ratingClass: "rating-four",
  },
  {
    id: 2,
    authorName: "Jane Cooper",
    authorImg: "assets/images/testimonial/author-5.jpg",
    time: "A week ago",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    ratingClass: "rating-four",
  },
  {
    id: 3,
    authorName: "Jane Cooper",
    authorImg: "assets/images/testimonial/author-4.jpg",
    time: "A week ago",
    text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    ratingClass: "rating-four",
  },
];

const TestimonialSection = () => {
  return (
    <>
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-section gray-bg pt-120 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">Testimonial</span>
                <h2>Our Customer Say</h2>
                <p>
                  Highlight specific aspects of the product or service that are relevant
                  to your target audience. Focus on features or customers are likely to
                  find compelling.
                </p>
              </div>
            </div>
          </div>

          {/*=== Testimonial Slider ===*/}
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            navigation={false}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="testimonial-slider-two wow fadeInUp"
          >
            {testimonials.map(
              ({ id, authorName, authorImg, time, text, ratingClass }) => (
                <SwiperSlide key={id}>
                  <div className="testimonial-item style-two mb-60">
                    <div className="testimonial-content">
                      <div className="author-thumb-item">
                        <div className="author-thumb">
                          <img src={authorImg} alt="author image" />
                        </div>
                        <div className="author-info">
                          <h5>{authorName}</h5>
                          <span>{time}</span>
                        </div>
                      </div>
                      <p>{text}</p>
                      <ul className={`ratings ${ratingClass}`}>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
    </>
  );
};

export default TestimonialSection;
