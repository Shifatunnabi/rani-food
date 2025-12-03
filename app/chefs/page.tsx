import Layout from "@/components/layout/Layout";

export default function ChefsSection() {
  const chefs = [
    { name: "John Carry", position: "Executive chef", img: "team-8.jpg" },
    { name: "Alexa Lora", position: "Junior Chef", img: "team-9.jpg" },
    { name: "Hony Smith", position: "Junior Chef", img: "team-10.jpg" },
    { name: "David Liam", position: "Junior Chef", img: "team-11.jpg" },
    { name: "Olivia Ava", position: "Junior Chef", img: "team-12.jpg" },
    { name: "John Jonson", position: "Junior Chef", img: "team-13.jpg" },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Chefs">
      <section className="chefs-section pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Meet our special chef</h2>
                <p>
                  Introducing our esteemed culinary virtuoso, a maestro of flavors
                  crafting exquisite dishes with passion, precision, and a touch of magic.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {chefs.map((chef, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item style-two mb-40 wow fadeInUp">
                  <div className="member-image">
                    <img src={`assets/images/team/${chef.img}`} alt={chef.name} />
                  </div>
                  <div className="member-info">
                    <h4 className="title">{chef.name}</h4>
                    <span className="position">{chef.position}</span>
                    <ul className="social-link">
                      <li>
                        <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                      </li>
                    </ul>
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
