import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsPage() {
  const recentPosts = [
    {
      title: "Flavorful Fusion: Exploring the Art of culinary blending",
      date: "May 10, 2025",
      img: "/assets/images/blog/post-thumb-1.jpg",
      link: "/blog-details",
    },
    {
      title: "Chef Spotlight: Behind the scenes of culinary mastery",
      date: "May 10, 2025",
      img: "/assets/images/blog/post-thumb-2.jpg",
      link: "/blog-details",
    },
    {
      title: "Time-Honored recipes with a modern twist",
      date: "May 14, 2025",
      img: "/assets/images/blog/post-thumb-3.jpg",
      link: "/blog-details",
    },
    {
      title: "Exploring authentic cuisine from around the world",
      date: "May 20, 2025",
      img: "/assets/images/blog/post-thumb-4.jpg",
      link: "/blog-details",
    },
  ];

  const categories = [
    { name: "Burger", count: 6 },
    { name: "Pizza", count: 4 },
    { name: "Sushi", count: 7 },
    { name: "Chicken", count: 8 },
    { name: "Mutton", count: 9 },
  ];

  const tags = [
    "BEER",
    "Burgers",
    "Delicious",
    "Fast Food",
    "Beef",
    "Muton",
    "Good Meal",
    "Pizza",
  ];

  const comments = [
    {
      name: "Albert Flores",
      date: "May 25, 2025",
      avatar: "/assets/images/blog/comment-1.jpg",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse molestiae consequatur qui dolorem eum fugiat voluptas",
      replies: [
        {
          name: "Michel Holder",
          date: "May 25, 2025",
          avatar: "/assets/images/blog/comment-2.jpg",
          content:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse molestiae consequatur qui dolorem eum fugiat voluptas",
        },
      ],
    },
    {
      name: "Michel Holder",
      date: "May 25, 2025",
      avatar: "/assets/images/blog/comment-2.jpg",
      content:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi consequatur",
      replies: [],
    },
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
      <section className="blogs-grid-section pt-130 pb-100">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-xl-8">
              <div className="blog-details-wrapper">
                <div className="blog-post-item wow fadeInUp">
                  <div className="main-post">
                    <div className="post-content">
                      <h4 className="post-title">Gourmet Griddle Masterpiece</h4>
                      <div className="post-meta">
                        <span>
                          <Link href="blog-classic">Creativity</Link>
                        </span>
                        <span>
                          <Link href="blog-classic">July 5, 2025</Link>
                        </span>
                      </div>
                      <figure>
                        <Image
                          src="/assets/images/blog/blog-10.jpg"
                          alt="Post Thumbnail"
                          width={800}
                          height={500}
                        />
                      </figure>
                      <p>
                        Embark on a delectable journey as we delve into the world
                        of culinary delights and gastronomic adventures. Food is
                        not just sustenance; it's an art that connects cultures,
                        evokes memories, and stirs emotions. In this blog, we
                        invite you to join us as we explore the fascinating realm
                        of flavors, aromas, and the stories behind every dish.
                        Whether you're a seasoned foodie or simply curious about
                        the magic that happens in the kitchen, our culinary
                        exploration promises to satisfy your appetite for
                        knowledge and inspiration.
                      </p>
                      <p>
                        Discover the artistry of blending flavors and techniques
                        from different cuisines. Explore how culinary fusion can
                        result in unique and tantalizing dishes that transcend
                        cultural boundaries. From Japanese-Peruvian fusion to
                        modern twists on classic comfort foods, we'll take you on
                        a global taste tour that celebrates the beauty of culinary
                        creativity.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="block-image mb-40">
                            <Image
                              src="/assets/images/blog/blog-single-1.jpg"
                              alt="Post Thumbnail"
                              width={400}
                              height={300}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="block-image mb-40">
                            <Image
                              src="/assets/images/blog/blog-single-2.jpg"
                              alt="Post Thumbnail"
                              width={400}
                              height={300}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="entry-footer wow fadeInUp">
                    <div className="tag-links">
                      <span>Tag:</span>
                      <Link href="/blog-classic">BEER</Link>
                      <Link href="/blog-classic">Burgers</Link>
                      <Link href="/blog-classic">Pizza</Link>
                    </div>
                    <div className="social-share">
                      <span>Share:</span>
                      <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#"><i className="far fa-paper-plane"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="comments-area mt-60 mb-50 wow fadeInUp">
                  <h3 className="comments-title">Popular Comments</h3>
                  <ul className="comments-list">
                    {comments.map((comment, i) => (
                      <li key={i}>
                        <div className="comment">
                          <div className="comment-avatar">
                            <Image
                              src={comment.avatar}
                              alt={comment.name}
                              width={80}
                              height={80}
                            />
                          </div>
                          <div className="comment-wrap">
                            <div className="comment-author-content">
                              <span className="author-name">
                                {comment.name}
                                <span className="date">{comment.date}</span>
                              </span>
                              <p>{comment.content}</p>
                              <a href="#comment-respond" className="reply">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        {comment.replies.length > 0 && (
                          <ul className="comment-reply">
                            {comment.replies.map((reply, j) => (
                              <li key={j} className="comment">
                                <div className="comment-avatar">
                                  <Image
                                    src={reply.avatar}
                                    alt={reply.name}
                                    width={80}
                                    height={80}
                                  />
                                </div>
                                <div className="comment-wrap">
                                  <div className="comment-author-content">
                                    <span className="author-name">
                                      {reply.name}
                                      <span className="date">{reply.date}</span>
                                    </span>
                                    <p>{reply.content}</p>
                                    <a href="#comment-respond" className="reply">
                                      Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Comment Form */}
                <div className="comments-respond mb-30 wow fadeInUp" id="comment-respond">
                  <h3 className="comments-heading">Leave a Comment</h3>
                  <p>Your email address will not be published. Required fields are marked *</p>
                  <form className="comment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Enter Name"
                            name="name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email Address"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            name="message"
                            className="form_control"
                            placeholder="Write Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="theme-btn style-one">Post Your Comment</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
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
                        <input
                          type="search"
                          placeholder="Search here..."
                          name="search"
                          required
                        />
                        <button className="search-btn">
                          <i className="far fa-search"></i>
                        </button>
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
                            <h6>
                              <Link href={post.link}>{post.title}</Link>
                            </h6>
                            <span className="posted-on">
                              <Link href="#">{post.date}</Link>
                            </span>
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
                          <Link href="#">
                            {cat.name} <span>({cat.count})</span>
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
                        <Link key={i} href="#">
                          {tag}
                        </Link>
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
