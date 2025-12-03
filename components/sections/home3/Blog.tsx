import React from "react";

const BlogSection = () => {
  return (
    <section className="blog-section pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*=== Section Title ===*/}
            <div className="section-title text-center mb-55 wow fadeInDown">
              <span className="sub-title">Our Blog</span>
              <h2>Latest News & Article</h2>
              <p>
                Explore diverse topics and stay informed with our engaging blog. Discover news,
                insights, and trends, offering valuable perspectives
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Blog Post Item ===*/}
            <div className="blog-post-item style-two mb-40 wow fadeInDown">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog-14.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span><a href="#">creativity</a></span>
                  <span><a href="#">May 24, 2024</a></span>
                </div>
                <h4 className="post-title">
                  <a href="blog-details.html">Curry Chickpea Delight Burger</a>
                </h4>
                <p>Savory chickpea patty with aromatic curry, a delightful burger option.</p>
                <a href="blog-details.html" className="read-more">
                  Learn more<i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Blog Post Item ===*/}
            <div className="blog-post-item style-two mb-40 wow fadeInDown">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog-15.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span><a href="#">creativity</a></span>
                  <span><a href="#">May 24, 2024</a></span>
                </div>
                <h4 className="post-title">
                  <a href="blog-details.html">Classic Americana Burger</a>
                </h4>
                <p>
                  Traditional flavors, grilled perfection; iconic taste of American nostalgia.
                </p>
                <a href="blog-details.html" className="read-more">
                  Learn more<i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            {/*=== Blog Post Item ===*/}
            <div className="blog-post-item style-two mb-40 wow fadeInDown">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog-16.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span><a href="#">creativity</a></span>
                  <span><a href="#">May 24, 2024</a></span>
                </div>
                <h4 className="post-title">
                  <a href="blog-details.html">Triple Cheese Pleasure Burger</a>
                </h4>
                <p>Three cheeses in a savory, indulgent burger delightfully pleasing.</p>
                <a href="blog-details.html" className="read-more">
                  Learn more<i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
