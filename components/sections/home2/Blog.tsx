import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <>
      {/*====== Start Blog Section ======*/}
      <section className="blog-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-food-tray"></i>Our Latest Blog
                </span>
                <h2>Latest Blog Posts</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Blog Post Item ===*/}
              <div className="blog-post-item style-four mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img
                    src="assets/images/home-beef/blog/blog-1.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-user-alt"></i>
                      <a href="#">By David</a>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <a href="#">Comment (2)</a>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">
                      Dish with vegetables and roasted Steak meat
                    </Link>
                  </h4>
                  <p>
                    Crispy stovetop red potatoes, seasoned to perfection, golden
                    and delicious.
                  </p>
                  <Link href="/blog-details" className="read-more style-one">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Blog Post Item ===*/}
              <div className="blog-post-item style-four mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img
                    src="assets/images/home-beef/blog/blog-2.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-user-alt"></i>
                      <a href="#">By David</a>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <a href="#">Comment (2)</a>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">
                      Handi Beef biriyani with tomato & Special salads
                    </Link>
                  </h4>
                  <p>
                    Make Jimmy soft-boiled eggs at home with tender whites and
                    creamy yolks.
                  </p>
                  <Link href="/blog-details" className="read-more style-one">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Blog Post Item ===*/}
              <div className="blog-post-item style-four mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img
                    src="assets/images/home-beef/blog/blog-3.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-user-alt"></i>
                      <a href="#">By David</a>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <a href="#">Comment (2)</a>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">
                      Kebabs with a side of cucumber salad best food
                    </Link>
                  </h4>
                  <p>
                    Warm, traditional soft pretzels served with rich, sweet beer
                    cheese dip.
                  </p>
                  <Link href="/blog-details" className="read-more style-one">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
    </>
  );
};

export default BlogSection;
