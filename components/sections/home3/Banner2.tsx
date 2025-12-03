import Image from 'next/image';
import Link from 'next/link';

export default function BannerSection() {
  return (
    <section className="foodix-banner-section gray-bg">
      {/*=== Foodix Banner ===*/}
      <div className="foodix-banner-v1">
        <div className="container-fluid">
          <div className="row">
            {/*=== Banner Item 1 ===*/}
            <div className="col-xl-6">
              <div className="foodix-banner-item style-one mb-40 wow fadeInLeft" data-wow-delay=".3s">
                <div
                  className="banner-inner-wrap bg_cover relative"
                  style={{ backgroundImage: 'url(/assets/images/bg/banner-bg-1.jpg)' }}
                >
                  <div className="banner-img absolute right-0 bottom-0">
                    <Image
                      src="/assets/images/bg/bn-img-3.png"
                      alt="Cheese Burger"
                      width={655}
                      height={482}
                      className="object-contain"
                    />
                  </div>

                  <div className="banner-content relative z-[2] p-8">
                    <h2 className="text-4xl font-bold text-white mb-2">Cheese Burger</h2>
                    <p className="text-white/90 mb-4 max-w-md">
                      Grilled beef, melted cheese, bun — classic American cheeseburger delightfully
                      satisfies taste buds.
                    </p>
                    <p className="price text-2xl text-theme font-semibold mb-4">
                      <span className="currency text-base align-top">$</span>79.00
                    </p>
                    <Link href="/menu-details" className="theme-btn style-one inline-block">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/*=== Banner Item 2 ===*/}
            <div className="col-xl-6">
              <div className="foodix-banner-item style-one mb-40 wow fadeInRight" data-wow-delay=".3s">
                <div
                  className="banner-inner-wrap bg_cover relative"
                  style={{ backgroundImage: 'url(/assets/images/bg/banner-bg-1.jpg)' }}
                >
                  <div className="banner-img absolute right-0 bottom-0">
                    <Image
                      src="/assets/images/bg/bn-img-4.png"
                      alt="Bliss Burger"
                      width={562}
                      height={410}
                      className="object-contain"
                    />
                  </div>

                  <div className="banner-content relative z-[2] p-8">
                    <h2 className="text-4xl font-bold text-white mb-2">Bliss Burger</h2>
                    <p className="text-white/90 mb-4 max-w-md">
                      A mouthwatering blend of juicy beef, melted cheese, and savory perfection.
                    </p>
                    <p className="price text-2xl text-theme font-semibold mb-4">
                      <span className="currency text-base align-top">$</span>89.00
                    </p>
                    <Link href="/menu-details" className="theme-btn style-one inline-block">
                      Order Now
                    </Link>
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
