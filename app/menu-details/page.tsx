'use client';
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function MenuDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("cat1"); // 👈 track active tab

  // ✅ Quantity Button Logic
  const handleQuantityChange = (type: "up" | "down") => {
    setQuantity((prev) => {
      if (type === "up") return prev + 1;
      if (type === "down" && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Menu Details">
      <section className="menu-details-section pt-130 pb-65">
        <div className="container">
          <div className="menu-details-wrapper">
            <div className="row align-items-center">
              {/* Menu Image */}
              <div className="col-lg-6">
                <div className="menu-image mb-50 wow fadeInLeft">
                  <Image
                    src="/assets/images/product/product-single-1.jpg"
                    alt="Product Image"
                    width={600}
                    height={600}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Menu Info */}
              <div className="col-lg-6">
                <div className="menu-info-content mb-50 wow fadeInRight">
                  <h4 className="title">Gourmet Griddl Masterpiece</h4>
                  <p>
                    Plant-based dining is no longer a niche it's a movement. Chefs are pushing the
                    boundaries of creativity.
                  </p>
                  <span className="price">
                    <span className="currency">$</span>39.92{" "}
                    <span className="pre-price">
                      <span className="currency">$</span>45.25
                    </span>
                  </span>

                  <div className="product-cart-variation">
                    <ul>
                      <li>
                        <div className="quantity-input">
                          <button
                            className="quantity-down"
                            onClick={() => handleQuantityChange("down")}
                          >
                            <i className="far fa-minus"></i>
                          </button>
                          <input className="quantity" type="text" value={quantity} readOnly />
                          <button
                            className="quantity-up"
                            onClick={() => handleQuantityChange("up")}
                          >
                            <i className="far fa-plus"></i>
                          </button>
                        </div>
                      </li>
                      <li>
                        <select className="wide">
                          <option data-display="Variation Size">Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                        </select>
                      </li>
                    </ul>
                  </div>

                  <div className="add-to-cart">
                    <Link href="/cart" className="theme-btn style-one">Add To Cart</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Tabs */}
            <div className="row">
              <div className="col-xl-6">
                <div className="description-content-wrapper mb-30 wow fadeInDown">
                  <div className="foodix-tabs style-three mb-20">
                    <ul className="nav nav-tabs wow fadeInDown" role="tablist">
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTab === "cat1" ? "active" : ""}`}
                          onClick={() => setActiveTab("cat1")}
                          type="button"
                        >
                          Food Details
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTab === "cat2" ? "active" : ""}`}
                          onClick={() => setActiveTab("cat2")}
                          type="button"
                        >
                          Food Video
                        </button>
                      </li>
                      <li className="nav-item">
                        <button
                          className={`nav-link ${activeTab === "cat3" ? "active" : ""}`}
                          onClick={() => setActiveTab("cat3")}
                          type="button"
                        >
                          Reviews
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="tab-content">
                    <div
                      className={`tab-pane fade ${
                        activeTab === "cat1" ? "show active" : ""
                      }`}
                      id="cat1"
                    >
                      <div className="content-box">
                        <p>
                          Indulge in a mouthwatering culinary delight with our Chicken Skewers paired
                          with vibrant slices of sweet bell peppers...
                        </p>
                        <h4>Ingredients:</h4>
                        <ul className="check-list mb-30">
                          <li>Fresh chicken breast or thigh meat, cubed</li>
                          <li>Assorted sweet bell peppers sliced into rings</li>
                          <li>Marinade (your choice of herbs, spices, and seasonings)</li>
                          <li>Olive oil</li>
                          <li>Salt and pepper</li>
                        </ul>
                        <h4>Preparation:</h4>
                        <ul className="check-list mb-30">
                          <li>Enjoy the skewers with a side of fresh salad or rice</li>
                          <li>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                          <li>Pair with your favorite dipping sauce or chutney for added variety</li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "cat2" ? "show active" : ""
                      }`}
                      id="cat2"
                    >
                      <div className="content-box">
                        
                        <h4>Ingredients:</h4>
                        <ul className="check-list mb-30">
                          <li>Fresh chicken breast or thigh meat, cubed</li>
                          <li>Assorted sweet bell peppers sliced into rings</li>
                          <li>Marinade (your choice of herbs, spices, and seasonings)</li>
                          <li>Olive oil</li>
                          <li>Salt and pepper</li>
                        </ul>
                        <h4>Preparation:</h4>
                        <ul className="check-list mb-30">
                          <li>Enjoy the skewers with a side of fresh salad or rice</li>
                          <li>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                          <li>Pair with your favorite dipping sauce or chutney for added variety</li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "cat3" ? "show active" : ""
                      }`}
                      id="cat3"
                    >
                      <div className="content-box">
                        <p>
                          Indulge in a mouthwatering culinary delight with our Chicken Skewers paired
                          with vibrant slices of sweet bell peppers...
                        </p>
                        
                        <h4>Preparation:</h4>
                        <ul className="check-list mb-30">
                          <li>Enjoy the skewers with a side of fresh salad or rice</li>
                          <li>Drizzle with a zesty lemon or lime juice for an extra burst of flavor</li>
                          <li>Pair with your favorite dipping sauce or chutney for added variety</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Foodix Banners */}
              <div className="col-xl-6">
                <div className="foodix-banner-wrapper">
                  <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
                    <div
                      className="banner-inner-wrap bg_cover"
                      style={{
                        backgroundImage: "url(/assets/images/bg/banner-bg-3.jpg)",
                      }}
                    >
                      <div className="banner-img">
                        <Image
                          src="/assets/images/bg/bn-img-1.png"
                          alt="banner image"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="banner-content">
                        <span>Premium skewers</span>
                        <h3>chicken skewers</h3>
                        <p>
                          Savor the tantalizing taste of our expertly grilled chicken skewers,
                          marinated.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="foodix-banner-item style-three mb-30 wow fadeInUp">
                    <div
                      className="banner-inner-wrap bg_cover"
                      style={{
                        backgroundImage: "url(/assets/images/bg/banner-bg-4.jpg)",
                      }}
                    >
                      <div className="banner-img">
                        <Image
                          src="/assets/images/bg/bn-img-2.png"
                          alt="banner image"
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="banner-content">
                        <span>Premium Wrap</span>
                        <h3>chicken Wrap</h3>
                        <p>
                          Indulge in our savory chicken wrap, a delightful blend of tender grilled
                          chicken.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Items */}
            <div className="releted-item-wrap pt-45">
              <h3 className="releted-title mb-30 wow fadeInDown">Related items</h3>
              <div className="row justify-content-center">
                {[
                  {
                    img: "/assets/images/product/releted-1.png",
                    title: "Cheese Pizza",
                    desc: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
                  },
                  {
                    img: "/assets/images/product/releted-2.png",
                    title: "Chicken Pizza",
                    desc: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
                  },
                  {
                    img: "/assets/images/product/releted-3.png",
                    title: "Garden Veggie",
                    desc: "Melting mozzarella atop a crisp crust a timeless cheese pizza",
                  },
                ].map((item, i) => (
                  <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="menu-item related-menu-item text-center mb-30 wow fadeInUp">
                      <div className="menu-image">
                        <Image src={item.img} alt={item.title} width={300} height={300} />
                      </div>
                      <div className="menu-info">
                        <Link href="/menu-details"><h4 className="title">{item.title}</h4></Link>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
