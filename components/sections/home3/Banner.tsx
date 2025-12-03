'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSectionTwo() {
  return (
    <section className="hero-section">
      {/*=== Hero Wrapper ===*/}
      <div
        className="hero-wrapper-two bg_cover relative overflow-hidden"
        style={{ backgroundImage: 'url(/assets/images/hero/hero-two_bg.jpg)' }}
      >
        {/*=== Shapes ===*/}
        <div className="shape shape-one scene absolute" data-depth=".5">
          <span>
            <Image
              src="/assets/images/hero/shape-1.png"
              alt="shape image"
              width={103}
              height={135}
            />
          </span>
        </div>

        <div className="shape shape-two scene absolute" data-depth=".7">
          <span>
            <Image
              src="/assets/images/hero/shape-3.png"
              alt="shape image"
              width={121}
              height={120}
            />
          </span>
        </div>

        <div className="shape shape-three scene absolute" data-depth=".8">
          <span>
            <Image
              src="/assets/images/hero/shape-4.png"
              alt="shape image"
              width={121}
              height={120}
            />
          </span>
        </div>

        {/*=== Hero Image ===*/}
        <div className="hero-image relative text-center xl:text-right">
          <Image
            src="/assets/images/hero/hero-two_img_two.png"
            className="wow fadeInRight inline-block"
            data-wow-delay=".65s"
            alt="Hero Image"
            width={885}
            height={549}
            priority
          />

          <div className="text-shape text-one wow bounceInUp" data-wow-delay=".8s">
            <span>
              <Image
                src="/assets/images/hero/text-01.png"
                alt="Text Shape 1"
                width={464}
                height={357}
              />
            </span>
          </div>

          <div className="text-shape text-two wow bounceInRight" data-wow-delay=".9s">
            <span>
              <Image
                src="/assets/images/hero/text-02.png"
                alt="Text Shape 2"
                width={129}
                height={127}
              />
            </span>
          </div>
        </div>

        {/*=== Hero Content ===*/}
        <div className="container relative z-[2]">
          <div className="row">
            <div className="col-lg-7">
              <div className="hero-content">
                <span className="tag-line wow fadeInUp inline-block text-theme mb-3" data-wow-delay=".4s">
                  The best in town
                </span>

                <h1 className="wow fadeInDown text-5xl md:text-6xl font-bold" data-wow-delay=".5s">
                  The hot <br />
                  <span className="text-theme">Boss Burger</span>
                </h1>

                <p className="wow fadeInDown mt-4 mb-6 text-gray-600 max-w-xl" data-wow-delay=".6s" >
                  Savor the perfection of our Savory Symphony Burger — flame-grilled Angus, aged cheddar, and handcrafted sauces for the ultimate taste.
                </p>

                <div className="hero-button wow fadeInDown" data-wow-delay=".7s">
                  <Link href="/contact" className="theme-btn style-one inline-block">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
