import Image from 'next/image';
import Link from 'next/link';

export default function BannerSection() {
  
  const banners = [
    {
      title: 'Grilled beef steak',
      description: 'Juicy grilled beef steak, seasoned to perfection, tender with smoky flavors.',
      price: 79.0,
      bgImage: '/assets/images/home-beef/banner/banner-bg-1.jpg',
      img: '/assets/images/home-beef/banner/bn-img-1.png',
      link: '/contact',
    },
    {
      title: 'Dum Beef biryani',
      description: 'Aromatic rice with tender beef, rich spices, and deep, savory flavors.',
      price: 89.0,
      bgImage: '/assets/images/home-beef/banner/banner-bg-2.jpg',
      img: '/assets/images/home-beef/banner/bn-img-2.png',
      link: '/contact',
    },
  ];

  return (
    <section className="banner-section pb-90">
      <div className="container">
        <div className="row">
          {banners.map((banner, index) => (
            <div className="col-lg-6" key={index}>
              <div className="foodix-banner-item style-two mb-40 wow fadeInDown">
                <div
                  className="banner-inner-wrap bg_cover position-relative"
                  style={{ backgroundImage: `url(${banner.bgImage})` }}
                >
                  <div className="banner-img">
                    <Image
                      src={banner.img}
                      alt={`${banner.title} Image`}
                      width={290}
                      height={290}
                    />
                  </div>
                  <div className="banner-content">
                    <h2>{banner.title}</h2>
                    <p>{banner.description}</p>
                    <p className="price">
                      <span className="currency">$</span>
                      {banner.price.toFixed(2)}
                    </p>
                    <Link href={banner.link} className="theme-btn style-one">
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
