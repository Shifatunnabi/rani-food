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
          img: "/assets/images/menu/menu-4.jpg",
          title: "Beefy Bourbon Bliss",
          desc: "Bourbon-infused beefy bliss savory, smoky, sublime perfection.",
          price: 69.98,
        },
        {
          img: "/assets/images/menu/menu-5.jpg",
          title: "Grilled American Fillet",
          desc: "Grilled American fillet, a succulent culinary Pizza.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-6.jpg",
          title: "Smoked Paprika Sirloin",
          desc: "Sirloin infused, smoked paprika perfection on grill.",
          price: 39.62,
        },
        {
          img: "/assets/images/menu/menu-7.jpg",
          title: "Thai Basil Beef Stir-Fry",
          desc: "Stir-fried Thai basil beef aromatic, savory delight.",
          price: 39.99,
        },
        {
          img: "/assets/images/menu/menu-8.jpg",
          title: "Guinness Glazed Ribs",
          desc: "Guinness-glazed ribs: rich, savory, Irish-inspired indulgence.",
          price: 69.58,
        },
        {
          img: "/assets/images/menu/menu-9.jpg",
          title: "Grilled Gourmet Galore",
          desc: "Gourmet delight grilled to perfection and more.",
          price: 76.23,
        },
      ],
    },
    {
      id: "cat2",
      title: "Grilled",
      items: [
       {
          img: "/assets/images/menu/menu-4_1.jpg",
          title: "Smoky BBQ Ribs",
          desc: "Bourbon-infused beefy bliss savory, smoky, sublime perfection.",
          price: 69.98,
        },
        {
          img: "/assets/images/menu/menu-4_2.jpg",
          title: "Grilled American Fillet",
          desc: "Grilled American fillet, a succulent culinary Pizza.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-4_3.jpg",
          title: "Classic Grilled Shashlik",
          desc: "Sirloin infused, smoked paprika perfection on grill.",
          price: 39.62,
        },
        {
          img: "/assets/images/menu/menu-4_4.jpg",
          title: "Spicy BBQ Chicken",
          desc: "Stir-fried Thai basil beef aromatic, savory delight.",
          price: 39.98,
        },
        {
          img: "/assets/images/menu/menu-4_5.jpg",
          title: "Lamb Grilled Shashlik",
          desc: "Grilled American fillet, a succulent culinary Pizza.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-4_6.jpg",
          title: "Grilled Gourmet Galore",
          desc: "Gourmet delight grilled to perfection and more.",
          price: 76.23,
        },
      ],
    },
    {
      id: "cat3",
      title: "Sizzling",
      items: [
       {
          img: "/assets/images/menu/menu-4_7.jpg",
          title: "Sea Food Sizzling",
          desc: "Bourbon-infused sea bliss savory, smoky, sublime perfection.",
          price: 69.98,
        },
        {
          img: "/assets/images/menu/menu-4_8.jpg",
          title: "Mutton Sizzling",
          desc: "Grilled American fillet, a succulent culinary Pizza.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-4_9.jpg",
          title: "Chicken Sizzling",
          desc: "Sirloin infused, smoked paprika perfection on grill.",
          price: 39.62,
        },
        {
          img: "/assets/images/menu/menu-4_10.jpg",
          title: "Special Thai Sizzling",
          desc: "Stir-fried Thai basil beef aromatic, savory delight.",
          price: 39.98,
        },
        {
          img: "/assets/images/menu/menu-4_11.jpg",
          title: "Prawn Sizzling",
          desc: "Prawns grilled to perfection, a seafood sensation.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-4_12.jpg",
          title: "Prawn and Fish Sizzling",
          desc: "Sizzling prawns and fish, a coastal culinary delight.",
          price: 76.98,
        },
      ],
    },
    {
      id: "cat4",
      title: "Steak",
      items: [
        {
          img: "/assets/images/menu/menu-4_13.jpg",
          title: "T-Bone Steak",
          desc: "Bourbon-infused beefy bliss savory, smoky, sublime perfection.",
          price: 69.98,
        },
        {
          img: "/assets/images/menu/menu-4_14.jpg",
          title: "Tomahawk Steak",
          desc: "Grilled American fillet, a succulent culinary Pizza.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-4_15.jpg",
          title: "Fillet Mignon Steak",
          desc: "Fillet mignon, tender perfection on every plate.",
          price: 56.82,
        },
        {
          img: "/assets/images/menu/menu-4_16.jpg",
          title: "Flank Steak",
          desc: "Flank steak, marinated and grilled to juicy perfection.",
          price: 36.82,
        },
        {
          img: "/assets/images/menu/menu-4_17.jpg",
          title: "Ribeye Steak",
          desc: "Ribeye steak, rich marbling for ultimate flavor.",
          price: 69.82,
        },
        {
          img: "/assets/images/menu/menu-4_18.jpg",
          title: "Porterhouse Steak",
          desc: "Porterhouse steak, the king of steaks, grand and flavorful.",
          price: 69.82,
        },
      ],
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Menu V2">
      {/*====== Start Menu Section ======*/}
      <section className="menu-section pt-110 pb-100">
        <div className="container">
          {/* Section Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>CHOOSE MENU</h2>
                <p>
                  Indulge in an array of meticulously crafted sushi rolls, artfully blending <br />
                  fresh ingredients for a delightful taste experience.
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="row">
            <div className="col-lg-12">
              <div className="foodix-tabs style-two mb-70">
                <ul className="nav nav-tabs justify-content-center wow fadeInDown">
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
              {categories.map(
                (cat) =>
                  activeTab === cat.id && (
                    <div key={cat.id} className="tab-pane fade show active">
                      <div className="row">
                        {cat.items.map((item, idx) => (
                          <div key={idx} className="col-xl-6">
                            <div className="menu-item style-three mb-30">
                              <div className="menu-thumbnail">
                                <Image
                                  src={item.img}
                                  alt={item.title}
                                  width={100}
                                  height={100}
                                />
                              </div>
                              <div className="menu-info">
                                <h4 className="title">
                                  <Link href="/menu-details">{item.title}</Link>
                                </h4>
                                <p>{item.desc}</p>
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
                  )
              )}
            </div>
          </div>
        </div>
      </section>
      {/*====== End Menu Section ======*/}
    </Layout>
  );
}
