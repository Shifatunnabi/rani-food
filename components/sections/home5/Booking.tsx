'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  people: '01' | '02' | '03' | '04' | '05';
  time: '10.00am-12.00Pm' | '11.00Pm-02.00Pm' | '02.00pm-04.00Pm' | '04.00pm-07.00Pm' | '06.00am-10.00Pm';
  date: string;
  message: string;
}

const BookingSection = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    people: '01',
    time: '10.00am-12.00Pm',
    date: '',
    message: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    } as Pick<BookingFormData, keyof BookingFormData>));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Booking submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <section className="booking-section">
      <div
        className="booking-wrapper-two bg_cover pt-120 pb-130 p-r z-1"
        style={{ backgroundImage: "url('assets/images/bg/contact-bg1.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title */}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Booking</span>
                <h2>BOOK A TABLE</h2>
                <p>
                  Resy is another popular restaurant reservations. Can explore restaurants, menus,
                  and make reservations through their website.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="booking-form-box wow fadeInUp">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="row justify-content-center">
                {/* Name */}
                <div className="col-lg-4">
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

                {/* Email */}
                <div className="col-lg-4">
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

                {/* Phone */}
                <div className="col-lg-4">
                  <div className="form_group">
                    <input
                      type="text"
                      className="form_control"
                      placeholder="Enter your Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* People */}
                <div className="col-lg-4">
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

                {/* Time */}
                <div className="col-lg-4">
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

                {/* Date */}
                <div className="col-lg-4">
                  <div className="form_group" style={{ position: 'relative' }}>
                    <input
                      type="date"
                      className="form_control"
                      placeholder="Date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      id="datepicker"
                      style={{ paddingRight: '40px' }}
                    />
                    <span className="icon" style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)' }}>
                      <i className="far fa-calendar-alt"></i>
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div className="col-lg-12">
                  <div className="form_group">
                    <textarea
                      className="form_control"
                      placeholder="Description"
                      name="message"
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="col-lg-6">
                  <div className="form_group text-center">
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
    </section>
  );
};

export default BookingSection