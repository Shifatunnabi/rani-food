import Image from "next/image";
import Layout from "@/components/layout/Layout";

export default function PricingPage() {
  const pricingBundles = [
    {
      title: "Basic",
      price: 75,
      duration: "/ Month",
      description: "Per month, billed annually minimum 50 foods item.",
      items: ["Beef Ribs", "Turkey Drumstick", "Turkey Wings", "Lamb Rack", "Beef Sirloin", "Venison Loin"],
    },
    {
      title: "Double",
      price: 120,
      duration: "/ Month",
      description: "Per month, billed annually minimum 50 foods item.",
      items: ["Beef Ribs", "Turkey Drumstick", "Turkey Wings", "Lamb Rack", "Beef Sirloin", "Venison Loin"],
    },
    {
      title: "Family",
      price: 320,
      duration: "/ Month",
      description: "Per month, billed annually minimum 50 foods item.",
      items: ["Beef Ribs", "Turkey Drumstick", "Turkey Wings", "Lamb Rack", "Beef Sirloin", "Venison Loin"],
    },
  ];

  const topSelling = [
    { img: "/assets/images/product/top-1.jpg", title: "Filet Mignon", price: 25 },
    { img: "/assets/images/product/top-2.jpg", title: "Raw beef sirloin", price: 25 },
    { img: "/assets/images/product/top-3.jpg", title: "Skirt Steak", price: 25 },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Pricing">
      {/* Pricing Section */}
      <section className="pricing-section pt-120 pb-90 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h2>Select your meat bundle</h2>
                <p>
                  Choose from various meat options grouped together in a bundle for convenient selection and
                  purchase at once.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {pricingBundles.map((bundle, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                <div className="pricing-item style-two mb-40">
                  <div className="pricing-head">
                    <span className="title">{bundle.title}</span>
                    <h2 className="price">
                      <span className="currency">$</span>
                      {bundle.price}
                      <span className="duration">{bundle.duration}</span>
                    </h2>
                    <p>{bundle.description}</p>
                  </div>
                  <div className="pricing-body">
                    <ul>
                      {bundle.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="pricing.html" className="theme-btn style-two">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div
          className="cta-wrapper bg_cover pt-110 pb-130"
          style={{ backgroundImage: "url('/assets/images/bg/cta_bg-1.jpg')" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-content-box text-white text-center">
                  <h2>We offer daily fresh meat</h2>
                  <p>
                    We provide a daily assortment of freshly sourced meat products, ensuring quality and
                    availability for our customers every day.
                  </p>
                  <a href="contact.html" className="theme-btn style-one">
                    Book A Table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="top-selling-section pt-110 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55">
                <h2>Top-selling meat products</h2>
                <p>
                  These are the most popular and highest-selling meat selections, preferred by customers for
                  their quality and taste.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {topSelling.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-sm-12">
                <div className="menu-item top-menu-item mb-30">
                  <div className="menu-image">
                    <Image src={item.img} alt={item.title} width={400} height={300} className="img-fluid" />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <a href="menu-details.html">{item.title}</a>
                    </h4>
                    <p className="price">
                      <span className="currency">$</span>
                      {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
