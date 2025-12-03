import Image from 'next/image';
import Link from 'next/link';


export default function WhyChooseSection() {
  
  return (
    <section className="why-choose-section pb-80">
      <div className="container">
        <div className="row">
          {/*=== Section Image Box ===*/}
          <div className="col-lg-6">
            <div className="section-image-box style-three wow fadeInRight">
              <div className="discount-item">
                <div
                  className="discount-inner bg_cover"
                  style={{
                    backgroundImage: 'url(/assets/images/home-beef/gallery/discount-bg.png)',
                  }}
                >
                  <h2>
                    50% <span>Discount</span>
                  </h2>
                </div>
              </div>
              <Image
                src="/assets/images/home-beef/gallery/choose-bg1.png"
                alt="Choose Background"
                width={600}
                height={500}
              />
              <div className="fill-text">Delicious</div>
            </div>
          </div>

          {/*=== Section Content Box ===*/}
          <div className="col-lg-6">
            <div className="section-content-box mb-50">
              {/*=== Section Title ===*/}
              <div className="section-title wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Why Choose US
                </span>
                <h2>Delicias about fresh flavorful dining</h2>
              </div>

              <p className="wow fadeInUp">
                We are passionate about serving fresh, flavorful dishes crafted with the finest
                ingredients. Every meal is thoughtfully prepared
              </p>

              <div className="row">
                <div className="col-xl-6 col-lg-12 col-sm-6">
                  {/*=== Iconic Box ===*/}
                  <div className="iconic-box style-five mb-30 wow fadeInDown">
                    <div className="icon">
                      <Image src="/assets/images/icon/icon-7.svg" alt="Icon" width={50} height={50} />
                    </div>
                    <div className="content">
                      <h3 className="title">10+</h3>
                      <p>Exclusive Biryani</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-12 col-sm-6">
                  {/*=== Iconic Box ===*/}
                  <div className="iconic-box style-five mb-30 wow fadeInDown">
                    <div className="icon">
                      <Image src="/assets/images/icon/icon-8.svg" alt="Icon" width={50} height={50} />
                    </div>
                    <div className="content">
                      <h3 className="title">50+</h3>
                      <p>Premium Kebab</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-button wow fadeInUp">
                <Link href="/about" className="theme-btn style-one">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
