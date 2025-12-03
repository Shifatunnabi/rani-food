import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper_one p-r z-1 pt-105 pb-80">
        <div className="shape shape-one scene">
          <span data-depth=".3"><span className="circle"></span></span>
        </div>
        <div className="shape shape-two scene">
          <span data-depth=".4"><span className="circle"></span></span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="section-image-box style-one mb-50">
                <div className="image-box">
                  <div className="shape-element element-one scene">
                    <span data-depth=".2">
                      <img src="assets/images/about/shape/shape-1.png" alt="Leaf" />
                    </span>
                  </div>
                  <div className="shape-element element-two scene">
                    <span data-depth=".25">
                      <img src="assets/images/about/shape/shape-2.png" alt="Leaf" />
                    </span>
                  </div>
                  <img src="assets/images/about/about-1.png" alt="About Image" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-content-box mb-50">
                <div className="section-title section-title-left mb-20 wow fadeInDown">
                  <span className="sub-title">About Us</span>
                  <h2>Where Quality Meet Excelent Service</h2>
                </div>
                <p className="wow fadeInUp">
                  Discover the artistry of Sushi, a symphony of fresh flavors and textures. Our meticulously crafted bites showcase the perfect fusion of tradition...
                </p>
                <p className="wow fadeInDown">
                  Our Sushi offerings are a symphony of fresh, high-quality ingredients meticulously crafted into bite-sized...
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="iconic-box style-one mb-30 wow fadeInUp">
                      <div className="icon">
                        <img src="assets/images/icon/icon-1.svg" alt="icon" />
                      </div>
                      <div className="content">
                        <h5>Fresh Perspective on Ideal Eating.</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconic-box style-one mb-30 wow fadeInUp">
                      <div className="icon">
                        <img src="assets/images/icon/icon-2.svg" alt="icon" />
                      </div>
                      <div className="content">
                        <h5>Premium Natural Ingredients.</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInDown">
                  <Link href="/about" className="theme-btn style-one">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
