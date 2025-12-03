import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div
        className="intro-wrapper_one bg_cover pt-115 pb-95"
        style={{ backgroundImage: "url('/assets/images/bg/intro-bg-1.jpg')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-content-box text-center wow fadeInDown">
                <div className="section-title text-white mb-50">
                  <h2>
                    Possibilities Between Every <br /> Sushi Bite
                  </h2>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=Xj4E0Zry6K4"
                  className="video-popup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
