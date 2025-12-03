import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div 
        className="hero-wrapper bg_cover" 
        style={{ backgroundImage: "url('assets/images/hero/home-one_img-one.jpg')" }}
      >
        <div className="image-one scene">
          <span data-depth=".3">
            <img src="assets/images/hero/image-one.png" alt="" />
          </span>
        </div>
        <div className="shape shape-one scene">
          <span data-depth=".5">
            <img src="assets/images/hero/shape-1.png" alt="shape image" />
          </span>
        </div>
        <div className="shape shape-two scene">
          <span data-depth=".7">
            <img src="assets/images/hero/shape-3.png" alt="shape image" />
          </span>
        </div>
        <div className="shape shape-three scene">
          <span data-depth=".8">
            <img src="assets/images/hero/shape-2.png" alt="shape image" />
          </span>
        </div>
        <div className="shape shape-four scene">
          <span data-depth=".9">
            <img src="assets/images/hero/shape-4.png" alt="shape image" />
          </span>
        </div>
        <div className="shape shape-five scene">
          <span data-depth=".4">
            <img src="assets/images/hero/shape-5.png" alt="shape image" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="hero-content">
                <span className="tag-line wow fadeInDown" data-wow-delay=".5s">
                  Hot for every Friday
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".6s">
                  Sushi Flavors Redefined
                </h1>
                <p className="wow fadeInDown" data-wow-delay=".7s">
                  Cluckin' Good Chicken Delight: A savory haven for chicken lovers offering 
                  meticulously crafted dishes bursting with flavor.
                </p>
                <div className="hero-button wow fadeInUp" data-wow-delay=".75s">
                  <Link href="/contact" className="theme-btn style-one">Order Now</Link>
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
