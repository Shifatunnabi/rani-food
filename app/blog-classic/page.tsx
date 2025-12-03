import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function BlogGridPage() {
  const blogPosts = [
    {
      title: "Gourmet Griddl Masterpiece",
      category: "Creativity",
      date: "July 5, 2025",
      img: "/assets/images/blog/blog-10.jpg",
      link: "/blog-details",
      desc: "Plant-based dining is no longer a niche; it's a movement. Chefs are pushing the boundaries of creativity with plant-powered dishes that are not only delicious but also eco-friendly."
    },
    {
      title: "Skyline Epicurean Delight",
      category: "Creativity",
      date: "July 5, 2025",
      img: "/assets/images/blog/blog-11.jpg",
      link: "/blog-details",
      desc: "Plant-based dining is no longer a niche; it's a movement. Chefs are pushing the boundaries of creativity with plant-powered dishes that are not only delicious but also eco-friendly."
    },
    {
      title: "Burger and Soft Drinks",
      category: "Creativity",
      date: "July 5, 2025",
      img: "/assets/images/blog/blog-12.jpg",
      link: "/blog-details",
      desc: "Plant-based dining is no longer a niche; it's a movement. Chefs are pushing the boundaries of creativity with plant-powered dishes that are not only delicious but also eco-friendly."
    }
  ];

  const recentPosts = [
    {
      title: "Flavorful Fusion: Exploring the Art of culinary blending",
      date: "May 10, 2025",
      img: "/assets/images/blog/post-thumb-1.jpg",
      link: "/blog-details"
    },
    {
      title: "Chef Spotlight: Behind the scenes of culinary mastery",
      date: "May 10, 2025",
      img: "/assets/images/blog/post-thumb-2.jpg",
      link: "/blog-details"
    },
    {
      title: "Time-Honored recipes with a modern twist",
      date: "May 14, 2025",
      img: "/assets/images/blog/post-thumb-3.jpg",
      link: "/blog-details"
    },
    {
      title: "Exploring authentic cuisine from around the world",
      date: "May 20, 2025",
      img: "/assets/images/blog/post-thumb-4.jpg",
      link: "/blog-details"
    }
  ];

  const categories = [
    { name: "Burger", count: 6 },
    { name: "Pizza", count: 4 },
    { name: "Sushi", count: 7 },
    { name: "Chicken", count: 8 },
    { name: "Mutton", count: 9 }
  ];

  const tags = ["BEER","Burgers","Delicious","Fast Food","Beef","Muton","Good Meal","Pizza"];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Classic">
      <section className="blogs-grid-section pt-130 pb-80">
        <div className="container">
          <div className="row">
            {/* Blog Posts */}
            <div className="col-xl-8">
              <div className="blog-classic-wrapper mb-50">
                {blogPosts.map((post, i) => (
                  <div key={i} className="blog-post-item style-two mb-35 wow fadeInUp">
                    <div className="post-content">
                      <h4 className="post-title">
                        <Link href={post.link}>{post.title}</Link>
                      </h4>
                      <div className="post-meta">
                        <span><Link href="/blog-grid">{post.category}</Link></span>
                        <span><Link href="/blog-grid">{post.date}</Link></span>
                      </div>
                      <figure>
                        <Image src={post.img} alt={post.title} width={800} height={500} />
                      </figure>
                      <p>{post.desc}</p>
                      <Link href={post.link} className="read-more">
                        Learn more <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <ul className="foodix-pagination d-flex mt-60 wow fadeInDown">
                  <li><Link href="#"><i className="far fa-arrow-left"></i></Link></li>
                  <li><Link href="#" className="active">01</Link></li>
                  <li><Link href="#">02</Link></li>
                  <li><Link href="#">03</Link></li>
                  <li><Link href="#"><i className="far fa-arrow-right"></i></Link></li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xl-4">
              <div className="sidebar-widget-area">
                {/* Search */}
                <div className="sidebar-widget sidebar-search-widget mb-30 wow fadeInDown">
                  <div className="widget-content">
                    <h4 className="sidebar-title">Search</h4>
                    <form>
                      <div className="form_group">
                        <input type="search" placeholder="Search here..." name="search" required />
                        <button className="search-btn"><i className="far fa-search"></i></button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="sidebar-widget sidebar-post-widget mb-30 wow fadeInDown">
                  <div className="widget-content">
                    <h4 className="sidebar-title">Recent Post</h4>
                    <ul className="recent-post-list">
                      {recentPosts.map((post, i) => (
                        <li key={i} className="post-thumbnail-content">
                          <Image src={post.img} alt={post.title} width={80} height={80} />
                          <div className="post-title-date">
                            <h6><Link href={post.link}>{post.title}</Link></h6>
                            <span className="posted-on"><Link href="#">{post.date}</Link></span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Categories */}
                <div className="sidebar-widget sidebar-category-widget mb-30 wow fadeInDown">
                  <div className="widget-content">
                    <h4 className="sidebar-title">Categories</h4>
                    <ul>
                      {categories.map((cat, i) => (
                        <li key={i}>
                          <Link href="blog-grid">
                            <i className="far fa-angle-right"></i>{cat.name} <span>({cat.count})</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="sidebar-widget sidebar-tag-widget wow fadeInDown mb-30">
                  <div className="widget-content">
                    <h4 className="sidebar-title">Popular Tags</h4>
                    <div className="tagcloud">
                      {tags.map((tag, i) => (
                        <Link key={i} href="/blog-grid">{tag}</Link>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}

