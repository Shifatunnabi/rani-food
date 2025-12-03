import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
      {/*====== Start Contact Section ======*/}
      <section className="contact-section pt-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="contact-wrapper">
                <div className="section-title mb-50 wow fadeInDown">
                  <span className="sub-title">Get in touch</span>
                  <h2>
                    have questions? <br /> get in touch!
                  </h2>
                </div>
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
                          placeholder="Your Subject"
                          name="subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Your Service"
                          name="service"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          rows={5}
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
            <div className="col-xl-6 col-md-12 d-none d-xl-block">
              <div className="contact-image-box text-end wow fadeInDown">
                <Image
                  src="/assets/images/gallery/contact-1.png"
                  alt="Contact Image"
                  width={600}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Contact Info Section ======*/}
      <section className="contact-info-section pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="iconic-info-box style-one text-center mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="far fa-map-marker-alt"></i>
                </div>
                <div className="content">
                  <h4>Address</h4>
                  <p>
                    4140 Parker Rd. Allentown, <br />
                    New Mexico 31134
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="iconic-info-box style-one text-center mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="content">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:foodixsupport@foodix.com">
                      foodixsupport@foodix.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:foodixinfo@foodix.com">
                      foodixinfo@foodix.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="iconic-info-box style-one text-center mb-30 wow fadeInDown">
                <div className="icon">
                  <i className="far fa-map-marker-alt"></i>
                </div>
                <div className="content">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+555-1234567890">+555-123 456 7890</a>
                  </p>
                  <p>
                    <a href="tel:+555-1234567890">+555-123 776 8875</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Map Section ======*/}
      <section className="contact-map-section">
        <div className="contact-map-box wow fadeInDown">
          <iframe
            height={600}
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96777.16150026117!2d-74.00840582560909!3d40.71171357405996!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706508986625!5m2!1sen!2sbd"
            loading="lazy"
            className="w-full"
          />
        </div>
      </section>
    </Layout>
  );
}
