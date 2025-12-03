'use client';

import Link from "next/link";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      img: "assets/images/blog/blog-1.jpg",
      category: "Griddl",
      date: "May 24, 2024",
      comments: 2,
      title: "Gourmet Griddl Masterpiece",
      description: "Indulge your taste buds in a culinary adventure with our Testy Food.",
      link: "/blog-details",
      wowDelay: ".25s",
    },
    {
      id: 2,
      img: "assets/images/blog/blog-2.jpg",
      category: "Stack",
      date: "May 24, 2024",
      comments: 2,
      title: "Deluxe Flavor Fusion Stack",
      description: "Experience the artistry of our chefs as they elevate classic recipes.",
      link: "/blog-details",
      wowDelay: ".3s",
    },
    {
      id: 3,
      img: "assets/images/blog/blog-3.jpg",
      category: "Chicken",
      date: "May 24, 2024",
      comments: 2,
      title: "Regal Royale Delight",
      description: "Each carefully selected ingredient to contributes the harmonious food.",
      link: "/blog-details",
      wowDelay: ".35s",
    },
  ];

  return (
    <section className="blog-section pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Section Title */}
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Our Blog</span>
              <h2>Latest Blog Posts</h2>
              <p>
                Indulge in an array of meticulously crafted sushi rolls, artfully blending <br /> fresh
                ingredients for a delightful taste experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blogPosts.map(({ id, img, category, date, comments, title, description, link, wowDelay }) => (
            <div key={id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item style-one mb-40 wow fadeInUp" data-wow-delay={wowDelay}>
                <div className="post-thumbnail">
                  <img src={img} alt="Post Thumbnail" />
                  <Link href="/blog-classic" className="category-btn">
                    {category}
                  </Link>
                </div>
                <div className="post-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-calendar-alt"></i>
                      <Link href="/blog-classic">{date}</Link>
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      <Link href="/blog-classic">Comment ({comments})</Link>
                    </span>
                  </div>
                  <h4 className="post-title">
                    <Link href={link}>{title}</Link>
                  </h4>
                  <p>{description}</p>
                  <Link href={link} className="read-more">
                    Learn more<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
