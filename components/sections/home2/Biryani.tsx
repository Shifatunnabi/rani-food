import Image from 'next/image';
import Link from 'next/link';;

export default function BiryaniMenuSection() {
  
  const menuItems = [
    {
      title: 'Foodix Special Beef biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 25,
      img: '/assets/images/home-beef/menu/menu-1.jpg',
    },
    {
      title: 'Indian Chicken Tikka Biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 29,
      img: '/assets/images/home-beef/menu/menu-2.jpg',
    },
    {
      title: 'Hyderabadi Dum Biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 35,
      img: '/assets/images/home-beef/menu/menu-3.jpg',
    },
    {
      title: 'Pilaf Bowl Biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 32,
      img: '/assets/images/home-beef/menu/menu-4.jpg',
    },
    {
      title: 'Vegetable Pulav Biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 40,
      img: '/assets/images/home-beef/menu/menu-5.jpg',
    },
    {
      title: 'Iranian Beef Biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 42,
      img: '/assets/images/home-beef/menu/menu-6.jpg',
    },
    {
      title: 'Mutton Dum Biryani',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 42,
      img: '/assets/images/home-beef/menu/menu-7.jpg',
    },
    {
      title: 'Curried Rice and Beef',
      description: 'Indulgent mac and cheese with truffle essence.',
      price: 39,
      img: '/assets/images/home-beef/menu/menu-8.jpg',
    },
  ];

  return (
    <section className="biryani-menu-section pt-130 pb-100 gray-bg">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">
                <i className="flaticon-food-tray"></i>Biryani Menu
              </span>
              <h2>Delights of Our Menu</h2>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="row">
          {menuItems.map((item, index) => (
            <div className="col-xl-6" key={index}>
              <div className="menu-item style-ten mb-30 wow fadeInDown">
                <div className="menu-thumbnail position-relative">
                  <Image
                    src={item.img}
                    alt={`${item.title} Thumbnail`}
                    width={600}
                    height={400}
                  />
                  <div className="menu-after">
                    <Image
                      src="/assets/images/home-beef/menu/menu-after.png"
                      alt="Menu background overlay"
                      width={600}
                      height={400}
                    />
                  </div>
                </div>
                <div className="menu-info">
                  <h3 className="title">
                    <Link href="/menu-details">{item.title}</Link>
                  </h3>
                  <p>{item.description}</p>
                  <p className="price">
                    <span className="currency">$</span>
                    {item.price}
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
