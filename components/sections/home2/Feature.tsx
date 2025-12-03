export default function FeaturesSection() {
  

  const features = [
    {
      icon: 'flaticon-credit-card',
      title: 'Security Payment',
      description: 'We Ensure Secure Payment',
    },
    {
      icon: 'flaticon-return-on-investment',
      title: 'Money Returns',
      description: 'Return It Within 30 Days',
    },
    {
      icon: 'flaticon-free-shipping',
      title: 'Free Shipping',
      description: 'Free Shipping On All Us',
    },
    {
      icon: 'flaticon-24-hours',
      title: 'Support 24/7',
      description: 'Contact 24 Hours A Day',
    },
  ];

  return (
    <section className="features-section gray-bg pt-60 pb-30">
      <div className="container">
        <div className="row">
          {features.map((feature, index) => (
            <div
              className="col-xl-3 col-md-6 col-sm-12"
              key={index}
            >
              <div className="iconic-info-box style-three mb-30 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="content">
                  <h4 className="title">{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
