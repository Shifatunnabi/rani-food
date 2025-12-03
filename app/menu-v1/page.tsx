import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function MenuPage() {
  return (
   <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Menu V1">
      {/*====== Start Menu Section ======*/}
      <section className="menu-page-section gray-bg pt-110 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Choose our Foods</h2>
                <p>
                  Indulge in an array of meticulously crafted sushi rolls, artfully blending <br />
                  fresh ingredients for a delightful taste experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="menu-image-box mb-50 wow fadeInLeft">
                <Image src="/assets/images/gallery/menu-image-1.jpg" alt="Image" width={600} height={400} className="w-full" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="menu-item-list">
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-4.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Smoked Paprika Sirloin</Link>
                    </h4>
                    <p>Sirloin infused, smoked paprika perfection on grill.</p>
                    <p className="price"><span className="currency">$</span>39.92</p>
                  </div>
                </div>
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-5.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Red Wine Reduction Ribe</Link>
                    </h4>
                    <p>Ribeye, luxuriously glazed, red wine reduction perfection.</p>
                    <p className="price"><span className="currency">$</span>32.82</p>
                  </div>
                </div>
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-6.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Raspberry Chipotle Bone</Link>
                    </h4>
                    <p>T-Bone tango with raspberry chipotle, bold harmony.</p>
                    <p className="price"><span className="currency">$</span>56.62</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== Start Menu Section ======*/}
      <section className="menu-page-section pt-110 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <h2>Delightful Culinary Selection</h2>
                <p>
                  Indulge in an array of meticulously crafted sushi rolls, artfully blending <br />
                  fresh ingredients for a delightful taste experience.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="menu-item-list">
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-7.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Smoked Paprika Sirloin</Link>
                    </h4>
                    <p>Sirloin infused, smoked paprika perfection on grill.</p>
                    <p className="price"><span className="currency">$</span>39.92</p>
                  </div>
                </div>
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-8.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Red Wine Reduction Ribe</Link>
                    </h4>
                    <p>Ribeye, luxuriously glazed, red wine reduction perfection.</p>
                    <p className="price"><span className="currency">$</span>32.82</p>
                  </div>
                </div>
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-9.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Raspberry Chipotle Bone</Link>
                    </h4>
                    <p>T-Bone tango with raspberry chipotle, bold harmony.</p>
                    <p className="price"><span className="currency">$</span>56.62</p>
                  </div>
                </div>
                <div className="menu-item style-three mb-30 wow fadeInUp">
                  <div className="menu-thumbnail">
                    <Image src="/assets/images/menu/menu-10.jpg" alt="Menu Thumbnail" width={100} height={100} />
                  </div>
                  <div className="menu-info">
                    <h4 className="title">
                      <Link href="/menu-details">Raspberry Chipotle Bone</Link>
                    </h4>
                    <p>T-Bone tango with raspberry chipotle, bold harmony.</p>
                    <p className="price"><span className="currency">$</span>56.62</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="menu-image-box mb-50 wow fadeInRight">
                <Image src="/assets/images/gallery/menu-image-2.jpg" alt="Image" width={600} height={400} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
