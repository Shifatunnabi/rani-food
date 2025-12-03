import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="about-section pt-90 pb-80">
      <div className="container">
        <div className="row">
          {/*=== About Image ===*/}
          <div className="col-xl-6">
            <div className="about-image-box mb-50 text-center text-xl-start wow fadeInLeft">
              <Image
                src="/assets/images/about/about-6.png"
                alt="About Image"
                width={550}
                height={500}
                className="img-fluid"
                priority
              />
            </div>
          </div>

          {/*=== About Content ===*/}
          <div className="col-xl-6">
            <div className="section-content-box mb-50">
              <div className="section-title wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i> About us
                </span>
                <h2>Delicia&apos;s about fresh flavorful dining</h2>
              </div>

              <p className="wow fadeInUp">
                We are passionate about serving fresh, flavorful dishes crafted with the finest
                ingredients. Every meal is thoughtfully prepared to deliver a memorable dining
                experience you&apos;ll love.
              </p>

              {/*=== Info Boxes ===*/}
              <div className="row">
                <div className="col-sm-6">
                  <div className="iconic-box style-five mb-30 wow fadeInDown" data-wow-delay=".3s">
                    <div className="icon">
                      <Image
                        src="/assets/images/icon/icon-7.svg"
                        alt="Icon"
                        width={60}
                        height={60}
                        className="img-fluid"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">1500+</h3>
                      <p>Total Food Item</p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="iconic-box style-five mb-30 wow fadeInDown" data-wow-delay=".4s">
                    <div className="icon">
                      <Image
                        src="/assets/images/icon/icon-8.svg"
                        alt="Icon"
                        width={60}
                        height={60}
                        className="img-fluid"
                      />
                    </div>
                    <div className="content">
                      <h3 className="title">500+</h3>
                      <p>Branch office</p>
                    </div>
                  </div>
                </div>
              </div>

              {/*=== Read More Button ===*/}
              <div className="about-button wow fadeInUp" data-wow-delay=".5s">
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
