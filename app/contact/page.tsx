"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
      {/*====== Start Contact Headline Section ======*/}
      <section className="contact-header-section pt-80 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-20 wow fadeInDown">
                <h2>Get In Touch</h2>
                <p style={{ fontSize: '16px', color: '#666', marginTop: '15px' }}>
                  We'd love to hear from you! Whether you have questions about our products, need assistance, or want to explore partnership opportunities, our team is here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Contact Section ======*/}
      <section className="contact-section pb-80">
        <div className="container">
          <div className="row">
            {/* Contact Form - Left Side (appears first on mobile) */}
            <div className="col-xl-6 col-md-12 order-1">
              <div className="contact-wrapper">
                <form className="contact-form wow fadeInUp">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Your Name"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Your Email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Your Phone"
                          name="phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Subject"
                          name="subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          rows={6}
                          placeholder="Write message"
                          name="message"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <button className="theme-btn style-one">
                          Submit Now
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Cards - Right Side (appears second on mobile) */}
            <div className="col-xl-6 col-md-12 order-2 mt-4 mt-xl-0">
              <div className="contact-info-cards wow fadeInDown">
                <div className="iconic-info-box-horizontal mb-30">
                  <div className="icon-wrapper">
                    <i className="far fa-map-marker-alt"></i>
                  </div>
                  <div className="content-wrapper">
                    <h4>Address</h4>
                    <p>
                      Rani Food Industries Limited<br />
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="iconic-info-box-horizontal mb-30">
                  <div className="icon-wrapper">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="content-wrapper">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@ranifood.com">
                        info@ranifood.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:support@ranifood.com">
                        support@ranifood.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="iconic-info-box-horizontal mb-30">
                  <div className="icon-wrapper">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="content-wrapper">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+8801234567890">+880 123 456 7890</a>
                    </p>
                    <p>
                      <a href="mailto:+8801234567891">+880 123 456 7891</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Map Section ======*/}
      <section className="contact-map-section pt-60 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <h2>Find Us Here</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-map-box wow fadeInDown" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height={450}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.7376863196923!2d90.4012916227279!3d23.791961667849705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c712262f7221%3A0x373240bdbca91bf0!2sRani%20Food%20Industries%20Limited!5e0!3m2!1sen!2sbd!4v1767775494258!5m2!1sen!2sbd"
                  loading="lazy"
                  style={{ border: 0 }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-center mt-30">
                <Link
                  href="https://www.google.com/maps/dir//Rani+Food+Industries+Limited/@23.791961667849705,90.4012916227279"
                  target="_blank"
                  className="theme-btn style-one"
                >
                  <i className="far fa-location-arrow me-2"></i>
                  Get Direction
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .iconic-info-box-horizontal {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          padding: 30px;
          background: #f8f8f8;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .iconic-info-box-horizontal:hover {
          background: #fff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transform: translateY(-5px);
        }

        .iconic-info-box-horizontal .icon-wrapper {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(196, 30, 58, 0.1);
        }

        .iconic-info-box-horizontal .icon-wrapper i {
          font-size: 28px;
          color: #c41e3a;
        }

        .iconic-info-box-horizontal .content-wrapper {
          flex: 1;
        }

        .iconic-info-box-horizontal .content-wrapper h4 {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }

        .iconic-info-box-horizontal .content-wrapper p {
          font-size: 15px;
          color: #666;
          margin-bottom: 5px;
          line-height: 1.6;
        }

        .iconic-info-box-horizontal .content-wrapper p:last-child {
          margin-bottom: 0;
        }

        .iconic-info-box-horizontal .content-wrapper a {
          color: #666;
          transition: color 0.3s ease;
        }

        .iconic-info-box-horizontal .content-wrapper a:hover {
          color: #c41e3a;
        }

        @media (max-width: 767px) {
          .iconic-info-box-horizontal {
            padding: 20px;
          }

          .iconic-info-box-horizontal .icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .iconic-info-box-horizontal .icon-wrapper i {
            font-size: 24px;
          }
        }
      `}</style>
    </Layout>
  );
}
