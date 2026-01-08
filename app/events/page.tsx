"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";

interface EventItem {
  id: number;
  title: string;
  excerpt: string;
  fullDetails: string;
  image: string;
  date: string;
  time: string;
  location: string;
}

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const events: EventItem[] = [
    {
      id: 1,
      title: "Annual Factory Open Day 2026",
      excerpt: "Join us for an exclusive tour of our state-of-the-art manufacturing facility and witness the production process firsthand...",
      fullDetails: "We invite you to our Annual Factory Open Day where you can get an inside look at our world-class manufacturing processes. This event offers a unique opportunity to witness firsthand how we maintain our high standards of quality and hygiene in producing your favorite snacks and biscuits. The tour will include visits to various production lines, quality control laboratories, and packaging facilities. Our expert team will be available to answer your questions and provide insights into our commitment to excellence. Refreshments and product samples will be provided to all attendees.",
      image: "/assets/images/gallery/gallery-1.jpg",
      date: "February 15, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Rani Food Industries Factory, Dhaka",
    },
    {
      id: 2,
      title: "Product Launch Event - Healthy Snack Range",
      excerpt: "Be the first to taste our revolutionary new healthy snack line at this exclusive launch event...",
      fullDetails: "Join us for the official launch of our new healthy snack range! This exciting event will feature live cooking demonstrations, nutritional workshops, and exclusive tastings of our latest products. Renowned nutritionists and food experts will discuss the benefits of healthy snacking and how our new products fit into a balanced lifestyle. Attendees will receive special launch offers and promotional gifts. This is a perfect opportunity to meet our team, learn about our innovation process, and be among the first to experience our newest creations.",
      image: "/assets/images/gallery/gallery-2.jpg",
      date: "March 20, 2026",
      time: "6:00 PM - 9:00 PM",
      location: "Radisson Blu Hotel, Dhaka",
    },
    {
      id: 3,
      title: "Career Fair & Recruitment Drive",
      excerpt: "Explore exciting career opportunities with Rani Food Industries at our comprehensive recruitment event...",
      fullDetails: "Rani Food Industries Limited is hosting a Career Fair to connect with talented individuals interested in joining our team. This event will feature presentations about various career paths within our organization, from production and quality control to marketing and sales. Our HR team and department heads will be present to discuss job opportunities, company culture, and growth prospects. Bring your resume and be prepared for on-the-spot interviews. We're looking for passionate individuals who share our commitment to quality and excellence.",
      image: "/assets/images/gallery/gallery-3.jpg",
      date: "March 5, 2026",
      time: "9:00 AM - 3:00 PM",
      location: "Rani Food Head Office, Dhaka",
    },
    {
      id: 4,
      title: "Food Safety & Quality Workshop",
      excerpt: "Interactive workshop for industry professionals on latest food safety standards and quality control practices...",
      fullDetails: "A comprehensive workshop designed for food industry professionals, covering the latest developments in food safety standards, quality control methodologies, and regulatory compliance. Led by our experienced quality assurance team and guest speakers from regulatory bodies, this workshop will provide practical insights and hands-on training. Topics include HACCP implementation, ISO standards, hygiene protocols, and quality management systems. Participants will receive certificates of attendance and valuable networking opportunities with industry peers.",
      image: "/assets/images/gallery/gallery-4.jpg",
      date: "April 10, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Rani Food Training Center, Dhaka",
    },
    {
      id: 5,
      title: "Community Feeding Program",
      excerpt: "Join our CSR initiative to distribute nutritious snacks and meals to underprivileged communities...",
      fullDetails: "As part of our corporate social responsibility, Rani Food Industries organizes regular community feeding programs to support underprivileged families. This event will involve distributing nutritious snack packages and meals to children and families in need. Volunteers are welcome to participate in the distribution process and help make a difference in our community. This initiative reflects our commitment to giving back to society and ensuring that quality nutrition reaches everyone, regardless of their economic background.",
      image: "/assets/images/gallery/gallery-5.jpg",
      date: "March 25, 2026",
      time: "11:00 AM - 2:00 PM",
      location: "Community Center, Mirpur, Dhaka",
    },
    {
      id: 6,
      title: "Gold Mark Brand Anniversary Celebration",
      excerpt: "Celebrate a decade of Gold Mark excellence with special promotions, games, and entertainment...",
      fullDetails: "Join us in celebrating Gold Mark's remarkable journey over the past decade! This grand celebration will feature special promotions, exciting games, live entertainment, and appearances by brand ambassadors. Attendees can participate in fun activities, win amazing prizes, and enjoy exclusive discounts on their favorite Gold Mark products. There will be food stalls, children's activities, and live music performances throughout the day. Come celebrate with us and be part of Gold Mark's success story!",
      image: "/assets/images/gallery/gallery-6.jpg",
      date: "April 20, 2026",
      time: "3:00 PM - 8:00 PM",
      location: "Bashundhara City Mall, Dhaka",
    },
  ];

  const handleViewDetails = (event: EventItem) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Events">
      <section className="events-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Upcoming Events</h2>
                <p>
                  Join us at our upcoming events and be part of the Rani Food Industries family
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {events.map((event, index) => (
              <div key={event.id} className="col-lg-4 col-md-6 mb-40">
                <div className="event-card wow fadeInUp" data-wow-delay={`${0.1 + index * 0.05}s`}>
                  <div className="event-image">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-info">
                      <div className="info-item">
                        <i className="far fa-calendar"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="info-item">
                        <i className="far fa-clock"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="info-item">
                        <i className="far fa-map-marker-alt"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="event-excerpt">{event.excerpt}</p>
                    <button 
                      className="view-details-btn"
                      onClick={() => handleViewDetails(event)}
                    >
                      View Details <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Modal */}
      {isModalOpen && selectedEvent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image">
              <Image
                src={selectedEvent.image}
                alt={selectedEvent.title}
                width={800}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="modal-body">
              <h2 className="modal-title">{selectedEvent.title}</h2>
              <div className="event-info-modal">
                <div className="info-item">
                  <i className="far fa-calendar"></i>
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="info-item">
                  <i className="far fa-clock"></i>
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="info-item">
                  <i className="far fa-map-marker-alt"></i>
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
              <p className="modal-text">{selectedEvent.fullDetails}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .event-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #f0f0f0;
          border-bottom: 4px solid #c41e3a;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(196, 30, 58, 0.15);
        }

        .event-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .event-image img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .event-card:hover .event-image img {
          transform: scale(1.05);
        }

        .event-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .event-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .event-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #f0f0f0;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #666;
        }

        .info-item i {
          color: #c41e3a;
          width: 16px;
        }

        .event-excerpt {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .view-details-btn {
          background: transparent;
          border: none;
          color: #c41e3a;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          transition: all 0.3s ease;
          align-self: flex-end;
        }

        .view-details-btn:hover {
          gap: 12px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .event-modal {
          background: #fff;
          border-radius: 10px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #fff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          color: #333;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: #c41e3a;
          color: #fff;
        }

        .modal-image {
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
        }

        .modal-body {
          padding: 40px;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .event-info-modal {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }

        .event-info-modal .info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #666;
        }

        .event-info-modal .info-item i {
          color: #c41e3a;
          font-size: 18px;
        }

        .modal-text {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .event-card {
            margin-bottom: 30px;
          }

          .modal-image {
            height: 250px;
          }

          .modal-body {
            padding: 25px;
          }

          .modal-title {
            font-size: 22px;
          }

          .close-btn {
            width: 35px;
            height: 35px;
          }

          .event-info-modal {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </Layout>
  );
}
