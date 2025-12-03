import Link from "next/link";
import React from "react";

const OrderBgSection = () => {
  return (
    <section className="order-bg-section">
      {/*=== Order BG Wrapper ===*/}
      <div
        className="order-bg-wrapper bg_cover pt-50"
        style={{ backgroundImage: "url(assets/images/bg/order-bg2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Section Content Box ===*/}
              <div className="section-content-box text-white mb-45 wow fadeInLeft">
                {/*=== Section Title ===*/}
                <div className="section-title mb-40">
                  <span className="sub-title">fast delivery</span>
                  <h2>
                    Speedy Delivery for <br />
                    Your Burger!
                  </h2>
                  <p>
                    Get your burger lightning-fast! Swift delivery ensures your favorite
                    flavors reach you promptly for ultimate satisfaction.
                  </p>
                </div>
                <Link href="/contact" className="theme-btn style-one">
                  Order Now
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Order Image Box ===*/}
              <div className="order-image-box-two mb-45 wow fadeInRight">
                <img src="assets/images/gallery/order-1.png" alt="delivery image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderBgSection;
