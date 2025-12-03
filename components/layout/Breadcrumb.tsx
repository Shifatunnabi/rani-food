import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

export default function Breadcrumb({ breadcrumbTitle }: BreadcrumbProps) {
  return (
    <section className="page-banner">
      <div
        className="page-bg-wrapper p-r z-1 bg_cover pt-100 pb-110"
        style={{ backgroundImage: "url(/assets/images/bg/page-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-banner-content text-center">
                <h1 className="page-title">{breadcrumbTitle}</h1>
                <ul className="breadcrumb-link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li className="active">{breadcrumbTitle}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
