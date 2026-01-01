'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
interface FooterProps {
  paddingClass?: string; // optional prop for custom padding
}



export default function Footer({ paddingClass = 'pt-120 pb-75' }: FooterProps) {
  const [year, setYear] = useState<number>();
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="footer-default p-r z-1">
      <div className="container">
        {/*=== Footer Widgets ===*/}
        <div className={`footer-widget-area ${paddingClass}`}>
          <div className="row">
            {/*=== Company Info Widget ===*/}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget footer-about-widget mb-40 wow fadeInUp">
                <div className="widget-content">
                  <h4 className="widget-title">Rani Food Industries Ltd.</h4>
                  <p>
                    Savor the perfection of our culinary creations, where every bite tells a story of passion and flavor.
                  </p>
                  <ul className="social-link">
                    <li>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*=== Quick Links ===*/}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <div className="widget-content">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul className="widget-menu">
                    {/* <li>
                      <Link href="/">Home</Link>
                    </li> */}
                    <li>
                      <Link href="/">About Us</Link>
                    </li>
                    <li>
                      <Link href="/">Products</Link>
                    </li>
                    {/* <li>
                      <Link href="/">Our Menu</Link>
                    </li> */}
                    <li>
                      <Link href="/">Gallery</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/*=== Corporate Headquarter ===*/}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="footer-widget footer-contact-widget mb-40 wow fadeInUp">
                <div className="widget-content">
                  <h4 className="widget-title">Corporate Headquarter</h4>
                  <ul className="address-list">
                    <li>House-30, Road-4, Block-C, Banani, Dhaka-1213, Bangladesh.</li>
                    <li>
                      <Link href="tel:+88029822768">+88029822768</Link>
                    </li>
                    <li>
                      <Link href="mailto:info@ranifood.com.bd">info@ranifood.com.bd</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*=== Copyright Area ===*/}
      <div className="copyright-area text-center">
        <div className="container">
          <div className="copyright-text">
            <p>&copy; {year || '2025'} Rani Food Industries Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
