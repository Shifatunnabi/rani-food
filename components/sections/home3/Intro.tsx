import React from 'react';

export default function IntroSection() {
  return (
    <section className="intro-section pt-120 pb-120">
      <div className="container">
        <div
          className="intro-wrapper_three bg_cover pt-130 pb-125 relative"
          style={{ backgroundImage: `url('/assets/images/bg/intro-bg-2.jpg')` }}
        >
          {/* Optional overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="row relative z-10">
            <div className="col-lg-12">
              <div className="section-content-box text-white text-center wow fadeInDown">
                <div className="play-button mb-4">
                  <a
                    href="https://www.youtube.com/watch?v=Xj4E0Zry6K4"
                    className="video-popup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <h2 className="text-uppercase">
                  Possibilities Between Every <br /> Burger Bite.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
