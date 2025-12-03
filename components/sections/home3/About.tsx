import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="about-section pt-130 pb-80 gray-bg">
      <div className="container">
        <div className="row align-items-center">
          {/*=== About Content Column ===*/}
          <div className="col-lg-6">
            {/*=== Section Content Box ===*/}
            <div className="section-content-box mb-50">
              <div className="section-title mb-35 wow fadeInDown">
                <span className="sub-title">About Us</span>
                <h2>Our new Town&apos;s House</h2>
                <p>
                  Delighting locals with our unparalleled burgers, each bite embodies our dedication
                  to excellence and passion for perfect taste.
                </p>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  {/*=== Iconic Box ===*/}
                  <div className="iconic-box style-three mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div className="icon">
                      <Image
                        src="/assets/images/icon/icon-5.svg"
                        alt="icon"
                        width={50}
                        height={50}
                        
                      />
                    </div>
                    <div className="content">
                      <h5>Fresh Perspective on Ideal Eating.</h5>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  {/*=== Iconic Box ===*/}
                  <div className="iconic-box style-three mb-30 wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <Image
                        src="/assets/images/icon/icon-6.svg"
                        alt="icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="content">
                      <h5>Premium Natural Ingredients.</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/*=== About Button ===*/}
              <div className="about-button wow fadeInUp" data-wow-delay=".4s">
                <Link href="/about" className="theme-btn style-one inline-block">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/*=== About Images Column ===*/}
          <div className="col-lg-6">
            <div className="section-image-box style-two mb-20">
              <div className="row">
                <div className="col-lg-6">
                  {/*=== About Image 1 ===*/}
                  <div className="image-box mb-30 wow fadeInDown" data-wow-delay=".2s">
                    <Image
                      src="/assets/images/about/about-3.jpg"
                      alt="About Image 1"
                      width={300}
                      height={350}
                      className="w-full rounded-lg"
                    />
                  </div>

                  {/*=== About Image 2 ===*/}
                  <div className="image-box mb-30 wow fadeInUp" data-wow-delay=".3s">
                    <Image
                      src="/assets/images/about/about-4.jpg"
                      alt="About Image 2"
                      width={300}
                      height={350}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  {/*=== About Image 3 ===*/}
                  <div className="image-box mb-30 wow fadeInRight" data-wow-delay=".4s">
                    <Image
                      src="/assets/images/about/about-5.jpg"
                      alt="About Image 3"
                      width={320}
                      height={700}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
