import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function GalleryPage() {
  const galleryImages = [
    "/assets/images/gallery/gallery-1.jpg",
    "/assets/images/gallery/gallery-2.jpg",
    "/assets/images/gallery/gallery-3.jpg",
    "/assets/images/gallery/gallery-4.jpg",
    "/assets/images/gallery/gallery-5.jpg",
    "/assets/images/gallery/gallery-6.jpg",
    "/assets/images/gallery/gallery-7.jpg",
    "/assets/images/gallery/gallery-8.jpg",
    "/assets/images/gallery/gallery-9.jpg",
    "/assets/images/gallery/gallery-10.jpg",
  ];

  // For layout classes (Bootstrap grid)
  const layoutClasses = [
    "col-lg-7",
    "col-lg-5",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-5",
    "col-lg-7",
  ];

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section pt-120 pb-100">
        <div className="container">
          <div className="isotope-masonry-grid row">
            {galleryImages.map((img, i) => (
              <div key={i} className={`${layoutClasses[i]} isotope-filter-item`}>
                <div className="gallery-item style-one mb-30 wow fadeInDown">
                  <div className="gallery-img">
                    <Image
                      src={img}
                      alt={`gallery image ${i + 1}`}
                      width={800}
                      height={600}
                      className="w-full"
                    />
                    <div className="hover-content">
                      <a href={img} className="insta-icon img-popup">
                        <i className="far fa-search-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
}
