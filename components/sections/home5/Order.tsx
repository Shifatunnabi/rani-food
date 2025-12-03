import Image from 'next/image';

const OrderSection = () => {
  return (
    <section className="order-section">
      <div
        className="order-bg-wrapper pt-120 pb-65 bg_cover"
        style={{ backgroundImage: 'url(/assets/images/bg/order-bg1.jpg)' }}
      >
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-xl-6">
              <div className="section-content-box text-white">
                <div className="section-title section-title-left mb-50 wow fadeInDown">
                  <span className="sub-title">Fast delivery!</span>
                  <h2>
                    Fast Sushi Delivery
                    <br />
                    Guaranteed
                  </h2>
                </div>
                <p className="wow fadeInUp">
                  We promise prompt delivery of our delicious sushi, ensuring it
                  arrives swiftly, fresh, and guaranteed to delight your taste
                  buds.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="iconic-box style-two mb-40 wow fadeInDown">
                      <div className="icon">
                        <Image
                          src="/assets/images/icon/icon-3.svg"
                          alt="icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="content">
                        <h5>Arrives within 30 minutes or less, guaranteed!</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconic-box style-two mb-40 wow fadeInDown">
                      <div className="icon">
                        <Image
                          src="/assets/images/icon/icon-4.svg"
                          alt="icon"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="content">
                        <h5>Enjoy free shipping on orders over 85%.</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-button wow fadeInUp">
                  <a href="index.html" className="theme-btn style-one">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-xl-6">
              <div className="section-image-box mb-50 wow fadeInRight">
                <Image
                  src="/assets/images/gallery/delivary-1.png"
                  alt="Delivery image"
                  width={600}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
