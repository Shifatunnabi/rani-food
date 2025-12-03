"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

// Swiper imports
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Carry",
      position: "Executive chef",
      img: "/assets/images/team/team-5.jpg",
    },
    {
      name: "Alexa Lora",
      position: "Junior Chef",
      img: "/assets/images/team/team-6.jpg",
    },
    {
      name: "Hony Smith",
      position: "Junior Chef",
      img: "/assets/images/team/team-7.jpg",
    },
  ];

  const testimonials = [
    {
      img: "/assets/images/testimonial/author-4.jpg",
      name: "Jane Cooper",
      time: "A week ago",
      text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    },
    {
      img: "/assets/images/testimonial/author-5.jpg",
      name: "Jane Cooper",
      time: "A week ago",
      text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    },
    {
      img: "/assets/images/testimonial/author-4.jpg",
      name: "Jane Cooper",
      time: "A week ago",
      text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    },
    {
      img: "/assets/images/testimonial/author-3.jpg",
      name: "Jane Cooper",
      time: "A week ago",
      text: "Explore 'Our Gallery'—a visual symphony of delectable pizzas. Feast your eyes on our culinary creations, each image.",
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
      {/* ====== Start Intro Section ====== */}
      <section className="intro-section pt-125">
        <div className="container">
          <div className="intro-wrapper_two">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-box mb-50 wow fadeInLeft">
                  <h3>
                    Hi! Our Restaurant has been present for over 20 years in
                    the market. We make the most of all our customers.
                  </h3>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-box mb-50 wow fadeInRight">
                  <p>
                    Embark on a delectable journey as we delve into the world of
                    culinary delights and gastronomic adventures. Food is not
                    just sustenance; it's an art that connects cultures, evokes
                    memories, and stirs emotions. In this blog, we invite you to
                    join us as we explore the fascinating realm.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div
                  className="play-wrapper bg_cover text-center pt-130 pb-125 pl-10 pr-10 wow fadeInDown"
                  style={{
                    backgroundImage:
                      "url(/assets/images/about/about-intro.jpg)",
                  }}
                >
                  <div className="play-button">
                    <Link
                      href="https://www.youtube.com/watch?v=Xj4E0Zry6K4"
                      className="video-popup"
                      target="_blank"
                    >
                      <i className="fas fa-play" />
                    </Link>
                  </div>
                  <h2 className="text-uppercase text-white">
                    Eat and enjoy in our <br /> restaurant
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Start Team Section ====== */}
      <section className="team-section pt-110 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Meet our special chef</h2>
                <p>
                  Introducing our esteemed culinary virtuoso, a maestro of
                  flavors crafting exquisite dishes with passion, precision, and
                  a touch of magic
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={`${0.25 + i * 0.1}s`}
              >
                <div className="team-item style-two mb-40">
                  <div className="member-image">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="member-info">
                    <h4 className="title">{member.name}</h4>
                    <span className="position">{member.position}</span>
                    <ul className="social-link">
                      {["facebook-f", "twitter", "linkedin-in", "pinterest-p"].map(
                        (icon, index) => (
                          <li key={index}>
                            <Link href="#">
                              <i className={`fab fa-${icon}`} />
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Start Testimonial Section ====== */}
      <section className="testimonial-section pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-55">
              <span className="sub-title">Testimonial</span>
              <h2>Our client reviews</h2>
              <p>
                Customer reviews sorted by rating, date, or relevance. See what
                others are saying to make informed purchasing decisions.
              </p>
            </div>
          </div>

          <Swiper
            modules={[ Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              992: {
                slidesPerView: 2, // Desktop view 2 testimonials
              },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-item style-two mb-40">
                  <div className="testimonial-content">
                    <div className="author-thumb-item">
                      <div className="author-thumb">
                        <Image
                          src={t.img}
                          alt={t.name}
                          width={80}
                          height={80}
                        />
                      </div>
                      <div className="author-info">
                        <h5>{t.name}</h5>
                        <span>{t.time}</span>
                      </div>
                    </div>
                    <p>{t.text}</p>
                    <ul className="ratings rating-four">
                      {Array(5)
                        .fill(1)
                        .map((_, star) => (
                          <li key={star}>
                            <i className="fas fa-star" />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Layout>
  );
}
