"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import BoardOfDirectorsSection from "@/components/sections/home4/BoardOfDirectors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
      {/* ====== Start Intro Section ====== */}
      <section className="intro-section pt-125 pb-80">
        <div className="container">
          <div className="intro-wrapper_two">
            {/* About Us Heading */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-55 wow fadeInDown">
                  <h2>About Us</h2>
                </div>
              </div>
            </div>

            {/* Two Paragraphs with Equal Height */}
            <div className="row">
              <div className="col-lg-6">
                <div className="white-bg-container">
                  <div className="text-box mb-20 wow fadeInLeft" style={{ minHeight: '50px', display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '16px', lineHeight: '1.8' }}>
                      Rani Food Industries Limited was founded in Month 19–. Rani Food Industries Limited which is producing high quality of biscuits, cookies and real potato chips. The company has launched two brands which are known as "Gold Mark" and "Ringo". Rani Food Industries Limited makes sure that it produce high quality and delicious products.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="white-bg-container">
                  <div className="text-box mb-20 wow fadeInRight" style={{ minHeight: '50px', display: 'flex', alignItems: 'center' }}>
                    <p style={{  fontWeight: 'bold', fontSize: '16px', lineHeight: '1.8' }}>
                      Goldmark has one of the most extensive sales and distribution networks in Bangladesh, with 2,000 sales representatives across all 64 districts. Our products are available at over 5,00,000 retail outlets across Bangladesh.  Rani Food Industries Limited is also exporting 1000+ premium products in almost 50+ countries worldwide 
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="row">
              <div className="col-lg-12">
                <div className="video-wrapper wow fadeInDown" style={{ borderRadius: '15px', overflow: 'hidden', position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://www.youtube.com/embed/qNQTxYeA7Yc?autoplay=1&mute=1&loop=1&playlist=qNQTxYeA7Yc&controls=1&modestbranding=1&rel=0"
                    title="Watch Our Story"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Mission Section ====== */}
      <section className="mission-section pt-120 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Our Mission</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="white-bg-container">
                <div className="text-box mb-12 wow fadeInLeft">
                  <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#c41e3a' }}>Our Mission</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    Our mission is to provide high-quality, delicious food products that bring joy to families across Bangladesh. We are committed to maintaining the highest standards of quality, hygiene, and taste in all our products. Through continuous innovation and dedication to excellence, we strive to be the leading food manufacturer in the region, creating value for our customers, employees, and stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-box mb-50 wow fadeInRight">
                <Image
                  src="/assets/images/about/about-intro.jpg"
                  alt="Mission"
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Vision Section ====== */}
      <section className="vision-section pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Our Vision</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="image-box mb-50 wow fadeInLeft">
                <Image
                  src="/assets/images/about/about-intro.jpg"
                  alt="Vision"
                  width={600}
                  height={400}
                  className="w-full rounded"
                />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="white-bg-container">
                <div className="text-box mb-12 wow fadeInRight">
                  <h3 className="mb-3" style={{ fontSize: '24px', fontWeight: '700', color: '#c41e3a' }}>Our Vision</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    To become the most trusted and preferred food brand in Bangladesh and beyond, known for our unwavering commitment to quality, innovation, and customer satisfaction. We envision a future where Rani Food Industries Limited products are present in every household, bringing smiles and creating memorable moments for families across the nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Export Profile Section ====== */}
      <section className="export-section pt-60 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Export Profile</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="white-bg-container">
                <div className="text-box mb-12 wow fadeInUp text-center">
                  <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                    Rani Food Industries Limited has established a strong presence in international markets, exporting our premium quality products to various countries. Our commitment to maintaining international quality standards and food safety regulations has enabled us to expand our reach beyond Bangladesh.
                  </p>
                  <p style={{ fontSize: '16px', lineHeight: '1.8' }}>
                    We take pride in representing Bangladesh on the global stage, showcasing the quality and excellence of locally manufactured food products. Our export operations continue to grow as we forge new partnerships and enter new markets, bringing the taste of Bangladesh to the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="export-slider wow fadeInUp">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <SwiperSlide key={item}>
                      <div className="export-image-box" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                        <Image
                          src="/assets/images/about/about-intro.jpg"
                          alt={`Export ${item}`}
                          width={400}
                          height={300}
                          className="w-full"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Board of Directors Section ====== */}
      <BoardOfDirectorsSection />
    </Layout>
  );
}
