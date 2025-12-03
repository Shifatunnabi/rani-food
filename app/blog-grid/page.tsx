import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function BlogGridPage() {
  const blogs = [
    {
      title: "Gourmet Griddl Masterpiece",
      date: "May 25, 2025",
      category: "Creativity",
      img: "/assets/images/blog/blog-4.jpg",
      link: "/blog-details",
      desc: "Indulge your taste buds in a culinary adventure with our Testy Food.",
    },
    {
      title: "Deluxe Flavor Fusion Stack",
      date: "May 25, 2025",
      category: "Creativity",
      img: "/assets/images/blog/blog-5.jpg",
      link: "/blog-details",
      desc: "Experience the artistry of our chefs as they elevate classic recipes.",
    },
    {
      title: "Regal Royale Delight",
      date: "May 25, 2025",
      category: "Creativity",
      img: "/assets/images/blog/blog-6.jpg",
      link: "/blog-details",
      desc: "Each carefully selected ingredient contributes the harmonious food.",
    },
    {
      title: "Elevate Epicurean Stack",
      date: "May 25, 2025",
      category: "Creativity",
      img: "/assets/images/blog/blog-7.jpg",
      link: "/blog-details",
      desc: "As you move to the main ranging from rich and savory light and refreshing.",
    },
    {
      title: "Towering Taste Triumph",
      date: "May 25, 2025",
      category: "Creativity",
      img: "/assets/images/blog/blog-8.jpg",
      link: "/blog-details",
      desc: "Join us celebrating the joy of cuisine delicious where every bite tells a story.",
    },
    {
      title: "Skyline Epicurean Delight",
      date: "May 25, 2025",
      category: "Creativity",
      img: "/assets/images/blog/blog-9.jpg",
      link: "/blog-details",
      desc: "Savor the exquisite blend of flavors in our Testy Best Food collection.",
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs">
      <section className="blogs-grid-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            {blogs.map((blog, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-item style-two mb-30 wow fadeInUp">
                  <div className="post-thumbnail">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={400}
                      height={300}
                      className="w-full"
                    />
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span>
                        <Link href="/blog-classic">{blog.category}</Link>
                      </span>
                      <span>
                        <Link href="/blog-classic">{blog.date}</Link>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <Link href={blog.link}>{blog.title}</Link>
                    </h4>
                    <p>{blog.desc}</p>
                    <Link href={blog.link} className="read-more">
                      Learn more<i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <ul className="foodix-pagination d-flex justify-content-center mt-20 wow fadeInDown">
                <li>
                  <Link href="/blog-grid">
                    <i className="far fa-arrow-left"></i>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-grid">01</Link>
                </li>
                <li>
                  <Link href="/blog-grid">02</Link>
                </li>
                <li>
                  <Link href="/blog-grid">03</Link>
                </li>
                <li>
                  <Link href="/blog-grid">
                    <i className="far fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
