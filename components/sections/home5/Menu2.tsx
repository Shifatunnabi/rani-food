import Image from 'next/image';

const MenuSection = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Rainbow Sushi',
      price: '59.00',
      description:
        'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
    },
    {
      id: 2,
      title: 'Octopus Sushi',
      price: '59.00',
      description:
        'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
    },
    {
      id: 3,
      title: 'Spicy Tuna Sushi',
      price: '59.00',
      description:
        'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
    },
    {
      id: 4,
      title: 'Salmon Nigiri',
      price: '59.00',
      description:
        'A vibrant medley of fresh fish atop a bed of seasoned rice, creating stunning and delicious Rainbow Sushi.',
    },
  ];

  return (
    <section className="menu-section pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Our Latest menu</span>
              <h2>Today best offer</h2>
              <p>
                Indulge in an array of meticulously crafted sushi rolls, artfully
                blending <br /> fresh ingredients for a delightful taste
                experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="section-content-box mb-50">
              {menuItems.map(({ id, title, price, description }) => (
                <div
                  key={id}
                  className="menu-item style-two mb-40 wow fadeInUp"
                >
                  <div className="menu-info">
                    <h4>
                      {title} <span className="price">${price}</span>
                    </h4>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="section-image-box style-two mb-50 text-end wow fadeInRight">
              <div className="image-box">
                <Image
                  src="/assets/images/gallery/figure-1.jpg"
                  alt="Menu figure"
                  width={600}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
