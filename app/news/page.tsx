"use client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  views: number;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Rani Food Industries Launches New Product Line",
      excerpt: "Exciting new range of healthy snacks introduced to meet growing consumer demand for nutritious options...",
      content: "Rani Food Industries Limited is proud to announce the launch of our new healthy snack line, featuring innovative products made with premium ingredients. This new range responds to the growing consumer demand for nutritious, delicious, and convenient snacking options. Our research and development team has worked tirelessly to create products that combine great taste with health benefits, ensuring that families across Bangladesh can enjoy guilt-free snacking.",
      image: "/assets/images/blog/blog-1.jpg",
      date: "January 5, 2026",
      views: 245,
    },
    {
      id: 2,
      title: "Gold Mark Wins Best Biscuit Brand Award",
      excerpt: "Recognition for excellence in quality and customer satisfaction from the Bangladesh Food Industry Association...",
      content: "We are thrilled to announce that Gold Mark, our flagship brand, has been awarded the 'Best Biscuit Brand of the Year' by the Bangladesh Food Industry Association. This prestigious recognition is a testament to our unwavering commitment to quality, innovation, and customer satisfaction. The award honors our consistent delivery of superior products that have won the hearts of millions of families across the nation.",
      image: "/assets/images/blog/blog-2.jpg",
      date: "December 28, 2025",
      views: 312,
    },
    {
      id: 3,
      title: "Expansion of Manufacturing Facility Completed",
      excerpt: "State-of-the-art production lines increase capacity by 40%, enabling us to meet growing market demand...",
      content: "Rani Food Industries Limited has successfully completed the expansion of our manufacturing facility, incorporating state-of-the-art production lines that increase our capacity by 40%. This significant investment demonstrates our commitment to growth and our ability to meet the increasing market demand for our products. The new facility features advanced automation technology, enhanced quality control systems, and improved efficiency measures that will benefit both our operations and our customers.",
      image: "/assets/images/blog/blog-3.jpg",
      date: "December 20, 2025",
      views: 189,
    },
    {
      id: 4,
      title: "Rani Food Supports Local Community Initiative",
      excerpt: "Partnership with local schools to provide nutritious snacks and educational programs for students...",
      content: "As part of our corporate social responsibility, Rani Food Industries has partnered with local schools across Bangladesh to provide nutritious snacks and educational programs about healthy eating habits. This initiative aims to support student welfare and promote awareness about nutrition in young generations. We believe in giving back to the communities that have supported our growth over the years.",
      image: "/assets/images/blog/blog-1.jpg",
      date: "December 15, 2025",
      views: 156,
    },
    {
      id: 5,
      title: "New Export Markets Opened in Southeast Asia",
      excerpt: "Rani Food Industries expands international presence with exports to three new countries in the region...",
      content: "Rani Food Industries Limited is excited to announce our expansion into three new Southeast Asian markets. This milestone marks a significant step in our international growth strategy and demonstrates the global appeal of our quality products. Our commitment to maintaining international standards has enabled us to successfully enter these competitive markets and represent Bangladesh on the world stage.",
      image: "/assets/images/blog/blog-2.jpg",
      date: "December 10, 2025",
      views: 278,
    },
    {
      id: 6,
      title: "Ringo Brand Celebrates 10 Years of Success",
      excerpt: "A decade of delighting customers with innovative chips and snacks that have become household favorites...",
      content: "This month marks the 10th anniversary of our beloved Ringo brand. Over the past decade, Ringo has become a household name, known for its innovative flavors and consistent quality. We celebrate this milestone by thanking our loyal customers who have made Ringo a success story. Special anniversary promotions and limited-edition flavors will be launched to mark this occasion.",
      image: "/assets/images/blog/blog-3.jpg",
      date: "December 5, 2025",
      views: 421,
    },
  ]);

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (newsItem: NewsItem) => {
    // Increment view count
    setNews(news.map(item => 
      item.id === newsItem.id 
        ? { ...item, views: item.views + 1 }
        : item
    ));
    
    const updatedNews = { ...newsItem, views: newsItem.views + 1 };
    setSelectedNews(updatedNews);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News & Updates">
      <section className="news-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Latest News & Updates</h2>
                <p>
                  Stay updated with the latest happenings at Rani Food Industries Limited
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {news.map((item, index) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-40">
                <div className="news-card wow fadeInUp" data-wow-delay={`${0.1 + index * 0.05}s`}>
                  <div className="news-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="news-meta">
                    <span className="news-views">
                      <i className="far fa-eye"></i> {item.views} views
                    </span>
                    <span className="news-date">
                      <i className="far fa-calendar"></i> {item.date}
                    </span>
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-excerpt">{item.excerpt}</p>
                    <button 
                      className="view-details-btn"
                      onClick={() => handleViewDetails(item)}
                    >
                      View Details <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Details Modal */}
      {isModalOpen && selectedNews && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content news-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-image">
              <Image
                src={selectedNews.image}
                alt={selectedNews.title}
                width={800}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="modal-body">
              <div className="news-meta-modal">
                <span className="news-views">
                  <i className="far fa-eye"></i> {selectedNews.views} views
                </span>
                <span className="news-date">
                  <i className="far fa-calendar"></i> {selectedNews.date}
                </span>
              </div>
              <h2 className="modal-title">{selectedNews.title}</h2>
              <p className="modal-text">{selectedNews.content}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .news-card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid #f0f0f0;
          border-bottom: 4px solid #c41e3a;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(196, 30, 58, 0.15);
        }

        .news-image {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .news-image img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease;
        }

        .news-card:hover .news-image img {
          transform: scale(1.05);
        }

        .news-meta {
          display: flex;
          justify-content: space-between;
          padding: 15px 20px;
          background: #f8f8f8;
          font-size: 13px;
          color: #666;
        }

        .news-views {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .news-date {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .news-content {
          padding: 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .news-title {
          font-size: 20px;
          font-weight: 700;
          color: #333;
          margin-bottom: 15px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .news-excerpt {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .view-details-btn {
          background: transparent;
          border: none;
          color: #c41e3a;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          transition: all 0.3s ease;
          align-self: flex-end;
        }

        .view-details-btn:hover {
          gap: 12px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .news-modal {
          background: #fff;
          border-radius: 10px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #fff;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 20px;
          color: #333;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: #c41e3a;
          color: #fff;
        }

        .modal-image {
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .modal-image img {
          width: 100%;
          height: 100%;
        }

        .modal-body {
          padding: 40px;
        }

        .news-meta-modal {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
          font-size: 14px;
          color: #666;
        }

        .modal-title {
          font-size: 28px;
          font-weight: 700;
          color: #333;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .modal-text {
          font-size: 16px;
          color: #666;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .news-card {
            margin-bottom: 30px;
          }

          .modal-image {
            height: 250px;
          }

          .modal-body {
            padding: 25px;
          }

          .modal-title {
            font-size: 22px;
          }

          .close-btn {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </Layout>
  );
}
