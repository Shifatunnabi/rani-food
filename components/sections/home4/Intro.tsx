'use client';
import React from "react";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div
        className="intro-wrapper_one bg_cover pt-130 pb-70"
        style={{ backgroundImage: "url(assets/images/bg/intro-bg-3.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Content Box */}
              <div className="section-content-box text-center wow fadeInDown">
                <a
                  href="https://www.youtube.com/watch?v=Xj4E0Zry6K4"
                  className="video-popup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play"></i>
                </a>
                <div className="section-title text-white mb-50">
                  <h2>
                    Possibilities Between Every <br /> Sushi Bite
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
