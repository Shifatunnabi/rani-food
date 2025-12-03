"use client";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    img: "/assets/images/product/product-1.jpg",
    title: "Beefy Bourbon Bliss",
    price: 18.0,
    rating: 4.7,
    reviews: 375,
    features: ["4 Piece Chicken", "Spicy Sauce"],
  },
  {
    id: 2,
    img: "/assets/images/product/product-2.jpg",
    title: "Smoked Paprika Sirloin",
    price: 32.17,
    rating: 4.7,
    reviews: 375,
    features: ["4 Piece Chicken", "Spicy Sauce"],
  },
  {
    id: 3,
    img: "/assets/images/product/product-3.jpg",
    title: "Thai Basil Beef Stir-Fry",
    price: 39.21,
    rating: 4.7,
    reviews: 375,
    features: ["4 Piece Chicken", "Spicy Sauce"],
  },
  {
    id: 4,
    img: "/assets/images/product/product-4.jpg",
    title: "Korean BBQ Beef",
    price: 39.21,
    rating: 4.7,
    reviews: 375,
    features: ["4 Piece Chicken", "Spicy Sauce"],
  },
  {
    id: 5,
    img: "/assets/images/product/product-5.jpg",
    title: "Beef Bourguignon",
    price: 18.0,
    rating: 4.7,
    reviews: 375,
    features: ["4 Piece Chicken", "Spicy Sauce"],
  },
  {
    id: 6,
    img: "/assets/images/product/product-6.jpg",
    title: "Beef Wellington",
    price: 33.21,
    rating: 4.7,
    reviews: 375,
    features: ["4 Piece Chicken", "Spicy Sauce"],
  },
];

export default function MenuPage() {
  // Store wishlist items by ID
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products">
      <section className="menu-grid-section gray-bg pt-130 pb-130">
        <div className="container">
          {/* Filter and Info */}
          <div className="row align-items-center mb-30 d-flex justify-content-between">
            <div className="col-md-6">
              <p>Showing 1 - 12 of 30 Results</p>
            </div>
            <div className="col-lg-2 col-md-4 text-md-end">
              <select className="form-select wide">
                <option data-display="Sort by Newness">Sort by Newest</option>
                <option value="01">Price High To Low</option>
                <option value="02">Price Low To High</option>
              </select>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="row">
            {menuItems.map((item) => (
              <div key={item.id} className="col-xl-4 col-md-6 col-sm-12 mb-30">
                <div className="menu-item style-four mb-30 wow fadeInUp">
                  <div className="menu-thumbnail position-relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="img-fluid"
                    />

                    {/* Wishlist Button */}
                    <div className="wishlist-btn">
                      <button
                        onClick={() => toggleWishlist(item.id)}
                        className={wishlist.includes(item.id) ? "active" : ""}
                        aria-label="Add to wishlist"
                      >
                        <i
                          className={
                            wishlist.includes(item.id)
                              ? "fas fa-heart"
                              : "far fa-heart"
                          }
                        ></i>
                      </button>
                    </div>
                  </div>

                  <div className="menu-info">
                    <div className="menu-meta">
                      <span className="price">
                        <span className="currency">$</span>
                        {item.price.toFixed(2)}
                      </span>
                      <span className="rating">
                        <i className="fas fa-star"></i>
                        <a href="#">
                          {item.rating} ({item.reviews})
                        </a>
                      </span>
                    </div>

                    <h4 className="title">
                      <Link href="/menu-details">{item.title}</Link>
                    </h4>

                    <ul className="check-list style-one mb-3">
                      {item.features.map((feature, i) => (
                        <li key={i}>
                          <i className="far fa-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href="/menu-details" className="theme-btn style-two">
                      <i className="far fa-cart-plus"></i> Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="row">
            <div className="col-lg-12 text-center mt-4">
              <ul className="foodix-pagination d-flex justify-content-center">
                <li>
                  <a href="#">
                    <i className="far fa-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <a href="#">01</a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
