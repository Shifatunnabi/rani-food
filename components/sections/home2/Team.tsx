import Image from 'next/image';

export default function TeamSection() {
  
  const teamMembers = [
    {
      name: 'Mr. David Liam',
      position: 'Main Chef',
      img: '/assets/images/home-beef/team/team-1.jpg',
    },
    {
      name: 'Miss Alex Mika',
      position: 'Main Chef',
      img: '/assets/images/home-beef/team/team-2.jpg',
    },
    {
      name: 'Sir. John Smith',
      position: 'Main Chef',
      img: '/assets/images/home-beef/team/team-3.jpg',
    },
    {
      name: 'Jessika Joya',
      position: 'Assistant Chef',
      img: '/assets/images/home-beef/team/team-4.jpg',
    },
  ];

const socialPlatforms: string[] = ['facebook', 'twitter', 'instagram', 'pinterest'];

const getSocialIcon = (platform: string): string => {
  switch (platform) {
    case 'facebook':
      return 'fab fa-facebook-f';
    case 'twitter':
      return 'fab fa-twitter';
    case 'instagram':
      return 'fab fa-instagram';
    case 'pinterest':
      return 'fab fa-pinterest';
    default:
      return '';
  }
};


  return (
    <section className="team-section pt-130">
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-60 wow fadeInDown">
              <span className="sub-title">
                <i className="flaticon-food-tray"></i>Meet Our Chefs
              </span>
              <h2>Our Culinary Masters</h2>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-xl-3 col-md-6 col-sm-12" key={index}>
              <div className="team-item style-four mb-40 wow fadeInDown">
                <div className="member-image position-relative overflow-hidden rounded-lg">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                  />
                  <div className="hover-content absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <ul className="social-link">
                      {socialPlatforms.map((platform, idx) => (
                        <li key={idx}>
                          <a href="#" className="hover:text-yellow-400">
                            <i className={getSocialIcon(platform)}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center mt-4">
                  <h4 className="title">{member.name}</h4>
                  <span className="position">{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
