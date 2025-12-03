'use client';
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("cat1");

  const categories = [
    {
      id: "cat1",
      title: "Beef",
      items: [
        {
          img: "/assets/images/product/product-1.jpg",
          title: "Beefy Bourbon Bliss",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-2.jpg",
          title: "Smoked Paprika Sirloin",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-3.jpg",
          title: "Thai Basil Beef Stir-Fry",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-4.jpg",
          title: "Korean BBQ Beef",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-5.jpg",
          title: "Beef Bourguignon",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-6.jpg",
          title: "Beef Wellington",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },

      ],
    },
    {
      id: "cat2",
      title: "Grilled",
      items: [
        {
          img: "/assets/images/product/product-1_1.jpg",
          title: "Chicken Wing Grilled",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_2.jpg",
          title: "Drumstick Grilled",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_3.jpg",
          title: "Pan Fried Whole Wing",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_4.jpg",
          title: "Korean Grilled Chicken",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_5.jpg",
          title: "Steak Grilled",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_6.jpg",
          title: "Grilled Sashlik",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
      ],
    },
    {
      id: "cat3",
      title: "Sizzling",
      items: [
        {
          img: "/assets/images/product/product-1_7.jpg",
          title: "Prawn Sizzling",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_8.jpg",
          title: "Thai Style Prawn Sizzling",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_9.jpg",
          title: "Chinese Prawn Pan Sizzling",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_10.jpg",
          title: "Korean Prawn Sizzling",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_11.jpg",
          title: "Seafood Sizzling",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_12.jpg",
          title: "Seafood Mussel Sizzling",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
      ],
    },
    {
      id: "cat4",
      title: "Steak Bliss",
      items: [
        {
          img: "/assets/images/product/product-1_13.jpg",
          title: "T-Bone Steak",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_14.jpg",
          title: "Tomahawk Steak",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_15.jpg",
          title: "Fillet Mignon Steak",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_16.jpg",
          title: "Flank Steak",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_17.jpg",
          title: "Ribeye Steak",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
        {
          img: "/assets/images/product/product-1_18.jpg",
          title: "Porterhouse Steak",
          price: 18.0,
          rating: "4.7(375)",
          list: ["4 Piece Chicken", "Spicy Sauce"],
        },
      ],
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Menu">
      <section className="menu-grid-section gray-bg pt-110 pb-100">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h2>CHOOSE MENU</h2>
                <p>
                  Indulge in an array of meticulously crafted sushi rolls, artfully blending
                  <br />
                  fresh ingredients for a delightful taste experience.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="row">
            <div className="col-lg-12">
              <div className="foodix-tabs style-two mb-70">
                <ul className="nav nav-tabs wow fadeInDown justify-content-center">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        className={`nav-link ${activeTab === cat.id ? "active" : ""}`}
                        onClick={() => setActiveTab(cat.id)}
                      >
                        {cat.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                {categories.map((cat) =>
                  activeTab === cat.id ? (
                    <div key={cat.id} className="tab-pane fade show active">
                      <div className="row">
                        {cat.items.map((item, i) => (
                          <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                            <div className="menu-item style-four mb-30">
                              <div className="menu-thumbnail">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  width={400}
                                  height={300}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="menu-info">
                                <div className="menu-meta">
                                  <span className="price">
                                    <span className="currency">$</span>
                                    {item.price.toFixed(2)}
                                  </span>
                                  <span className="rating">
                                    <i className="fas fa-star"></i>
                                    <span>{item.rating}</span>
                                  </span>
                                </div>
                                <h4 className="title">
                                  <Link href="/menu-details">{item.title}</Link>
                                </h4>
                                <ul className="check-list style-one">
                                  {item.list.map((li, idx) => (
                                    <li key={idx}>
                                      <i className="far fa-check-circle"></i>
                                      {li}
                                    </li>
                                  ))}
                                </ul>
                                <Link href="/cart" className="theme-btn style-two">
                                  <i className="far fa-cart-plus"></i> Add to Cart
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
