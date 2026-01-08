"use client";
import React from "react";

const BoardOfDirectorsSection = () => {
  const directors = [
    {
      name: "Mr. Mohammed Bashir",
      position: "Managing Director",
      img: "assets/images/directors/md.jpg",
      socials: [
        { href: "#", icon: "fab fa-facebook-f" },
        { href: "#", icon: "fab fa-twitter" },
        { href: "#", icon: "fab fa-instagram" },
      ],
    },
    {
      name: "Ms. Rokeya Begum",
      position: "Chairman",
      img: "assets/images/directors/ch.jpg",
      socials: [
        { href: "#", icon: "fab fa-facebook-f" },
        { href: "#", icon: "fab fa-twitter" },
        { href: "#", icon: "fab fa-instagram" },
      ],
    },
    {
      name: "Ms. Mehnaz Bint Bashir",
      position: "Director Operations",
      img: "assets/images/directors/do.jpg",
      socials: [
        { href: "#", icon: "fab fa-facebook-f" },
        { href: "#", icon: "fab fa-twitter" },
        { href: "#", icon: "fab fa-instagram" },
      ],
    },
    {
      name: "Mr. Khaled Bin Bashir",
      position: "Director (Finance & Marketing)",
      img: "assets/images/directors/dfm.jpeg",
      socials: [
        { href: "#", icon: "fab fa-facebook-f" },
        { href: "#", icon: "fab fa-twitter" },
        { href: "#", icon: "fab fa-instagram" },
      ],
    },
    {
      name: "Mr. Rafsan Bin Bashir",
      position: "Director (Factory Operation)",
      img: "assets/images/directors/dfo.jpg",
      socials: [
        { href: "#", icon: "fab fa-facebook-f" },
        { href: "#", icon: "fab fa-twitter" },
        { href: "#", icon: "fab fa-instagram" },
      ],
    },
  ];

  return (
    <section className="directors-section pt-120 pb-85">
      <style jsx>{`
        .directors-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        .directors-row {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
        }

        .directors-row.first-row {
          justify-content: flex-start;
        }

        .directors-row.second-row {
          justify-content: center;
        }

        .director-card {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #fff;
          width: calc(33.333% - 20px);
          flex-shrink: 0;
        }

        .director-card .member-image {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .director-card .member-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          object-position: center;
          display: block;
          background: #f5f5f5;
        }

        .director-card .member-info {
          position: relative;
          padding: 25px 20px;
          text-align: center;
          border-left: 3px solid #c41e3a;
          border-right: 3px solid #c41e3a;
          border-bottom: 3px solid #c41e3a;
          background: #fff;
          overflow: hidden;
          z-index: 1;
        }

        .director-card .member-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #c41e3a;
          transition: left 0.4s ease;
          z-index: -1;
        }

        .director-card:hover .member-info::before {
          left: 0;
        }

        .director-card .member-info .title,
        .director-card .member-info .position {
          transition: color 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .director-card:hover .member-info .title,
        .director-card:hover .member-info .position {
          color: #fff;
        }

        .director-card .member-info .title {
          margin: 0 0 8px 0;
          font-size: 22px;
          font-weight: 600;
          color: #333;
        }

        .director-card .member-info .position {
          display: block;
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        @media (max-width: 992px) {
          .directors-row {
            flex-wrap: wrap;
          }

          .director-card {
            width: calc(50% - 15px);
          }
        }

        @media (max-width: 576px) {
          .directors-row {
            flex-direction: column;
            align-items: center;
          }

          .directors-row.second-row {
            align-items: center;
          }

          .director-card {
            width: 100%;
            max-width: 100%;
          }

          .director-card .member-image img {
            height: 350px;
          }
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">Meet Our Leaders</span>
              <h2>Board of Directors</h2>
              <p>
                Leading with vision and dedication, our board of directors
                drives Rani Food Industries toward excellence and innovation in
                the food sector.
              </p>
            </div>
          </div>
        </div>

        <div className="directors-wrapper">
          <div className="directors-row first-row">
            {directors.slice(0, 3).map((director, index) => (
              <div key={index} className="director-card wow fadeInUp">
                <div className="member-image">
                  <img src={director.img} alt={`Director ${director.name}`} />
                </div>
                <div className="member-info">
                  <h4 className="title">{director.name}</h4>
                  <span className="position">{director.position}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="directors-row second-row">
            {directors.slice(3, 5).map((director, index) => (
              <div key={index + 3} className="director-card wow fadeInUp">
                <div className="member-image">
                  <img src={director.img} alt={`Director ${director.name}`} />
                </div>
                <div className="member-info">
                  <h4 className="title">{director.name}</h4>
                  <span className="position">{director.position}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectorsSection;
