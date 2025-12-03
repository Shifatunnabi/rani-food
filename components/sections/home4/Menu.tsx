'use client';

import React, { useState, KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MenuItem = {
  id: string;
  title: string;
  image: string;
  price: string;
  rating: string;
  description: string;
  href?: string;
};

type Category = {
  id: string;
  title: string;
  items: MenuItem[];
};

const menuCategories = [
  {
    id: "cat1",
    name: "Goldmark",
    items: [
      {
        title: "Chocolate Cookies",
        description: "Filled with rich chocolate chips for a delightful treat",
        price: 121,
        image: "assets/images/category_products/gm_cookie.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
      {
        title: "EZZE Orange Mini",
        description: "Refreshing orange-flavored mini drink to quench your thirst",
        price: 159,
        image: "assets/images/category_products/gm_drink.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
      {
        title: "MUFFY Muffin Cake",
        description: "A soft and moist cake perfect for any occasion",
        price: 210,
        image: "assets/images/category_products/gm_cake.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
    ],
  },
  {
    id: "cat2",
    name: "Ringo",
    items: [
      {
        title: "Ringo Fried Peas",
        description: "Crispy fried peas seasoned to perfection for a savory snack",
        price: 121,
        image: "assets/images/category_products/rng_motor.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
      {
        title: "Ringo Potato Sticks",
        description: "Crunchy potato sticks that are perfect for dipping and snacking",
        price: 159,
        image: "assets/images/category_products/rng-chips.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
      // {
      //   title: "Ringo",
      //   description: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
      //   price: 210,
      //   image: "assets/images/menu/menu-21.png",
      //   hoverImage: "assets/images/menu/hover-af.png",
      // },
    ],
  },

  {
    id: "cat3",
    name: "Rani Foods",
    items: [
      {
        title: "Chilli Powder",
        description: "Spicy and vibrant chili powder to add heat to your dishes",
        price: 121,
        image: "assets/images/category_products/rani_masala.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
      {
        title: "Tumeric Powder",
        description: "Bright and earthy turmeric powder known for its vibrant color and health benefits",
        price: 159,
        image: "assets/images/category_products/rani_holud.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
      {
        title: "Rani Laccha",
        description: "Traditional layered flatbread known for its flaky texture and rich flavor",
        price: 210,
        image: "assets/images/category_products/rani_laccha.jpg",
        hoverImage: "assets/images/menu/hover-af.png",
      },
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("cat1");

  return (
    <section className="menu-section pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">Choose your flavor</span>
              <h2>Best from Categories</h2>
              <p>
                Indulge in the extraordinary with our curated selection of gourmet
                delights, crafted to elevate your culinary experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="foodix-tabs style-two mb-80">
              <ul className="nav nav-tabs wow fadeInUp">
                {menuCategories.map(({ id, name }) => (
                  <li key={id}>
                    <button
                      className={`nav-link ${activeTab === id ? "active" : ""}`}
                      onClick={() => setActiveTab(id)}
                      type="button"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content wow fadeInDown">
              {menuCategories.map(({ id, items }) => (
                <div
                  key={id}
                  className={`tab-pane fade ${
                    activeTab === id ? "show active" : ""
                  }`}
                  id={id}
                >
                  <div className="row justify-content-center">
                    {items.map(
                      ({ title, description, price, image, hoverImage }, idx) => (
                        <div
                          key={idx}
                          className="col-xl-4 col-md-6 col-sm-12"
                        >
                          <div className="menu-item style-seven text-center mb-35">
                            <div className="menu-thumbnail">
                              <img src={image} alt="menu item" />
                              <div className="hover-img">
                                <img src={hoverImage} alt="Hover Image" />
                              </div>
                            </div>
                            <div className="menu-info">
                              <h3 className="title">
                                <Link href="/">{title}</Link>
                              </h3>
                              <p>{description}</p>
                              {/* <p className="price">
                                <span className="currency">$</span>
                                {price}
                              </p> */}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
