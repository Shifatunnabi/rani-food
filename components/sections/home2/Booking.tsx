import React from 'react';
import Link from 'next/link';

const BookingSection = () => {
  return (
    <section className="booking-section">
      <div
        className="booking-wrapper-three bg_cover pt-130 pb-80"
        style={{ backgroundImage: 'url(assets/images/home-beef/bg/booking-bg.jpg)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Section Content Box */}
              <div className="section-content-box wow fadeInLeft mb-50">
                <div className="section-title mb-50 text-white">
                  <span className="sub-title">
                    <i className="flaticon-food-tray"></i>Reservation
                  </span>
                  <h2>
                    Need reservation? <br /> booking your table now
                  </h2>
                </div>
                <div className="happy-button">
                  <p>Order online</p>
                  <a href="tel:+555-657-8876" className="theme-btn style-one">
                    <i className="far fa-phone"></i> +555-657-8876
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Booking Form Box */}
              <div className="booking-form-box wow fadeInRight mb-50">
                <div className="booking-title text-center">
                  <h3>Create An Booking Table</h3>
                </div>
                <form className="booking-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Enter your name"
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
                          placeholder="Enter your Email"
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
                          placeholder="Enter your Phone"
                          name="phone"
                          required
                        />
                        <span className="icon">
                          <i className="far fa-phone"></i>
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Date"
                          id="datepicker"
                          name="date"
                        />
                        <span className="icon">
                          <i className="far fa-calendar-alt"></i>
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-12">
                                              <select
                              id="people"
                              name="people"
                              className="form_control wide"
                              defaultValue="01"
                              required
                            >
                              <option value="01">01 People</option>
                              <option value="02">02 People</option>
                              <option value="03">03 People</option>
                              <option value="04">04 People</option>
                              <option value="05">05 People</option>
                            </select>
                          </div>

                    <div className="col-lg-12">
                      <div className="form_group text-center">
                        <Link href="/contact" className="theme-btn style-one">
                          Book a Table
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
