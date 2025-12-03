import Image from 'next/image';
import Link from 'next/link';


export default function SteakMenuSection() {
  
  const steaks = [
    { name: 'Flat Iron Steak', price: 46, img: '/assets/images/home-beef/menu/steak1.png' },
    { name: 'T-Bone Steak', price: 41, img: '/assets/images/home-beef/menu/steak2.png' },
    { name: 'Tomahawk Steak', price: 35, img: '/assets/images/home-beef/menu/steak3.png' },
    { name: 'Ribeye Steak', price: 39, img: '/assets/images/home-beef/menu/steak4.png' },
  ];

  return (
    <section className="steak-menu-section pt-80 pb-90">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">
                <i className="flaticon-food-tray"></i> Steak House
              </span>
              <h2>Savor the Finest Steaks</h2>
            </div>
          </div>
        </div>

        {/* Steak Menu Grid */}
        <div className="row">
          {steaks.map((steak, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div
                className="menu-item style-eleven mb-40 bg_cover wow fadeInDown"
                style={{ backgroundImage: 'url(/assets/images/home-beef/menu/menu-bg1.jpg)' }}
              >
                <div className="menu-thumbnail relative">
                  <Image
                    src={steak.img}
                    alt={steak.name}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="cart-button absolute top-2 right-2 bg-yellow-500 p-2 rounded-full text-white hover:bg-yellow-600 transition">
                    <Link href="/cart">
                      <i className="far fa-shopping-basket"></i>
                    </Link>
                  </div>
                </div>
                <div className="menu-info text-center mt-4">
                  <h3 className="title">
                    <Link href="/menu-details">{steak.name}</Link>
                  </h3>
                  <p className="price">
                    <span className="currency">$</span>{steak.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
