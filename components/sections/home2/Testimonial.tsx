"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSection = () => {
  return (
    <>
      {/*====== Start Testimonial Section ======*/}

      <section className="testimonial-section pt-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Testimonials
                </span>
                <h2>Our Customer Review</h2>
              </div>
            </div>
          </div>

          {/*=== Swiper Slider ===*/}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: false }}
            navigation={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              992: { slidesPerView: 4 },
            }}
            className="testimonial-slider-three wow fadeInUp"
          >
            {/*=== Testimonial Item 1 ===*/}
            <SwiperSlide>
              <div className="testimonial-item style-four">
                <div className="testimonial-content">
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img
                        src="/assets/images/home-beef/testimonial/author-1.jpg"
                        alt="Author thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Mr. David Liam</h5>
                      <span className="position">CEO</span>
                    </div>
                  </div>
                  <p>
                    From the moment we walked in, we were impressed by the warm &amp;
                    inviting atmosphere.
                  </p>
                  <ul className="ratings">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/*=== Testimonial Item 2 ===*/}
            <SwiperSlide>
              <div className="testimonial-item style-four">
                <div className="testimonial-content">
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img
                        src="/assets/images/home-beef/testimonial/author-2.jpg"
                        alt="Author thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Miss Alex Mika</h5>
                      <span className="position">Founder</span>
                    </div>
                  </div>
                  <p>
                    From the moment we walked in, we were impressed by the warm &amp;
                    inviting atmosphere.
                  </p>
                  <ul className="ratings">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/*=== Testimonial Item 3 ===*/}
            <SwiperSlide>
              <div className="testimonial-item style-four">
                <div className="testimonial-content">
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img
                        src="/assets/images/home-beef/testimonial/author-3.jpg"
                        alt="Author thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Sir. John Smith</h5>
                      <span className="position">Founder</span>
                    </div>
                  </div>
                  <p>
                    From the moment we walked in, we were impressed by the warm &amp;
                    inviting atmosphere.
                  </p>
                  <ul className="ratings">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/*=== Testimonial Item 4 ===*/}
            <SwiperSlide>
              <div className="testimonial-item style-four">
                <div className="testimonial-content">
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img
                        src="/assets/images/home-beef/testimonial/author-4.jpg"
                        alt="Author thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Jessika Joya</h5>
                      <span className="position">CEO</span>
                    </div>
                  </div>
                  <p>
                    From the moment we walked in, we were impressed by the warm &amp;
                    inviting atmosphere.
                  </p>
                  <ul className="ratings">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            {/*=== Testimonial Item 2 ===*/}
            <SwiperSlide>
              <div className="testimonial-item style-four">
                <div className="testimonial-content">
                  <div className="author-thumb-item">
                    <div className="author-thumb">
                      <img
                        src="/assets/images/home-beef/testimonial/author-2.jpg"
                        alt="Author thumb"
                      />
                    </div>
                    <div className="author-info">
                      <h5>Miss Alex Mika</h5>
                      <span className="position">Founder</span>
                    </div>
                  </div>
                  <p>
                    From the moment we walked in, we were impressed by the warm &amp;
                    inviting atmosphere.
                  </p>
                  <ul className="ratings">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/*====== End Testimonial Section ======*/}
    </>
  );
};

export default TestimonialSection;
