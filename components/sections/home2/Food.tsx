import Image from 'next/image';
import Link from 'next/link';

export default function FoodSection() {
  return (
    <section className="our-food-section pt-130">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-xl-4 col-md-6">
            {/* Section Title */}
            <div className="section-title mb-50 wow fadeInDown">
              <span className="sub-title">
                <i className="flaticon-food-tray"></i>Food Items
              </span>
              <h2>Our Delicious Offerings</h2>
            </div>

            {/* Food Item */}
            <div className="food-item mb-50">
              <div className="food-thumbnail wow fadeInUp">
                <Image
                  src="/assets/images/home-beef/about/food1.jpg"
                  alt="Food Image"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-xl-4 col-md-6">
            {/* Food Item */}
            <div className="food-item mb-50 wow fadeInDown">
              <div className="food-thumbnail">
                <Image
                  src="/assets/images/home-beef/about/food2.jpg"
                  alt="Food Image"
                  width={400}
                  height={300}
                />
              </div>
            </div>

            {/* Order Box */}
            <div className="iconic-info-box style-two mb-50 wow fadeInUp">
              <div className="icon">
                <i className="far fa-phone-alt"></i>
              </div>
              <div className="content">
                <h4 className="title">Get online order now</h4>
                <h4>
                  <Link href="tel:08003458789">0-800-345-8789</Link>
                </h4>
                <Link href="/contact" className="theme-btn style-one">
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-4 col-md-12">
            <div className="food-item mb-50 wow fadeInRight">
              <div className="food-thumbnail">
                <Image
                  src="/assets/images/home-beef/about/food3.jpg"
                  alt="Food Image"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
