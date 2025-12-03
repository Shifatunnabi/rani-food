import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function HistoryPage() {

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="History">
      <section className="history-section pt-130 pb-100">
      <div className="container">
        <div className="history-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Section Content Box ===*/}
              <div className="section-content-box mb-50">
                <div className="section-title section-title-left wow fadeInDown mb-20">
                  <span className="sub-title">Our History</span>
                  <h2>
                    key milestones and <br /> dates
                  </h2>
                </div>
                <p>
                  The Main Chef is a culinary virtuoso and the creative force behind the kitchen&apos;s gastronomic artistry. With a profound passion for food.
                </p>
                <p>
                  Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="history-img mb-30 wow fadeInUp">
                      <Image
                        src="/assets/images/gallery/history-1.jpg"
                        alt="history"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="history-img mb-30 wow fadeInUp">
                      <Image
                        src="/assets/images/gallery/history-2.jpg"
                        alt="history"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/*=== History Image ===*/}
              <div className="history-img text-lg-end mb-50 wow fadeInRight">
                <Image
                  src="/assets/images/gallery/history-3.jpg"
                  alt="History"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/*=== History Wrapper 2 ===*/}
        <div className="history-wrapper">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Section Content Box ===*/}
              <div className="section-content-box wow fadeInLeft">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Vision to Plan</span>
                  <h2>2022</h2>
                </div>
                <p>
                  The Main Chef is a culinary virtuoso and the creative force behind the kitchen&apos;s gastronomic artistry. With a profound passion for food.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Section Image Box ===*/}
              <div className="section-image-box wow fadeInRight">
                <div className="text-box mb-45">
                  <p>
                    Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="history-img mb-30">
                      <Image
                        src="/assets/images/gallery/history-4.jpg"
                        alt="history"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="history-img mb-30">
                      <Image
                        src="/assets/images/gallery/history-5.jpg"
                        alt="history"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*=== History Wrapper 3 ===*/}
        <div className="history-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-content-box wow fadeInLeft">
                <div className="section-title section-title-left">
                  <span className="sub-title">Vision to Plan</span>
                  <h2>2023</h2>
                </div>
                <p>
                  The Main Chef is a culinary virtuoso and the creative force behind the kitchen&apos;s gastronomic artistry. With a profound passion for food.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Section Image Box ===*/}
              <div className="section-image-box wow fadeInRight">
                <div className="text-box mb-45">
                  <p>
                    Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="history-img mb-30">
                      <Image
                        src="/assets/images/gallery/history-6.jpg"
                        alt="history"
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="history-img mb-30">
                      <Image
                        src="/assets/images/gallery/history-7.jpg"
                        alt="history"
                        width={300}
                        height={300}
                      />
                    </div>
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
