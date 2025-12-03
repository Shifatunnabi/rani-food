'use client';

import { useState } from 'react';

type MenuItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  img: string;
};

type MenuData = {
  cat1: MenuItem[];
  cat2: MenuItem[];
  cat3: MenuItem[];
  cat4: MenuItem[];
  cat5: MenuItem[];
  cat6: MenuItem[];
};

const MenuSection = () => {
  type TabKey = keyof MenuData; // "cat1" | "cat2" | ... | "cat6"
  const [activeTab, setActiveTab] = useState<TabKey>("cat1");

  const menuData: MenuData = {
    cat1: [
      { id: 1, title: "Rainbow Roll", description: "A sushi roll with colorful fish slices, usually tuna, salmon, and avocado", price: "$25.50", img: "assets/images/menu/menu-1.jpg" },
      { id: 2, title: "Tuna Nigiri", description: "A sushi roll with colorful fish slices, usually tuna, salmon, and avocado", price: "$25.50", img: "assets/images/menu/menu-2.jpg" },
      { id: 3, title: "California Roll", description: "A sushi roll with colorful fish slices, usually tuna, salmon, and avocado", price: "$25.50", img: "assets/images/menu/menu-3.jpg" },
    ],
    cat2: [
      { id: 4, title: "Pepperoni Pizza", description: "Delicious pizza with pepperoni and cheese", price: "$25.50", img: "assets/images/menu/menu-1_4.jpg" },
      { id: 5, title: "Mushroom Pizza", description: "Pizza with fresh mushrooms and mozzarella", price: "$25.50", img: "assets/images/menu/menu-1_5.jpg" },
      { id: 6, title: "BBQ Chicken Pizza", description: "Pizza topped with BBQ chicken and onions", price: "$25.50", img: "assets/images/menu/menu-1_6.jpg" },
    ],
    cat3: [
      { id: 7, title: "BBQ Burger", description: "Juicy burger with BBQ sauce", price: "$25.50", img: "assets/images/menu/menu-1_7.jpg" },
      { id: 8, title: "Lamb Burger", description: "Lamb burger with lettuce and tomato", price: "$25.50", img: "assets/images/menu/menu-1_8.jpg" },
      { id: 9, title: "Chicken Burger", description: "Grilled chicken burger with cheese", price: "$25.50", img: "assets/images/menu/menu-1_9.jpg" },
    ],
    cat4: [
      { id: 10, title: "T-Bone Steak", description: "Tender T-bone steak cooked to perfection", price: "$25.50", img: "assets/images/menu/menu-1_10.jpg" },
      { id: 11, title: "Ribeye Steak", description: "Juicy ribeye with seasoning", price: "$25.50", img: "assets/images/menu/menu-1_11.jpg" },
      { id: 12, title: "Brisket Steak", description: "Slow-cooked brisket steak", price: "$25.50", img: "assets/images/menu/menu-1_12.jpg" },
    ],
    cat5: [
      { id: 13, title: "Chicken Stir-Fry", description: "Stir-fried chicken with veggies", price: "$25.50", img: "assets/images/menu/menu-1_13.jpg" },
      { id: 14, title: "Grilled Chicken Breast", description: "Grilled chicken breast with herbs", price: "$25.50", img: "assets/images/menu/menu-1_14.jpg" },
      { id: 15, title: "Spicy Chicken Fingers", description: "Crispy spicy chicken fingers", price: "$25.50", img: "assets/images/menu/menu-1_15.jpg" },
    ],
    cat6: [
      { id: 16, title: "Whoopie Pie Cake", description: "Delicious whoopie pie dessert", price: "$25.50", img: "assets/images/menu/menu-1_16.jpg" },
      { id: 17, title: "Funfetti Cake", description: "Colorful funfetti cake", price: "$25.50", img: "assets/images/menu/menu-1_17.jpg" },
      { id: 18, title: "Strawberry Shortcake", description: "Fresh strawberry shortcake", price: "$25.50", img: "assets/images/menu/menu-1_18.jpg" },
    ],
  };

  const getTabLabel = (key: TabKey) => {
    switch (key) {
      case "cat1": return "Sushi";
      case "cat2": return "Pizza";
      case "cat3": return "Burger";
      case "cat4": return "Steak";
      case "cat5": return "Chicken";
      case "cat6": return "Cake";
    }
  };

  return (
    <section className="menu-section">
      <div className="menu-bg-wrapper gray-bg pt-120 pb-90">
        <div className="container">
          <div className="row">
              <div className="col-lg-12">
                  {/* <!--=== Section Title ===--> */}
                <div className="section-title text-center mb-30 wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                      <span className="sub-title">Our special menu</span>
                      <h2>Savor Our Sushi Selection</h2>
                      <p>Indulge in an array of meticulously crafted sushi rolls, artfully blending <br/> fresh ingredients for a delightful taste experience.</p>
                  </div>
              </div>
          </div>
          {/* Tabs */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="foodix-tabs style-one mb-40 wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <ul className="nav nav-tabs mb-40" role="tablist">
                  {(Object.keys(menuData) as TabKey[]).map((key) => (
                    <li key={key}>
                      <button
                        className={`nav-link ${activeTab === key ? "active" : ""}`}
                        onClick={() => setActiveTab(key)}
                        type="button"
                      >
                        {getTabLabel(key)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <div className={`tab-pane fade show active`}>
              <div className="row justify-content-center">
                {menuData[activeTab].map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6 col-sm-12">
                    <div className="menu-item style-one mb-40">
                      <div className="menu-thumbnail">
                        <img src={item.img} alt={item.title} />
                      </div>
                      <div className="menu-info">
                        <h4>
                          <a href="menu-details.html">{item.title}</a>
                        </h4>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                        <a href="menu-details.html" className="theme-btn style-two">
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;