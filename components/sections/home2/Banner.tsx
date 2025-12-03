import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-wrapper-five p-r">
        {/* Parallax Elements */}
        <div className="elements el-one scene">
          <span data-depth=".5">
            <img src="assets/images/home-beef/hero/el-1.png" alt="element" />
          </span>
        </div>
        <div className="elements el-two scene">
          <span data-depth=".10">
            <img src="assets/images/home-beef/hero/el-2.png" alt="element" />
          </span>
        </div>
        <div className="elements el-three scene">
          <span data-depth=".15">
            <img src="assets/images/home-beef/hero/el-3.png" alt="element" />
          </span>
        </div>
        <div className="elements el-four scene">
          <span data-depth=".20">
            <img src="assets/images/home-beef/hero/el-4.png" alt="element" />
          </span>
        </div>
        <div className="elements el-five scene">
          <span data-depth=".25">
            <img src="assets/images/home-beef/hero/el-5.png" alt="element" />
          </span>
        </div>
        <div className="elements el-six scene">
          <span data-depth=".35">
            <img src="assets/images/home-beef/hero/el-5.png" alt="element" />
          </span>
        </div>

        {/* Background Image */}
        <div className="hero-bg-img text-center">
          <img src="assets/images/home-beef/hero/hero-beef-bg.png" alt="Food Background" />
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="wow fadeInDown" data-wow-delay=".6s">Let’s Eat</h1>
              </div>

              <div className="hero-image text-center">
                <img
                  src="assets/images/home-beef/hero/hero-beef1.png"
                  className="wow fadeInUp"
                  alt="Hero Beef"
                />

                <div className="after-image wow zoomIn">
                  <div className="image scene">
                    <span data-depth=".25">
                      <img
                        src="assets/images/home-beef/hero/el-6.png"
                        alt="After Element Image"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
