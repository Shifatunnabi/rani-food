'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '01',
    time: '10.00am-12.00Pm',
  });

  // Handles input, textarea, and select changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handles form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Booking submitted:
Name: ${formData.name}
Email: ${formData.email}
People: ${formData.people}
Time: ${formData.time}`);
  };

  return (
    <section className="booking-map-section">
      <div className="booking-map-wrapper">
        <div className="map-box">
          <iframe
            height="704"
            src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Location Map"
            style={{ border: 0, width: '100%' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="booking-form-wrapper">
          <div className="section-content-box wow fadeInUp">
            <div className="section-title text-white">
              <span className="sub-title">Table booking</span>
              <h2>BOOK A TABLE</h2>
            </div>
            <p className="mb-35">
              Happy Sunday Premium Pizza is a delightful blend of grilled chicken Italian sausage.
            </p>

            <form className="booking-form-two" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form_group">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Email Address"
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
                      name="people"
                      className="form_control wide"
                      value={formData.people}
                      onChange={handleChange}
                      required
                    >
                      <option value="01">01 People</option>
                      <option value="02">02 People</option>
                      <option value="03">03 People</option>
                      <option value="04">04 People</option>
                      <option value="05">05 People</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form_group">
                    <select
                      name="time"
                      className="form_control wide"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="10.00am-12.00Pm">10.00am-12.00Pm</option>
                      <option value="11.00Pm-02.00Pm">11.00Pm-02.00Pm</option>
                      <option value="02.00pm-04.00Pm">02.00pm-04.00Pm</option>
                      <option value="04.00pm-07.00Pm">04.00pm-07.00Pm</option>
                      <option value="06.00am-10.00Pm">06.00am-10.00Pm</option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form_group">
                    <button type="submit" className="theme-btn style-one">
                      Book A Table
                    </button>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
