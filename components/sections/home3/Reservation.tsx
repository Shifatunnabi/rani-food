'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '01',
    date: '',
    time: '01',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking form submitted', formData);
    // TODO: integrate API or backend submission
  };

  return (
    <section className="reservation-section">
      <div className="booking-wrapper-two bg_cover pt-120 pb-130" style={{ backgroundImage: 'url(/assets/images/bg/booking-bg.png)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-6">
              <div className="section-content-box wow fadeInDown">
                <div className="section-title text-white mb-40">
                  <span className="sub-title">Reservation</span>
                  <h2>BOOK A TABLE</h2>
                  <p>
                    Resy is another popular restaurant reservations. Explore restaurants, menus, and make reservations through their website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-6">
              <div className="booking-form-box wow fadeInUp">
                <form className="booking-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Enter your name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Enter your Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
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
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="date"
                          className="form_control"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                        <span className="icon"><i className="far fa-calendar-alt"></i></span>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <select
                          id="people"
                              name="people"
                              className="form_control wide"
                              defaultValue="01"
                              required
                        >
                          <option value="01">10.00 Am - 11.00 Am</option>
                          <option value="02">11.00 Am - 12.00 Pm</option>
                          <option value="03">12.00 Pm - 01.00 Pm</option>
                          <option value="04">02.00 Pm - 03.00 Pm</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Enter your phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form_group">
                        <button type="submit" className="theme-btn style-one">
                          Book a Table
                        </button>
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
}
