import Link from "next/link";
import React from "react";

const BannerSection = () => {
  return (
    <section className="banner-section pt-130">
      <div className="container">
        <div className="row">
          {/* Full width banner */}
          <div className="col-lg-12">
            <div className="foodix-banner-item style-three mb-30 wow fadeInDown">
              <div
                className="banner-inner-wrap bg_cover"
                style={{ backgroundImage: "url(assets/images/bg/banner-bg-4.jpg)" }}
              >
                <div className="banner-img">
                  <img src="assets/images/logo/logo.png" alt="banner image" />
                </div>
                <div className="banner-content">
                  
                  <h3>Rani Food</h3>
                  <span className="">Pure Ground Spices</span>
                  <p>
                    Hygienically processed turmeric and spices, saving time while delivering authentic taste to your kitchen.
                  </p>
                  <Link href="/" className="theme-btn style-one">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Two half width banners */}
          <div className="col-xl-6">
            <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
              <div
                className="banner-inner-wrap bg_cover"
                style={{ backgroundImage: "url(assets/images/bg/banner-bg-2.jpg)" }}
              >
                <div className="banner-img">
                  <img src="assets/images/logo/ringo.png" alt="banner image" />
                </div>
                <div className="banner-content">
                  
                  <h3>Ringo</h3>
                  <span className="text-red">Crispy Chips & Snacks</span>
                  <p>
                  Innovative potato chips and fried peas with unique flavors. Known for the real taste of potato in crunchy, irresistible forms.
                  </p>
                  <Link href="/" className="theme-btn style-one">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
              <div
                className="banner-inner-wrap bg_cover"
                style={{ backgroundImage: "url(assets/images/bg/banner-bg-3.jpg)" }}
              >
                <div className="banner-img">
                  <img src="assets/images/logo/goldmark.png" alt="banner image" />
                </div>
                <div className="banner-content">
                  
                  <h3>Goldmark</h3>
                  <span className="text-red">Premium Biscuits & Cookies</span>
                  <p>
                   High quality, delicious biscuits and cookies with an extensive range of flavors including butter toast, cream cookies, and chocolate delights.
                  </p>
                  <Link href="/" className="theme-btn style-one">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
