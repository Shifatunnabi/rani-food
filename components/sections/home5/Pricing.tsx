const pricingPackages = [
  {
    id: 1,
    title: "Basic",
    price: 12,
    duration: "/ Month",
    features: [
      "Spaghetti Marinara",
      "Rigatoni Amatriciana",
      "Seafood Linguine",
      "Caprese Salad",
      "Chef's Special Platter",
      "Truffle Alfredo",
    ],
    delay: "0.25s",
  },
  {
    id: 2,
    title: "Standard",
    price: 12,
    duration: "/ Month",
    features: [
      "Spaghetti Marinara",
      "Rigatoni Amatriciana",
      "Seafood Linguine",
      "Caprese Salad",
      "Chef's Special Platter",
      "Truffle Alfredo",
    ],
    delay: "0.3s",
  },
  {
    id: 3,
    title: "Premium",
    price: 12,
    duration: "/ Month",
    features: [
      "Spaghetti Marinara",
      "Rigatoni Amatriciana",
      "Seafood Linguine",
      "Caprese Salad",
      "Chef's Special Platter",
      "Truffle Alfredo",
    ],
    delay: "0.35s",
  },
];

const PricingSection = () => {
  return (
    <section className="pricing-section pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Our Pricing</span>
              <h2>Our best package</h2>
              <p>
                Unbeatable today's offer! Avail exclusive discounts on premium
                items. Limited time only don't miss out on the best deal today!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {pricingPackages.map(({ id, title, price, duration, features, delay }) => (
            <div key={id} className="col-xl-4 col-md-6 col-sm-12">
              <div
                className="pricing-item style-one mb-40 wow fadeInUp"
                data-wow-delay={delay}
              >
                <div className="pricing-head">
                  <span className="title">{title}</span>
                  <h2 className="price">
                    <span className="currency">$</span>
                    {price}
                    <span className="duration">{duration}</span>
                  </h2>
                </div>
                <div className="pricing-body">
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <a href="pricing.html" className="theme-btn style-two">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
