import Link from "next/link";
import React from "react";

const ChooseFoodSection = () => {
  const menuItems = [
    {
      id: 1,
      img: "assets/images/product/1.jpg",
      title: "Yo Yo Biscuit",
      desc: "Melting mozzarella atop a crisp crust a timeless cheese",
      price: 20,
    },
    {
      id: 2,
      img: "assets/images/product/2.jpg",
      title: "Muffin Cake",
      desc: "Basil bliss, sun-kissed tomatoes, and mozzarella dance on artisan crust",
      price: 10,
    },
    {
      id: 3,
      img: "assets/images/product/3.jpg",
      title: "Rani Chilli Powder",
      desc: "Zesty Cali celebration: fresh veggies, bold flavors, golden thin-crust",
      price: 88,
    },
    {
      id: 4,
      img: "assets/images/product/4.jpg",
      title: "Chocolate Cookies",
      desc: "Basil bliss, sun-kissed tomatoes, and mozzarella dance on artisan crust",
      price: 50,
    },
    {
      id: 5,
      img: "assets/images/product/5.jpg",
      title: "EZZE orange drink",
      desc: "Zesty Cali celebration: fresh veggies, bold flavors, golden thin-crust",
      price: 85,
    },
    {
      id: 6,
      img: "assets/images/product/6.jpg",
      title: "Aristro Cookies",
      desc: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
      price: 150,
    },
  ];

  return (
    <section className="choose-your-food-section pt-120 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">Choose your flavor</span>
              <h2>the best food in town</h2>
              <p>
              Discover our carefully curated selection of delicious, locally sourced dishes crafted to satisfy every craving.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {menuItems.map(({ id, img, title, desc, price }) => (
            <div key={id} className="col-xl-4 col-md-6 col-6">
              <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                <div className="menu-thumbnail">
                  <img src={img} alt={`Menu Image for ${title}`} />
                </div>
                <div className="menu-info">
                  <h3 className="title">
                    <Link href="/">{title}</Link>
                  </h3>
                  <p>{desc}</p>
                  <p className="price">
                    <span className="currency">BDT</span>
                    {price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="button-wrapper text-center mt-30 wow fadeInUp">
              <Link href="/" className="theme-btn style-one">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseFoodSection;
