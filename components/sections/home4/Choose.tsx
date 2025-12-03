import Link from "next/link";
import React from "react";

const ChooseFoodSection = () => {
  const menuItems = [
    {
      id: 1,
      img: "assets/images/menu/menu-12.png",
      title: "Cheese Pizza",
      desc: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
      price: 210,
    },
    {
      id: 2,
      img: "assets/images/menu/menu-13.png",
      title: "Chicken Pizza",
      desc: "Basil bliss, sun-kissed tomatoes, and mozzarella dance on artisan crust",
      price: 110,
    },
    {
      id: 3,
      img: "assets/images/menu/menu-14.png",
      title: "Garden Veggie",
      desc: "Zesty Cali celebration: fresh veggies, bold flavors, golden thin-crust",
      price: 220,
    },
    {
      id: 4,
      img: "assets/images/menu/menu-15.png",
      title: "Bacon Cheese",
      desc: "Basil bliss, sun-kissed tomatoes, and mozzarella dance on artisan crust",
      price: 180,
    },
    {
      id: 5,
      img: "assets/images/menu/menu-16.png",
      title: "Capriciosa Pizza",
      desc: "Zesty Cali celebration: fresh veggies, bold flavors, golden thin-crust",
      price: 150,
    },
    {
      id: 6,
      img: "assets/images/menu/menu-17.png",
      title: "Pepperoni Pizza",
      desc: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
      price: 170,
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
                Indulge in the extraordinary with Our Special Pizza. A tantalizing
                blend of succulent toppings, premium cheeses, and a secret sauce,
                crafted to perfection.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {menuItems.map(({ id, img, title, desc, price }) => (
            <div key={id} className="col-xl-4 col-md-6 col-sm-12">
              <div className="menu-item style-six mb-30 text-center wow fadeInUp">
                <div className="menu-thumbnail">
                  <img src={img} alt={`Menu Image for ${title}`} />
                </div>
                <div className="menu-info">
                  <h3 className="title">
                    <Link href="/menu-details">{title}</Link>
                  </h3>
                  <p>{desc}</p>
                  <p className="price">
                    <span className="currency">$</span>
                    {price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseFoodSection;
